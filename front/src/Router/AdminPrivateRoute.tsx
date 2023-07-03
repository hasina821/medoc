import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Vortex } from  'react-loader-spinner'

const AdminPrivateRoutes = () => {
    const token = localStorage.getItem('adminToken')
    ? localStorage.getItem('adminToken')
    : null 
    const role = localStorage.getItem('role')
    ? localStorage.getItem('role')
    : null 
    console.log(token);
    
    function isAdmin(token: string | null, admin: string|null): boolean {
        return !!token && admin === "ADMIN";
      }

    if (!token) {
            return(
                <>
                    <Navigate  to="/"/>
                </>
            )
    } else {
        return(
            isAdmin(token,role) ? <Outlet/> : <Navigate to="/"/>
        )
    }
}

export default AdminPrivateRoutes
