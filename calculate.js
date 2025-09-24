function calculate(radius) {
  let pi = 3.14;
  return pi * radius * radius;
}

document.getElementById("circleForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // ดึงสิ่งที่ผู้ใช้กรอกเข้ามาเก็บ
  let radius = parseFloat(document.getElementById("radius").value);
  
  if (isNaN(radius) || radius <= 0) {
    document.getElementById("result").innerHTML = "กรุณาข้อมูลที่สามารถคำนวณได้";
    return;
  }

  let area = calculate(radius);
  document.getElementById("result").innerHTML = `
    <h3>ผลลัพธ์</h3>
    รัศมี: ${radius.toFixed(2)} เซนติเมตร<br>
    พื้นที่วงกลม: ${area.toFixed(2)} ตารางเซนติเมตร
  `;
});