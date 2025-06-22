'use client'
import { createContext, useContext } from "react"

const AuthContext = createContext()

export const AuthProvider({ children }: { children: React.ReactNode }) {

  return (
    <AuthContext.Provider value={{ token, user, loginPost, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
