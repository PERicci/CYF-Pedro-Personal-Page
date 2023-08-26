var imagesListLength, imageList, item, imageIndex, counter;

// Describe this function...
function boot() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  imagesListLength = 0;
  imageIndex = 0;
  counter = 0;
  imagesList();
  setImagesListLength();
}

// Describe this function...
function counterControl() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (counter >= imagesListLength) {
    counter = 1;
  } else {
    counter = (typeof counter === 'number' ? counter : 0) + 1;
  }
}

// Describe this function...
function imagesList() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  imageList = ['https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg', 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg', 'https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg'];
}

// Describe this function...
function setImagesListLength() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  imageList.forEach((item) => {
    imagesListLength = (typeof imagesListLength === 'number' ? imagesListLength : 0) + 1;
  });
}

// Describe this function...
function handleNextImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (imageIndex == imagesListLength) {
    imageIndex = 1;
  } else {
    imageIndex = (typeof imageIndex === 'number' ? imageIndex : 0) + 1;
  }
  showImage();
}

// Describe this function...
function handlePreviousImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (imageIndex <= 1) {
    imageIndex = imagesListLength;
  } else {
    imageIndex = (typeof imageIndex === 'number' ? imageIndex : 0) + -1;
  }
  showImage();
}

// Describe this function...
function showImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  imageList.forEach((item) => {
    counterControl();
    if (counter == imageIndex) {
      let element_showImage = document.getElementById('ic__showImage');
      element_showImage.setAttribute("src", item);
    } else {
    }
  });
}


boot();
handleNextImage();


document.getElementById('ic__previous').addEventListener('click', (event) => {
  handlePreviousImage();

});

document.getElementById('ic__next').addEventListener('click', (event) => {
  handleNextImage();

});