// เลือกด้วย ID (ได้ 1 ตัว)
const contentDiv = document.querySelector('.title');

// .textContent - ปลอดภัย, แสดงแค่ข้อความ
contentDiv.textContent = 'ข้อความใหม่จาก textContent';

// .innerHTML - สามารถใส่ HTML tags ได้
// (⚠️ ระวัง XSS Attack ถ้าใช้กับข้อมูลจาก user)
setTimeout(() => {
    contentDiv.innerHTML = '<h2>หัวข้อใหม่</h2><p>จาก innerHTML</p>';
}, 2000);