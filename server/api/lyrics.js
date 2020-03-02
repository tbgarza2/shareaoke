const express = require('express');

const lyricsRouter = express.Router();

const rp = require('request-promise'); /* Same as request , with promise support */
const cheerio = require('cheerio');

// lyricsRouter.get('/', (req, res) => {
//   res.render('index');
// });

lyricsRouter.get('/', (req, res) => {
  console.log(req.query.query);
  // debugger;
  /* Format search query */
  const { query } = req.query;
  // .toString()
  // .trim()
  // .replace(/ /g, '+');
  console.log(query);

  /* Generate url azlyrics search */
  const url1 = `https://search.azlyrics.com/search.php?q=${query}`;

  console.log(url1);

  /* Visit url1 */
  rp(url1)
    .then(html => {
      /* Traverse html DOM */
      const $ = cheerio.load(html);
      const panels = $(
        '.panel',
      ); /* There are multiple panels like Album , Song,.. */
      let url2 = '';
      /* Find Song's panel */
      panels.each((i, panel) => {
        /* Get heading text for this panel */
        const ph = $(panel)
          .find('.panel-heading b')
          .text();
        if (ph == 'Song results:') {
          /* Get all anchor tags in this panel */
          const links = $(panel).find('.text-left>a'); // about 20 links
          url2 = $($(links)[0]).attr('href'); // get the first one
          // break loop
        }
      });
      /* Send the lyric url to next promise */
      return url2;
    })
    .then(url => {
      console.log(url);
      /* Visit the Lyrics Page Url */
      rp(url)
        .then(html => {
          /* Traverse DOM to scrap lyrics from this page */
          const $ = cheerio.load(html);
          const lyrics = $('.ringtone')
            .nextAll()
            .text();
          /* Send Results */
          res.send(lyrics);
        })
        .catch(err => {
          console.log(err);
          res.send('Lyrics Not Found 1;(');
        });
    })
    .catch(err => {
      console.log(err);
      res.send('Lyrics Not Found 2;(');
    });
});

module.exports.lyricsRouter = lyricsRouter;
