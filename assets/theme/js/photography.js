// Change this to show a different number of images
const NUM_PHOTOS = 5;

const SOURCE_START = "assets/theme/images/photography/photo-";
function populatePhotos() {
    for(var i = 1; i <= NUM_PHOTOS; ++i)
    {
        var img = document.createElement("img");
        img.src = SOURCE_START + i + ".jpeg"

        document.getElementById("photo-gallery").appendChild(img)
    }
}

populatePhotos()