// ambil elemen yang dibutuhkan
const slider = document.querySelector('.slider');
const sliderImg = document.querySelectorAll('.slider img');
const btnPrev = document.querySelector('.prev-btn');
const btnNext = document.querySelector('.next-btn');

// atur kondisi awal
let i = 0;

// jalankan ketika tombol next di klik
btnNext.addEventListener('click', function() {
    sliderImg[i].style.display = 'none';
    btnPrev.disabled = false;
    
    if(i == 1) {
        btnNext.disabled = true;
    }

    i++;
});

// jalankan ketika tombol prev di klik
btnPrev.addEventListener('click', function() {
    sliderImg[i - 1].style.display = 'block';
    btnNext.disabled = false;

    if(i == 1) {
        btnPrev.disabled = true;
    }

    i--;
});