import { useRef, useState } from "react"

const useFetchTheme = () => {
  const [apiTheme, setApiTheme] = useState('')
  const [loading, setLoading] = useState(true)
  const apiRef = useRef(null)

  const api = new Promise((resolve, reject) => {
    apiRef.current = setTimeout(() => {
      resolve({
        name: "light-theme",
        colors: {
          header: "hsl(0, 0%, 93%)",
          background: "hsl(0, 0%, 100%)",
          footer: "hsl(0, 1%, 38%)",
          text: "hsl(0, 1%, 16%)",
          quoteBgc: "hsl(60, 40%, 100%)",
          quoteTitle: "hsl(0, 1%, 38%)",
          quoteBody: "hsl(0, 1%, 38%);",
          quoteBorder: "hsl(0, 0%, 87%)",
          border: "hsl(0, 0%, 87%)",
        },
      })
    }, 3000)
  })

  api.then((data) => {
    setApiTheme(data)
    setLoading(false)
    clearTimeout(apiRef.current)
  })

  return [apiTheme, loading]
}

export default useFetchTheme;
