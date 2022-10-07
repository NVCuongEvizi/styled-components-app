import { useEffect, useState } from "react"

const useFetchTheme = () => {
  const [apiTheme, setApiTheme] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let timerId = null
    const api = new Promise((resolve, reject) => {
      timerId = setTimeout(() => {
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
        reject({
          msg: 'Opps! Cannot load this theme'
        })
      }, 3000)
      console.log('running...')
    })
    api.then((data) => {
      setApiTheme(data)
      setLoading(false)
      setError('')
    })
      .catch((err) => {
        setApiTheme('')
        setLoading(false)
        setError(err.msg)
      })

    return () => {
      clearTimeout(timerId)
      timerId = null
      console.log('removed')
    }
  }, [])

  return [apiTheme, loading, error]
}

export default useFetchTheme;
