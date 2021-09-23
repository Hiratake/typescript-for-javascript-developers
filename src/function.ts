export {}

// BMIを算出する関数
function bmi(height: number, weight: number): number {
  return weight / (height * height)
}

console.log(bmi(1.78, 86))
