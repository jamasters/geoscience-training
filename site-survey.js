var express = require('express');
var fs = require('fs');

var databaseUrl = "geo";
// "username:password@example.com/mydb"
var collections = ["markers"]
var mongodb = require("mongojs").connect(databaseUrl, collections);

var app = express();
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(__dirname));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);


app.get('/', function (req, res)
{
    res.render('index.html');
});


app.post('/marker', function(request, response) {
   response.setHeader('Content-Type', 'application/json');
   mongodb.markers.save(request.body, function(err, saved) {
      if (err || !saved) {
         console.log(err);
         console.log("Site Survey Not Saved");
         response.writeHead(500);
         response.end("Error saving new site survey.");
      }
      else {
         console.log("Site Survey Saved");
         response.send("Success!");
      }
   });
});

app.get('/markers', function(request, response) {
   response.setHeader('Content-Type', 'application/json');
   mongodb.markers.find({}, function(err, markers) {
      if (err) {
         console.log(err);
         response.writeHead(500);
         response.end("Error retrieving site surveys.");
      }
      else {
         response.send(markers);
      }
   });
});

/**
 * Upload a image and return the relative url for the newly stored image.
 */
app.post('/upload', function(req, res) {
   res.setHeader('Content-Type', 'text/html');

   var basePictureAssetUrl = 'img/upload/';
   var defaultPictureUrl = basePictureAssetUrl + 'default.jpg'
   var pictureUrl = defaultPictureUrl

   // process file
   if (req.files.length == 0 || req.files.image.size == 0)
      fileUploadMessage = 'No file uploaded at ' + new Date().toString();
   else {
      var file = req.files.image;
      var pictureUrl = basePictureAssetUrl + file.name;

      var readStream = fs.createReadStream(file.path)
      var writeStream = fs.createWriteStream(pictureUrl);

      // Copy the uploaded file from tmp to a server readable directory.
      readStream.pipe(writeStream);
      
      // Listen for the copy to finish and then return a response to the server.
      readStream.on("end", function() {
         var responseObj = {
            imageUrl : pictureUrl
         }
         res.send(JSON.stringify(responseObj));
         fs.unlinkSync(file.path);
      });
   }
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server started.  Running at http://localhost:' + port);
