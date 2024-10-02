import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/auth/authSlice'

import { UserOutlined } from '@ant-design/icons'

import "./TheHeader.scss"

const TheHeader = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const { user } = useSelector((state) => state.auth)
 const onLogout = (e) => {
   e.preventDefault()
   dispatch(logout())
   navigate('/login')
 }

//  const [postName, setPostName] = useState('')

//   const handleChange = (e) => {
//     setPostName(e.target.value)
 
//   if (e.key === 'Enter') {
//     console.log(postName)
//     navigate(`/search/${postName}`)
//   }
 
//  }

 return (
    <nav className='header'>
      {/* <h1>header</h1> */}
      {/* <input 
    onKeyUp={handleChange}
    placeholder="search post"
    name="text"
  /> */}
      {user ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/profile" className='header__link'><UserOutlined /> Profile | {user.name}</Link>
          <button onClick={onLogout} className='header__btn'>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  )
 
}

export default TheHeader