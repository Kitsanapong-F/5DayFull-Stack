let button = document.getElementById('clickBtn');
let output = document.getElementById('output');
let clickCount = 0;

button.addEventListener('click', function() {
    clickCount++;
    output.textContent = `คลิกไปแล้ว ${clickCount} ครั้ง`;
});

document.addEventListener('mousemove', function(event) {
    let mouseInfo = document.getElementById('mouseInfo');
    
    // event.clientX, event.clientY คือตำแหน่งของเมาส์
    mouseInfo.textContent = 
        `Mouse: (${event.clientX}, ${event.clientY})`;
});

const form = document.getElementById('Form');
const result = document.getElementById('result');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการส่งฟอร์ม
    // แสดงผลลัพธ์บนจอแทน alert
    result.textContent = 'ฟอร์มถูกหยุด!';
});


let box = document.getElementById('hoverBox');

// เมื่อเมาส์เข้ามาในพื้นที่
box.addEventListener('mouseenter', function() {
    this.textContent = 'เมาส์เข้ามาแล้ว!';
    this.style.backgroundColor = '#1abc9c';
});

// เมื่อเมาส์ออกจากพื้นที่
box.addEventListener('mouseleave', function() {
    this.textContent = 'ลองเอาเมาส์มาวางที่นี่';
    this.style.backgroundColor = '#3498db';
});

// เมื่อคลิกขวา
box.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    this.textContent = 'คุณคลิกขวา!';
});


let input = document.getElementById('textInput');

// เกิดขึ้นเมื่อกดปุ่มลง
input.addEventListener('keydown', function(event) {
    console.log('Key Down:', event.key);
    if (event.key === 'Enter') {
        alert('คุณกด Enter!');
    }
    else if (event.key === 'ArrowUp'){
        alert('คุณดกลูกศรเดินหน้า')
    }
});

// เกิดขึ้นเมื่อมีการเปลี่ยนแปลงข้อความ
input.addEventListener('input', function(event) {
    let output = document.getElementById('inputRealtime');
    output.textContent = "Real-time: " + this.value;
});