console.log('สวัสดีจากไฟล์ script.js');
alert('ยินดีต้อนรับสู่ JavaScript!');

let studentName = 'สมชาย';
let age = 20;
let isStudent = true;
const university = 'มหาวิทยาลัยเทคโนโลยี';

console.log('ชื่อ:', studentName);
console.log('อายุ:', age);

// ลองเปลี่ยนค่า let
age = 21;
console.log('อายุใหม่:', age);

// ลองเปลี่ยนค่า const (จะเกิด Error!)
try {
  university = 'มหาวิทยาลัยใหม่';
} catch(e) {
  console.error(e.message);
}

let aString = 'สวัสดี'; // String
let aNumber = 99.5; // Number
let aBoolean = true; // Boolean
let anUndefined; // undefined
let aNull = null; // null

console.log('Type of aString:', typeof aString);
console.log('Type of aNumber:', typeof aNumber);
console.log('Type of aBoolean:', typeof aBoolean);
console.log('Type of anUndefined:', typeof anUndefined);
console.log('Type of aNull:', typeof aNull); // (จะแสดง 'object' ซึ่งเป็น quirk ของ JS)

let text = 'JavaScript เจ๋งมาก';
let firstName = 'สมชาย';

// Template Literal (แนะนำ)
console.log(`สวัสดี ${firstName}!`);

// String Methods
console.log('ความยาว:', text.length);
console.log('ตัวใหญ่:', text.toUpperCase());
console.log('ตัวเล็ก:', text.toLowerCase());
console.log('มี "Java"?', text.includes('Java'));
console.log('ตำแหน่ง "เจ๋งมาก":', text.indexOf('เจ๋งมาก'));
console.log('ตัดคำ (0-4):', text.slice(0, 4));
console.log('แทนที่:', text.replace('เจ๋ง', 'สุดยอด'));

let a = 10;
let b = 3;

console.log('a + b =', a + b);  // บวก
console.log('a % b =', a % b);  // เศษจากการหาร
console.log('a ** b =', a ** b); // ยกกำลัง

// Math Object
console.log('ปัดเศษ 3.7:', Math.round(3.7));
console.log('ปัดลง 3.7:', Math.floor(3.7));
console.log('ปัดขึ้น 3.2:', Math.ceil(3.2));
console.log('สุ่ม 0-1:', Math.random());

// สุ่มเลข 1-6 (ลูกเต๋า)
let dice = Math.floor(Math.random() * 6) +1;
console.log('ทอยลูกเต๋าได้:', dice);

let globalName = 'สมชาย'; // Global Scope

function showInfo() {
    let localAge = 20; // Local Scope
    console.log('ข้างในฟังก์ชัน:', globalName);
    console.log('ข้างในฟังก์ชัน:', localAge);
}

showInfo();

console.log('ข้างนอกฟังก์ชัน:', globalName);

try {
  console.log('ข้างนอกฟังก์ชัน:', localAge);
} catch(e) {
  console.error('Error:', e.message);
}


let fruits = ['แอปเปิล', 'กล้วย', 'ส้ม'];

console.log('ผลไม้ชิ้นแรก:', fruits[0]);
console.log('จำนวนผลไม้:', fruits.length);

// เพิ่มข้อมูลท้าย Array
fruits.push('มะม่วง');
console.log('เพิ่มมะม่วง:', fruits);

// ลบข้อมูลท้าย Array
let removedFruit = fruits.pop();
console.log('เอาออก:', removedFruit);
console.log('ผลไม้ล่าสุด:', fruits);

console.log('มีกล้วยไหม?', fruits.includes('กล้วย'));

let student = {
    name: 'สมชาย ใจดี',
    age: 20,
    major: 'วิศวกรรมซอฟต์แวร์'
};

// การเข้าถึงข้อมูล
console.log('ชื่อ:', student.name);
console.log('อายุ:', student['age']);

// เปลี่ยนแปลงข้อมูล
student.age = 21;
console.log('อายุใหม่:', student.age);

// เพิ่ม property ใหม่
student.gpa = 3.50;
console.log('นักเรียน:', student);

// ลบ property
delete student.major;
console.log('หลังลบสาขา:', student);

// Function Declaration
function greetPerson(name) {
    console.log(`สวัสดี ${name}!`);
}

function calculateArea(width, height) {
    return width * height;
}

// การเรียกใช้
greetPerson('สมชาย');
let area = calculateArea(5, 4);
console.log('พื้นที่:', area);

// Arrow Function (แบบสั้น)
const square = x => x * x;
console.log('5 ยกกำลัง 2:', square(5));

function average(scores) {
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// ทดสอบ
let myScores = [85, 92, 78, 96, 88];
console.log(average(myScores));

let numbers = [1, 2, 3, 4, 5];

// .map() - สร้าง Array ใหม่
let doubled = numbers.map(num => num * 2);
console.log('map (x2):', doubled);

// .filter() - กรองข้อมูล
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('filter (เลขคู่):', evenNumbers);

// .find() - หาตัวแรกที่ตรงเงื่อนไข
let firstEven = numbers.find(num => num % 2 === 0);
console.log('find (เลขคู่ตัวแรก):', firstEven);

// .reduce() - รวมค่าทั้งหมด
let sum = numbers.reduce((total, num) => total + num, 0);
console.log('reduce (ผลรวม):', sum);

function riskyFunction() {
    let random = Math.random();
    if (random < 0.5) {
        throw new Error('โชคไม่ดี! เลขน้อยเกินไป');
    }
    return 'สำเร็จ!';
}

try {
    let result = riskyFunction();
    console.log('ผลลัพธ์:', result);
} catch (error) {
    console.error('เกิดข้อผิดพลาด:', error.message);
} finally {
    console.info('ทำงานจบแล้ว (finally ทำงานเสมอ)');
}

let calculator = {
    result: 0,
    add: function(num) { this.result += num; return this; },
    subtract: function(num) { this.result -= num; return this; },
    multiply: function(num) { this.result *= num; return this; },
    divide: function(num) { this.result /= num; return this; },
    clear: function() { this.result = 0; return this; },
    getResult: function() { return this.result; }
};

