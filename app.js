const images=["./images/nature1.jfif",
    "./images/nature4.jpg","./images/nature2.jfif","./images/nature3.jfif"];
    
    
    const mainImage = document.getElementById("slider-image");
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    let ImageIndex = 0;
    function updatedImage() {
      mainImage.src = images[ImageIndex];
    }

    previousButton.addEventListener("click", function() {
      ImageIndex--;
      if (ImageIndex < 0) {
        ImageIndex = images.length - 1;
      }
      updatedImage();
    });

    nextButton.addEventListener("click", function() {
      ImageIndex++;
      if (ImageIndex >= images.length) {
        ImageIndex = 0;
      }
      updatedImage();
    });

    updatedImage();