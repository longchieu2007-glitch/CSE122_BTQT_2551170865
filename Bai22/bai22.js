// Lấy các phần tử DOM cần xử lý
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Bắt sự kiện khi nhấn/gạt nút
themeToggle.addEventListener('change', function () {
  if (this.checked) {
    // Nếu nút bật -> Thêm class .toi vào body
    body.classList.add('toi');
  } else {
    // Nếu nút tắt -> Bỏ class .toi khỏi body
    body.classList.remove('toi');
  }
});