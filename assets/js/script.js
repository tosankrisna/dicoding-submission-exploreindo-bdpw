// ambil elemen yang diperlukan
const images = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#arrow-left");
const nextBtn = document.querySelector("#arrow-right");
  
// atur kondisi awal
let current = 0;

// fungsi resetDisplay untuk menghilangkan gambar dengan display none sesuai index gambar pada looping
function resetDisplay() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
}

// fungsi start untuk mengubah gambar pertama menjadi display block
function startSlide() {
  resetDisplay();
  images[0].style.display = "block";
}

// Untuk menampilkan gambar sebelumnya
function prevSlide() {
  resetDisplay();
  images[current - 1].style.display = "block";
  current--;
}

// Untuk menampilkan gambar selanjutnya
function nextSlide() {
  resetDisplay();
  images[current + 1].style.display = "block";
  current++;
}

// Menjalankan fungsi ketika tombol prevBtn di klik
prevBtn.addEventListener("click", function() {
  if (current === 0) {
    current = images.length;
  }
  prevSlide();
});

// Menjalankan fungsi ketika tombol nextBtn di klik
nextBtn.addEventListener("click", function() {
  if (current === images.length - 1) {
    current = -1;
  }
  nextSlide();
});

// jalankan fungsi startSlide() setiap kali web dijalankan
startSlide();