let isLoggedIn = false;

function confirmAccess() {
    var proceed = confirm("Hệ thống đang trong quá trình nâng cấp, khuyến khích người dùng truy cập trên máy tính cá nhân, đối với điện thoại có thể truy cập theo hướng dẫn ở mục tài liệu hướng dẫn, xin trân trọng cảm ơn!");
    if (proceed) {
        window.location.href = "https://script.google.com/macros/s/AKfycbx1jmfv-883_RwplXqGPVWMcB4-PuybCppCBhaUK_b-qTTeBJXkyAIDsmnjGp2B6wKU/exec"; 
    }
}

// Hàm xác thực đăng nhập
function authenticate() {
    if (isLoggedIn) {
        window.location.href = "https://docs.google.com/spreadsheets/d/1oOeN-HUb_xZfcIiY0d06MXUGL0-vsJW5r-zNa_NIKe4/edit#gid=0";
        return;
    }

    var id = prompt("Vui lòng nhập ID:");
    var pass = prompt("Vui lòng nhập mật khẩu:");

    // Kiểm tra ID và mật khẩu ở đây
    if (id === "K66CNQT" && pass === "Khoadiachat") {
        isLoggedIn = true;
        window.location.href = "https://docs.google.com/spreadsheets/d/1oOeN-HUb_xZfcIiY0d06MXUGL0-vsJW5r-zNa_NIKe4/edit#gid=0"; // Chuyển hướng đến trang trích suất kết quả đo
    } else {
        alert("ID hoặc mật khẩu không đúng. Vui lòng thử lại.");
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Xác thực thông tin đăng nhập
    if (username === "K66CNQT" && password === "Khoadiachat") {
        isLoggedIn = true;
        alert("Đăng nhập thành công!");
        document.getElementById("loginModal").classList.remove("show"); 
        document.getElementById("loginModal").setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        document.body.style.paddingRight = "";
        document.getElementsByClassName("modal-backdrop")[0].remove(); 
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại!");
    }
});

window.onload = function() {
    if (window.location.href.includes("#trichsua")) {
        if (!isLoggedIn) {
            alert("Bạn cần đăng nhập để truy cập mục này!");
            authenticate(); 
        }
    }
};