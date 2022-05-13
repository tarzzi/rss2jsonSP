import express from 'express';
const app = express()
import rssParser from 'rss-parser';
const parser = new rssParser();
const port = process.env.PORT || 3000

app.get('/api/feed/*',function(req,res){

    var url = req.params[0];

    parser.parseURL(url,function(err, feed) {
      res.json(feed);
      })
    })

app.listen(port, function () {
  console.log('Waiting feed request on port ' + port)
})