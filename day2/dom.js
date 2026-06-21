// เลือกด้วย ID (ได้ 1 ตัว)
let button = document.getElementById('click-me');

// เลือกด้วย Class (ตัวแรกที่เจอ)
let title = document.querySelector('.title');

// เลือกด้วย Tag
let container = document.querySelector('div');

// เลือกหลายตัวด้วย Class
let allTitles = document.querySelectorAll('.title');

console.log("ปุ่มที่เลือกมา:", button);
console.log("หัวข้อที่เลือกมา:", title);
console.log("กล่อง Container:", container);
console.log("รายการคลาส title ทั้งหมด:", allTitles);