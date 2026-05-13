import useFetch from '../hooks/useFetch'

import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function List() {

  const { data, loading, error } = useFetch('/users')

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <div className="container">

      <h1>Lista de Usuarios</h1>

      {
        data.map(user => (

          <div className="card" key={user.id}>

            <h3>{user.name}</h3>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Teléfono:</strong> {user.phone}
            </p>

            <p>
              <strong>Empresa:</strong> {user.company.name}
            </p>

          </div>
        ))
      }

    </div>
  )
}

export default List