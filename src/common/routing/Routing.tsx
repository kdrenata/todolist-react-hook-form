import { Route, Routes } from "react-router"
import { Main } from "@/app/Main.tsx"
import { Login } from "@/features/auth/ui/Login/Login.tsx"
import { PageNotFound } from "@/common/components"

export const Path = {
  Main: '/',
  Login: '/login', // /login слэш лучше ставить меньше будет багов
  NotFound: '*' // абсолютно любой путь кроме тех, что выше
} as const // делает объект только для чтения, нельзя случайно изменить Path.Main = '/иван'

export const Routing = () => {
  return (
  <Routes>
    <Route path={Path.Main} element={<Main />} />
    <Route path={Path.Login} element={<Login />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
  )
}