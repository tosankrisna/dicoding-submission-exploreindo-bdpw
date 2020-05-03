// ambil elemen yang diperlukan
const images = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".left-button");
const nextBtn = document.querySelector(".right-button");
  
// atur kondisi awal
let i = 0;

// fungsi resetDisplay untuk menghilangkan gambar dengan display none sesuai index gambar pada looping
function resetDisplay() {
  for (let j = 0; j < images.length; j++) {
    images[j].style.display = "none";
  }
}

// Menjalankan fungsi ketika tombol prevBtn di klik
prevBtn.addEventListener("click", function() {
  if (i == 0) {
    i = images.length;
  }

  resetDisplay();

  images[i - 1].style.display = "block";
  i--;
});

// Menjalankan fungsi ketika tombol nextBtn di klik
nextBtn.addEventListener("click", function() {
  if (i == images.length - 1) {
    i = -1;
  }

  resetDisplay();

  images[i + 1].style.display = "block";
  i++;
});

// jalankan fungsi resetDisplay pertama setiap kali web diakses, 
// lalu buat hanya gambar pertama menjadi block
resetDisplay();
images[0].style.display = "block";