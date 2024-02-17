import Navbar from "./Components/Navbar/Navbar"
import '../src/general.css'
import { BrowserRouter } from "react-router-dom"
import MyRoutes from "./Components/UI/Routes/MyRoutes"
import { useState } from "react"
import { AuthContext } from "./context"
import { CookiesProvider } from "react-cookie"


function App() {
  // const [loggedIn, setLoggedIn] = useState(null)
  // const [isDm, setIsDm] = useState(false)
  // const isAuth = localStorage.getItem('token')
  // console.log(isAuth)
  
  return (
    // <AuthContext.Provider value={{
    //   loggedIn,
    //   setLoggedIn,
    //   isDm,
    //   setIsDm
    // }}>
      <BrowserRouter>
        <CookiesProvider>
          <Navbar/>
          <MyRoutes/>
        </CookiesProvider>
      </BrowserRouter>
    // </AuthContext.Provider>
  )
}

export default App