import Sidebar from "./Sidebar"
import { Outlet, useLocation } from "react-router-dom"
const Admin = () => {
  const location = useLocation()
  return (
    <section className="flex bg-gradient-to-br from-green-200 via-[#a8cf45] to-green-400">
    <aside className="h-screen w-[20%] bg-gray-100">
      {(location.pathname !== "/admin/login") &&<Sidebar />}
    </aside>
    <main className="w-[80%]">
      <section className="mt-20"><Outlet /></section>
    </main>
  </section>
  )
}

export default Admin