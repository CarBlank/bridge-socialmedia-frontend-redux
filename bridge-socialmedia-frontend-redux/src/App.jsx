import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/Login/Login'
import Register from './components/Register/Register'
import TheHeader from './components/TheHeader/TheHeader'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import PostDetail from "./components/Post/Posts/PostDetail"
import PostCreate from './components/Post/CreatePost'
import Comments from './components/Comments/CommentList'
// no listo
// import PrivateZone from './guards/PrivateZone'
// import Search from './components/Search/Search'
// import AdminZone from './guards/AdminZone'
// import Admin from './components/Admin/Admin'
// import NotFound from './components/NotFound/NotFound'

function App() {
  return (
  <div className='App'>
  <BrowserRouter>
  <TheHeader />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/profile" element={ 
            <PrivateZone>
        <Profile />
        </PrivateZone> 
      }/> */}
       {/* <Route path="*" element={<NotFound />} />
      <Route path="/admin" element={ <AdminZone> <Admin /> </AdminZone>}/> */}
      <Route path="/posts/id/:_id" element={<PostDetail />} />
      {/* <Route path="/search/:postName" element={<Search />} /> */}
      <Route path="/search/create" element={<PostCreate />} />
      <Route path='/comments' element={<Comments />} />
    </Routes>
  </BrowserRouter>
</div>
)

}

export default App


// import Login from './components/Login/Login'
// import Register from './components/Register/Register'
// import TheHeader from './components/TheHeader/TheHeader'
// import Home from './components/Home/Home'
// import Profile from './components/Profile/Profile'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <TheHeader />
//         <Routes>
//         <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
