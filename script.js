// إظهار شاشة الكتيب بعد الضغط على Start
function startBook() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('book').style.display = 'block';
}

// كود الـ flipbook
let pages = document.querySelectorAll(".page");
let currentPage = 0;

function updatePages() {
  pages.forEach((page, i) => {
    if (i < currentPage) {
      page.style.transform = "rotateY(-180deg)";
      page.style.zIndex = i + 1;
    } else {
      page.style.transform = "rotateY(0deg)";
      page.style.zIndex = pages.length - i;
    }
  });
}

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  }
});

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
});

updatePages();
