require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const dns = require('dns');
const res = require('express/lib/response');
const { Schema, model } = mongoose;
const urlparser = require('url')

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static(`${process.cwd()}/public`));

const mongodb_url = "mongodb+srv://anujpandey19122000:anuj@cluster0.hkwplpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log("Hii from Mongodb") })
  .catch((err) => { console.log("hii error from mongodb ", err) });

const urlSchema = new Schema({
  original_url: {
    type: String,
    required: true
  },
  short_url: {
    type: Number,
    required: true
  }
})

const URL = model("URL", urlSchema);

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.post("/api/shorturl", async (req, res) => {

  const url = req.body.url
  const dnslookup = dns.lookup(urlparser.parse(url).hostname, async (err, address) => {
    if (!address) {
      res.json({ error: "Invalid URL" })
    } else {
      const urlCount = await URL.countDocuments({})
      const data = new URL({
        original_url: url,
        short_url: urlCount
      })

      data.save()
        .then((data) => { console.log("successfully storage data", data) })
        .catch((err) => { console.log("Error ins toring data ", err) });
      res.json({
        original_url: url,
        short_url: urlCount
      })
    }
  })
})

app.get("/api/shorturl/:short_url",async (req, res) => {
  const url = await URL.findOne({ short_url: req.params.short_url })
  if (url) {
    console.log("url found", url.original_url);
    res.redirect(url.original_url);
  }
  else {
    console.log("url not found")
    res.send("url not found in database");
    return;
  }
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
