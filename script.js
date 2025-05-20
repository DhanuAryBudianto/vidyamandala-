function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('show');
}

// Menutup sidebar saat klik di luar
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav-menu');
    const toggle = document.querySelector('.menu-toggle');
    
    // Jika klik di luar sidebar dan bukan tombol toggle
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('show');
    }
    
});

function showDescription(title, description) {
    const box = document.getElementById('description-box');
    box.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    box.style.padding = "15px";
    box.style.border = "1px solid #ccc";
    box.style.marginTop = "20px";
    box.style.borderRadius = "10px";
}

function comingSoon() {
    alert("Fitur peminjaman buku akan segera hadir! (Coming Soon)");
}

// Tombol Dark Mode dengan LocalStorage
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Terapkan tema saat halaman dimuat
if (currentTheme === 'dark') {
document.body.classList.add('dark');
if (themeToggle) themeToggle.textContent = '☀️';
} else {
if (themeToggle) themeToggle.textContent = '🌙';
}

// Toggle tema saat tombol diklik
if (themeToggle) {
themeToggle.addEventListener('click', function () {
document.body.classList.toggle('dark');
const isDark = document.body.classList.contains('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
themeToggle.textContent = isDark ? '☀️' : '🌙';
});
}
function showBookModal(imageFile, title, description, author) {
  console.log("Gambar dimuat:", imageFile);
  document.getElementById('modal-cover').src = imageFile;
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-description').innerText = description;
  document.getElementById('modal-author').innerText = "Penulis: " + author;
  document.getElementById('book-modal').style.display = 'block';
}


  
  function closeModal() {
    document.getElementById('book-modal').style.display = 'none';
  }
  function closeModal() {
  document.getElementById('popup').classList.add('hidden');
}

  
  function comingSoon() {
    alert("Fitur peminjaman buku akan segera hadir! (Coming Soon)");
  }
  function searchBooks() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const books = document.querySelectorAll(".book");
  
    books.forEach(book => {
      const title = book.querySelector("p").innerText.toLowerCase();
      if (title.includes(input)) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  }
    document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
/*buat vidya mandala nya, box popup buku*/
