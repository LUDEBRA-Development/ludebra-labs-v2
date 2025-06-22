'use client'
import { useEffect, useState } from 'react'
import PageWrapper from '../components/pagewrapper'

export default function Login() {
  const [mensaje, setMensaje] = useState('')
  const [loading, setLoading] = useState(true)
  const [clic, setClic] = useState(true)
  const [inicioMensaje, setInicioMensaje] = useState('Iniciar Sesion')

  // const { getEmailStore } = useInfoUsersStore()
  // const auth = useAuth()
  // const navigate = useNavigate()

  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const handleSubmitEvent = async (e) => {
    e.preventDefault()
    if (input.email !== '' && input.password !== '') {
      try {
        // getEmailStore(input.email)
        // await auth.loginPost(input)
      } catch (error) {
        // setMensaje(error.message)
      }
      return
    }
    alert('Todos los campos son obligatorios')
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function mensajeSesion() {
    if (clic) {
      setClic(false)
      setInicioMensaje('Cargando...')
    }
  }

  // const password = document.getElementById('password')
  // let icon = document.getElementById('icon')

  // function seePassword() {
  //   if (password.type === 'text') {
  //     icon.name = 'eye-off-outline'
  //     password.type = 'password'
  //   } else {
  //     icon.name = 'eye-outline'
  //     password.type = 'text'
  //   }
  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <PageWrapper>
      <div className='body-login'>
        <header className='header-login'>
          {/* <img onClick={() => navigate('/')} src={logo} alt='#' className='login-logo' /> */}
        </header>
        <form className='h-screen' onSubmit={handleSubmitEvent}>
          <div className='bg-amber-600 w-6xl h-6xl'>
            <h2>Iniciar Sesion</h2>
            <div className='login-inputs'>
              {/* <ion-icon name='mail-outline'></ion-icon> */}
              <input
                type='email'
                // placeholder='Email'
                id='user-name'
                name='email'
                onChange={handleInput}
                aria-describedby='user-name'
                aria-invalid='false'
                required
              />
              <label>Email</label>
            </div>
            <div className='login-inputs'>
              {/* <ion-icon id='icon' onClick={seePassword} name='eye-off-outline'></ion-icon> */}
              <input
                type='password'
                // placeholder='Contraseña'
                id='password'
                name='password'
                aria-describedby='user-password'
                aria-invalid='false'
                onChange={handleInput}
                required
              />
              <label>Password</label>
            </div>

            <button className='btn-iniciar-sesion' onClick={mensajeSesion}>
              {inicioMensaje}
            </button>

            <div className='register-login'>
              <p>
                {/* No tienes una cuenta? <a onClick={() => navigate('/register')}>Registrate</a> */}
              </p>
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}
