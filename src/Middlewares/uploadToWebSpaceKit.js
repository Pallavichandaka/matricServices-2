

const fs = require('fs');
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  publicKey: "public_RQ3U9HM+dio+OgIRL+pKHH4kOS4=",
  privateKey: "private_lr5FuH7+AwQy+6TnbISudKd+ABs=",
  urlEndpoint: "https://ik.imagekit.io/ew9pn94qw",
});

const uploadToWebSpaceKit = (filePath, fileName, callback) => {
  const file = fs.readFileSync(filePath);

  imagekit.upload(
    {
      file: file,
      fileName: fileName,
      folder: "/hareKrishna", 
    },
    function (error, result) {
      if (error) {
        console.error("Error uploading file to ImageKit:", error.message);
        return callback(error);
      }
      console.log("File uploaded successfully to ImageKit:", result.url);
      callback(null, result);
    }
  );
};

module.exports = uploadToWebSpaceKit;
