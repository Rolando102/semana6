import { useState } from 'react'

function Form() {

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    alert(`
Nombre: ${formData.name}
Correo: ${formData.email}
    `)
  }

  return (
    <div className="container">

      <h1>Formulario</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Ingrese nombre"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Ingrese correo"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">
          Guardar
        </button>

      </form>

    </div>
  )
}

export default Form