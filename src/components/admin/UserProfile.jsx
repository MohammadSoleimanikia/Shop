import * as React from "react";
import Logout from "@mui/icons-material/Logout";
import { Account } from "@toolpad/core/Account";
import { AppProvider } from "@toolpad/core/AppProvider";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "@/store/user";

export default function UserProfile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.info);
    const userSession = {
        user: {
            name: user.name,
            email: user.email,
            image: user.image,
        },
    };
    const [session, setSession] = React.useState(userSession);

    const authentication = React.useMemo(() => {
        return {
            signOut: () => {
                dispatch(userAction.logout());
                setSession(null);
            },
        };
    }, [dispatch]);

    return (
        <AppProvider authentication={authentication} session={session}>
            {/* preview-start */}
            <Account
                slotProps={{
                    signInButton: {
                        color: "success",
                    },
                    signOutButton: {
                        color: "success",
                        startIcon: <Logout />,
                    },
                    preview: {
                        variant: "expanded",
                        slotProps: {
                            avatarIconButton: {
                                sx: {
                                    width: "fit-content",
                                    margin: "auto",
                                },
                            },
                            avatar: {
                                variant: "rounded",
                            },
                        },
                    },
                }}
            />
            {/* preview-end */}
        </AppProvider>
    );
}
