const express = require('express')
const app = express()
const rssParser = require('rss-parser');
const parser = new rssParser();

app.get('/api/feed/*',function(req,res){

    var url = req.params[0];

    parser.parseURL(url,function(err, feed) {
      res.json(feed);
      })
    })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})