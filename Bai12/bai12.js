document.addEventListener("DOMContentLoaded", function () {
    const btnPrint = document.getElementById("btnPrint");

    const daysOfWeek = [
        "Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"
    ];

    function getGreeting() {
        const currentHour = new Date().getHours();
        if (currentHour >= 4 && currentHour < 11) {
            return "Chào buổi sáng!";
        } else if (currentHour >= 11 && currentHour < 13) {
            return "Chào buổi trưa!";
        } else if (currentHour >= 13 && currentHour < 18) {
            return "Chào buổi chiều!";
        } else {
            return "Chào buổi tối!";
        }
    }

    // Hiển thị lời chào khi load trang
    document.getElementById("displayGreeting").innerText = getGreeting();

    btnPrint.addEventListener("click", function () {
        const day = parseInt(document.getElementById("inputDay").value);
        const month = parseInt(document.getElementById("inputMonth").value);
        const year = parseInt(document.getElementById("inputYear").value);

        // Kiểm tra xem có để trống ô nào không
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert("Vui lòng nhập đầy đủ Ngày, Tháng, Năm hợp lệ!");
            return;
        }

        // Tạo đối tượng Date
        const dateObj = new Date(year, month - 1, day);

        // KIỂM TRA NGÀY THỰC TẾ (Tránh trường hợp như ngày 30/2 tự nhảy sang tháng 3)
        if (
            dateObj.getFullYear() !== year ||
            dateObj.getMonth() !== month - 1 ||
            dateObj.getDate() !== day
        ) {
            alert("Ngày, tháng bạn nhập không tồn tại trong thực tế! Vui lòng nhập lại.");
            return;
        }

        const dayOfWeekIndex = dateObj.getDay();

        // Cập nhật lại giao diện lịch
        document.getElementById("displayYear").innerText = year;
        document.getElementById("displayMonth").innerText = "Tháng " + month;
        document.getElementById("displayDay").innerText = day;
        document.getElementById("displayDayOfWeek").innerText = daysOfWeek[dayOfWeekIndex];
    });
});