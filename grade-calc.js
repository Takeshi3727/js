
let gradeCalc = function(score, totalScore){
// percent,letterGradeの定義付け
let percent = (score / totalScore) * 100;
letterGrade = '';
// それぞれの場合分け(5cases-> A,B,C,D,F)
// 複数あるため、else ifを用いる
if (percent >= 90) {
  letterGrade = 'A';
} else if (percent >= 80) {
  letterGrade = 'B';
} else if (percent >= 70) {
  letterGrade = 'C';
} else if (percent >= 60) {
  letterGrade = 'D';
} else {
  letterGrade = 'F'
}

return `You got a ${letterGrade} (${percent}%)!`

}

let result = gradeCalc(34, 100);
console.log(result);
