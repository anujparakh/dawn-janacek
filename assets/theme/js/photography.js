// Change this to show a different number of images
/*const NUM_PHOTOS = 36;

const SOURCE_START = "assets/theme/images/photography/photo-";
const backdropDiv = document.getElementById("backdrop-photo");
const backdropImg = document.getElementById("backdrop-photo-img");

backdropDiv.onclick = () => { backdropDiv.hidden = true }

function openPhoto(imgSrc) {
    console.log("Opening photo")
}

function populatePhotos() {
    for(var i = 1; i <= NUM_PHOTOS; ++i)
    {
        var img = document.createElement("img");
        const src = SOURCE_START + i + ".jpg"
        img.src = src
        img.onclick = (event) => {
            console.log("opening photo")
            backdropDiv.hidden = false
            backdropImg.src = event.target.src
         }
        document.getElementById("photo-gallery").appendChild(img)
    }
}

populatePhotos()
*/

const NUM_PHOTOS = 100;

const SOURCE_START = "assets/theme/images/photography/photo-";
const backdropDiv = document.getElementById("backdrop-photo");
const backdropImg = document.getElementById("backdrop-photo-img");

backdropDiv.onclick = () => { backdropDiv.hidden = true }

function openPhoto(imgSrc) {
  console.log("Opening photo")
}

function checkImage(src) {
  let retval = false;
  var http = new XMLHttpRequest();
  http.open('HEAD', src, false);
  http.send();
  return http.status != 404;
}

function populatePhotos() {
  for (var i = 1; i <= NUM_PHOTOS; ++i) {
    var img = document.createElement("img");
    const src = SOURCE_START + i + ".jpg"
    if (checkImage(src)) {
      img.src = src
      console.log("doing something with" + src);
      img.onclick = (event) => {
        console.log("opening photo")
        backdropDiv.hidden = false
        backdropImg.src = event.target.src
      }
      document.getElementById("photo-gallery").appendChild(img)
    }
  }
}

populatePhotos()
