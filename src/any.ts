import axios from 'axios'

export {}

const url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

axios.get(url).then((response) => {
  interface Article {
    id: number
    title: string
    description: string
  }

  const data: Article[] = response.data
  // const data: Article[] = [
  //   {
  //     id: 1,
  //     description: 'description',
  //   }
  // ]

  console.log(data)
})
