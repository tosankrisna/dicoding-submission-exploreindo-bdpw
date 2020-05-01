// // ambil elemen yang dibutuhkan
// const slider = document.querySelector('.slider');
// const sliderImg = document.querySelectorAll('.slider img');
// const btnPrev = document.querySelector('.prev-btn');
// const btnNext = document.querySelector('.next-btn');

// // atur kondisi awal
// let i = 0;

// // jalankan ketika tombol next di klik
// btnNext.addEventListener('click', function() {
//     sliderImg[i].style.display = 'none';
//     btnPrev.disabled = false;
    
//     if(i == 1) {
//         btnNext.disabled = true;
//     }

//     i++;
// });

// // jalankan ketika tombol prev di klik
// btnPrev.addEventListener('click', function() {
//     sliderImg[i - 1].style.display = 'block';
//     btnNext.disabled = false;

//     if(i == 1) {
//         btnPrev.disabled = true;
//     }

//     i--;
// });

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();