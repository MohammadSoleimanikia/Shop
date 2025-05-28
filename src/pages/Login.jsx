import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "@/store/user";
import { useNavigate } from "react-router-dom";
import Button from "@/ui/Button";
export default function Login() {
    const { isAuthenticated, error, loading, info } = useSelector(
        (state) => state.user
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function submitHandler(e) {
        e.preventDefault();
        dispatch(userAction.login({ email, password }));
    }

    useEffect(() => {
        if (isAuthenticated && info) {
            if (info.role === "admin") navigate("/admin");
            if (info.role === "user") navigate("/");
        }
    }, [isAuthenticated, info, navigate]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="flex justify-center">
            {error && <h2 className="text-red-500">{error}a</h2>}
            <form
                className="shadow-xl border-2 p-5 w-10/12 sm:w-1/2 md:w-3/12 border-slate-200 rounded-md my-10 mx-10 flex flex-col"
                onSubmit={submitHandler}
                action=""
            >
                <h2 className="text-2xl">Login</h2>
                <p className="font-light mb-5">
                    Enter your email below to login to your account
                </p>
                <label htmlFor="email">Email</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="m@example.com"
                    className="rounded-sm border-2 border-slate-200 mb-3 p-1"
                    type="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="rounded-sm border-2 border-slate-200 mb-3 p-1"
                    type="password"
                />
                <Button disabled={loading}>submit</Button>
            </form>
        </div>
    );
}
