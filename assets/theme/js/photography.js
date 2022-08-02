// Change this to show a different number of images
const NUM_PHOTOS = 18;

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
