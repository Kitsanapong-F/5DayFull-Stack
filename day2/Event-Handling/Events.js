let button = document.getElementById('clickBtn');
let output = document.getElementById('output');
let clickCount = 0;

button.addEventListener('click', function() {
    clickCount++;
    output.textContent = `คลิกไปแล้ว ${clickCount} ครั้ง`;
});