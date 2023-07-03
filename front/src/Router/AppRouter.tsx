import { Routes,Route } from 'react-router-dom'
import Dashboard from '../App'
import Prescription from '../admin/pages/Command'
import Statistique from '../admin/pages/Statistique'
import Password from '../admin/pages/Password'
import Register from '../admin/pages/Register'
import MedocIn from '../admin/pages/MedocIn'
import MedocOut from '../admin/pages/MedocOut'
import Fournisseurs from '../admin/pages/Fournisseurs'
import Login from '../client/pages/Accueil'
import AdminPrivateRoutes from './AdminPrivateRoute'
import Aos from "aos"
function AppRouter() {
  Aos.init();
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/dashboard" element={<MedocIn/>}/>
        </Route>
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/commande" element={<Prescription/>}/>
        </Route>
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/statistique" element={<Statistique/>}/>
        </Route>
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/password" element={<Password/>}/>
        </Route>
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/register" element={<Register/>}/>
        </Route>
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/in" element={<MedocIn/>}/>
        </Route>
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/out" element={<MedocOut/>}/>
        </Route>
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/fournisseurs" element={<Fournisseurs/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter