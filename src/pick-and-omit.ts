/* eslint-disable */
export {}

type DetailedProfile = {
  name: string
  height: number
  weight: number
}

// 必要なものを指定する
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>
// type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight' | 'age'>

// 不要なものを指定する
type SmallProfile = Omit<DetailedProfile, 'height'>

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>
type MySmallProfile = MyOmit
