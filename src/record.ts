export {}

// Record<K, T>

// type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori'
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga'

type Covid19InfectionInfo = {
  kanjiName: string // 漢字名
  confirmedCases: number // 感染者数
}

// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo
//   Chiba: Covid19InfectionInfo
//   Tottori: Covid19InfectionInfo
//   Shiga: Covid19InfectionInfo
// } = {
//   Tokyo: {
//     kanjiName: '東京',
//     confirmedCases: 1960,
//   },
//   Chiba: {
//     kanjiName: '千葉',
//     confirmedCases: 249,
//   },
//   Tottori: {
//     kanjiName: '鳥取',
//     confirmedCases: 2,
//   },
//   Shiga: {
//     kanjiName: '滋賀',
//     confirmCases: true,
//   },
// }

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: {
    kanjiName: '東京',
    confirmedCases: 1960,
  },
  Chiba: {
    kanjiName: '千葉',
    confirmedCases: 249,
  },
  Tottori: {
    kanjiName: '鳥取',
    confirmedCases: 2,
  },
  Shiga: {
    kanjiName: '滋賀',
    // confirmedCases: true,
    confirmedCases: 13,
  },
}
console.log(covid19Japan)
