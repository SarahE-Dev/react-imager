# React Imager App Assignment

## Tasks

1. Create an app called `react-imager` using `create-react-app`.
2. Remove `logo.svg`, `reportWebVitals`, and `setupTests`.
3. Download 12 random images and place them in an `images` folder inside the `public` folder.
4. Create a `components` folder in the `src` folder.
5. Create an `Imager.js` component for all functionality, a child of `App.js`.
   - Create an array with paths to the 12 images.
   - Use `<img src={grab path}>` to plug in the images.
   - Path to the image should be `nameOfFolder/nameOfFile`. Ex: `images/photo2.jpeg` (React will know to go to the public folder for it).
6. Create a `Display.js` component that holds the large image on the top of the page, a child of `Imager.js`.
7. Create a `Thumbnail.js` component that holds each of the 12 images as thumbnails, a child of `Imager.js`.
8. When the random button is clicked, a random image will be chosen and displayed on `Display.js`. (Hint: Should you use Index or Key for this?)
9. When the backward button is clicked, it goes to the previous image in the array. Similarly, for the forward button, it increments to the next image. (Hint: Should you use Index or Key for this?)
10. When you click on a thumbnail image, the `Display` container should show that image. (Hint: Should you use Index or Key for this?)


