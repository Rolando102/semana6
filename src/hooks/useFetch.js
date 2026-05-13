import { useEffect, useState } from 'react'
import api from '../services/api'

function useFetch(endpoint) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const controller = new AbortController()

    const fetchData = async () => {

      try {

        setLoading(true)

        const response = await api.get(endpoint, {
          signal: controller.signal
        })

        setData(response.data)

      } catch (err) {

        if (err.name !== 'CanceledError') {
          setError('Error al obtener datos')
        }

      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Cleanup evita fugas de memoria
    // y renderizados innecesarios
    return () => controller.abort()

  }, [endpoint])

  return { data, loading, error }
}

export default useFetch