
let kor = Number(prompt("국어점수는?", "0"));
let eng = Number(prompt("영어점수는?", "0"));
let math = Number(prompt("수학점수는?", "0"));
let avg = (kor + eng + math) / 3;
let result = avg >= 70 && kor >= 60 && eng >= 60 && math >= 60;
document.write(`<h1>${result}</h1>`)