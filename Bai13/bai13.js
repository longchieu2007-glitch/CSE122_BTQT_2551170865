function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Tách giờ, phút, giây thành hàng chục và hàng đơn vị
    const h1 = Math.floor(hours / 10);
    const h2 = hours % 10;
    const m1 = Math.floor(minutes / 10);
    const m2 = minutes % 10;
    const s1 = Math.floor(seconds / 10);
    const s2 = seconds % 10;

    // Cập nhật nguồn ảnh tương ứng
    document.getElementById('h1').src = `0${h1}.gif`;
    document.getElementById('h2').src = `0${h2}.gif`;
    document.getElementById('m1').src = `0${m1}.gif`;
    document.getElementById('m2').src = `0${m2}.gif`;
    document.getElementById('s1').src = `0${s1}.gif`;
    document.getElementById('s2').src = `0${s2}.gif`;

    // Xác định lời chào theo giờ hệ thống
    const greetingElement = document.getElementById('greeting');
    if (hours >= 5 && hours < 11) {
        greetingElement.textContent = "Chào buổi sáng";
    } else if (hours >= 11 && hours < 13) {
        greetingElement.textContent = "Chào buổi trưa";
    } else if (hours >= 13 && hours < 18) {
        greetingElement.textContent = "Chào buổi chiều";
    } else {
        greetingElement.textContent = "Chào buổi tối";
    }
}

// Chạy tự động cập nhật mỗi giây
setInterval(updateClock, 1000);

// Gọi ngay lập tức khi tải trang để không bị độ trễ 1 giây đầu tiên
updateClock();