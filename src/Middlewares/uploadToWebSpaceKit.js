

const fs = require('fs');
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  publicKey: "public_HGPisEZQaeZhmR4Hv76Pa7K0sYE=",
  privateKey: "private_7h+cLLaxqHcvI1jNBG41y56qswI=",
  urlEndpoint: "https://ik.imagekit.io/vuhq91y6c",
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
