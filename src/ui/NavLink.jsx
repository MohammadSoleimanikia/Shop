import { NavLink } from "react-router-dom"
export default function NavItem({children,...props}){
    const getNavClass=(isActive)=>{
        return isActive ?"font-semibold text-lg mr-5 text-cyan-700 " : "font-semibold text-lg mr-5 text-slate-700 "
    }
    return <NavLink   {...props} className={({isActive})=>getNavClass(isActive)}>{children}</NavLink>
}