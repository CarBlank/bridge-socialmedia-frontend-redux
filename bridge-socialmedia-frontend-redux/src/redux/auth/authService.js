import axios from "axios";
// import { logout } from "./authSlice";

const API_URL = "http://localhost:3000";

const register = async (userData) => {
  const res = await axios.post(`${API_URL}/users`, userData);
  return res.data;
};


// const login = async (userData) => {
//   const res = await axios.post(API_URL + "/users/login", userData)
//   console.log (res.data)
//   if(res.data){
//       localStorage.setItem("user", JSON.stringify(res.data.user))
//       localStorage.setItem("token", JSON.stringify(res.data.token))
//       // En lugar de devolver 'res', devuelve un objeto con los datos necesarios
//       return {
//           user: res.data.user,
//           token: res.data.token
//       };
//   }
// }

const login = async (userData) => {
  const res = await axios.post(`${API_URL}/users/login`, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
  }
  return res.data;
};

// const login = async (userData) => {
//     try {
//       const res = await axios.post(`${API_URL}/users/login`, userData);
  
//       if (res.data) {
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         localStorage.setItem("token", JSON.stringify(res.data.token));
//       }
//       return res.data;
//     } catch (error) {
//       handleError(error);
//     }
//   };

//   const handleError = (error) => {
//   if (error.response) {
//     // El servidor respondió con un código de estado fuera del rango 2xx
//     console.error("Error response:", error.response.data);
//     throw new Error(error.response.data.message || "Error en la solicitud");
//   } else if (error.request) {
//     // La solicitud fue hecha pero no se recibió respuesta
//     console.error("Error request:", error.request);
//     throw new Error("No se recibió respuesta del servidor");
//   } else {
//     // Algo pasó al configurar la solicitud
//     console.error("Error message:", error.message);
//     throw new Error(error.message);
//   }
// };


const logout = async () => {
const token = JSON.parse(localStorage.getItem('token'))
 const res = await axios.delete(`${API_URL}/users/logout`, {
   headers: {
     authorization: token,
   }
 })
  if (res.data) localStorage.clear() 
 return res.data
}

const authService = {
  register,
  login,
  logout,
};

export default authService;
