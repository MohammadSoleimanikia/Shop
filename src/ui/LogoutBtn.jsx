import Button from "@/ui/Button";
import { useDispatch } from "react-redux";
import { userAction } from "@/store/user";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function logOut() {
        navigate("/");
        dispatch(userAction.logout());
    }
    return <Button onClick={logOut}>Log out</Button>;
}
