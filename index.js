import express from 'express';
const app = express()
import rssParser from 'rss-parser';
const parser = new rssParser();
const port = process.env.PORT || 3000
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/v1/feed',function(req,res){

    let url = req.query['url'];
    
    (async () => {
        try {
            let feed = await parser.parseURL(url);
            console.log(feed.title);
            console.log("Feed was fetched");
            res.header('http-code',304);
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