import express from 'express';
const app = express()
import rssParser from 'rss-parser';
const parser = new rssParser();
const port = process.env.PORT || 3000

app.get('/*',function(req,res){

    var url = req.params[0];
    
    (async () => {
        try {
            let feed = await parser.parseURL(url);
            console.log(feed.title);
            console.log("Feed was fetched");
            res.json(feed);
        }   
        catch(err) {
            console.log(err);
            res.send("No correct url");
        }

    })();
})
app.listen(port, function () {
  console.log('Waiting feed request on port ' + port)
})