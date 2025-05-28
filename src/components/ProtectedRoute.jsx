// components/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Error from "@/pages/Error";
export default function ProtectedRoute({ children, allowedRoles }) {
    const { isAuthenticated, info } = useSelector((state) => state.user);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (!allowedRoles.includes(info.role)) {
        return <Navigate to="/" replace />;
    }

    return children;
}
