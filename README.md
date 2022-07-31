# dawn-janacek

## Photography Section

In order to add an image to the photography section, use the following steps:
- Add a `jpeg` image to the folder [assets/theme/images/photography/](assets/theme/images/photography) in the format `photo-#.jpeg` replacing `#` with a number in order (1, 2, 3..)
- The numbered photos in the above folder will be displayed in order
- Go to the file [assets/theme/js/photography.js](assets/theme/js/photography.js)
- Change the variable called `NUM_PHOTOS` at the top of the file to be the **highest numbered photo**
- This should update the photography section with all the images from the photography assets folder.

> Images must be named correctly and be in jpeg format

## Helpful Info

- Website html code is all in `index.html`
- [Bio Picture](assets/theme/images/my-pict.jpg) – Replace Image with same name to change
- [Home Background](assets/theme/images/main-header.jpg) – Replace Image with same name to change
- [Words for typing animation](https://github.com/anujparakh/dawn-janacek/blob/gh-pages/assets/theme/js/theme.js#L184)
- For adding photos to the photography section, add them to the folder
    - [assets/theme/images/photography/](assets/theme/images/photography) in the format `photo-#` (similar to the placeholder images) in the order you want them to be shown
    - Change the variable here for number of images in the folder you want to show: [assets/theme/js/photography.js](assets/theme/js/photography.js)
- All the small icons are font awesome icons. If you wanna look for icons, look here: https://fontawesome.com/search
