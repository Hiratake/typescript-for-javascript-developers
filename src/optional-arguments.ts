export {}

/**
 * BMIを計算する関数
 * @param height 身長
 * @param weight 体重
 * @param printable console.logで出力するかどうか
 * @returns BMI
 */
const bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height)
  if (printable) {
    console.log({ bmi })
  }
  return bmi
}

bmi(1.78, 86, true)
bmi(1.78, 86, false)
bmi(1.78, 86)
