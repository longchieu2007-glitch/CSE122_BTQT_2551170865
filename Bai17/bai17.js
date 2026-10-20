document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const fullnameMsg = document.getElementById("fullnameMsg");
  const emailMsg = document.getElementById("emailMsg");
  const passwordMsg = document.getElementById("passwordMsg");
  const confirmPasswordMsg = document.getElementById("confirmPasswordMsg");

  // Hàm thiết lập trạng thái Hợp lệ
  function setValid(input, msgElement) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    msgElement.className = "message valid-msg";
    msgElement.textContent = "✓ Hợp lệ";
  }

  // Hàm thiết lập trạng thái Lỗi
  function setInvalid(input, msgElement, message) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    msgElement.className = "message invalid-msg";
    msgElement.textContent = "✗ " + message;
  }

  // Kiểm tra Họ và tên
  function validateFullname() {
    if (fullname.value.trim() === "") {
      setInvalid(fullname, fullnameMsg, "Họ tên không được để trống");
      return false;
    } else {
      setValid(fullname, fullnameMsg);
      return true;
    }
  }

  // Kiểm tra Email bằng Biểu thức chính quy (Regex)
  function validateEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      setInvalid(email, emailMsg, "Email không được để trống");
      return false;
    } else if (!emailRegex.test(emailValue)) {
      setInvalid(email, emailMsg, "Email không hợp lệ (thiếu tên miền hoặc định dạng @)");
      return false;
    } else {
      setValid(email, emailMsg);
      return true;
    }
  }

  // Kiểm tra Mật khẩu (>= 6 ký tự)
  function validatePassword() {
    if (password.value.length < 6) {
      setInvalid(password, passwordMsg, "Mật khẩu phải có ít nhất 6 ký tự");
      return false;
    } else {
      setValid(password, passwordMsg);
      return true;
    }
  }

  // Kiểm tra Xác nhận mật khẩu
  function validateConfirmPassword() {
    if (confirmPassword.value === "") {
      setInvalid(confirmPassword, confirmPasswordMsg, "Vui lòng nhập lại mật khẩu");
      return false;
    } else if (confirmPassword.value !== password.value) {
      setInvalid(confirmPassword, confirmPasswordMsg, "Mật khẩu xác nhận không khớp");
      return false;
    } else {
      setValid(confirmPassword, confirmPasswordMsg);
      return true;
    }
  }

  // Lắng nghe sự kiện gõ phím/thay đổi để kiểm tra thời gian thực (Real-time)
  fullname.addEventListener("input", validateFullname);
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", () => {
    validatePassword();
    if (confirmPassword.value !== "") {
      validateConfirmPassword();
    }
  });
  confirmPassword.addEventListener("input", validateConfirmPassword);

  // Xử lý khi nhấn nút Đăng ký
  form.addEventListener("submit", (e) => {
    // Chặn gửi form tự động
    e.preventDefault();

    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // Chỉ gửi khi tất cả đều hợp lệ
    if (isFullnameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert("Đăng ký tài khoản thành công!");
      // form.submit(); // Bỏ comment dòng này nếu muốn gửi tới server
    }
  });
});