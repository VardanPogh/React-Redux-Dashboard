import { auth } from "../auth/FirebaseAuth";
var TOKEN_KEY = "logged";
export const checkUser = () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            localStorage.setItem(TOKEN_KEY, true);
            return true;
        } else {
            localStorage.removeItem(TOKEN_KEY);
            return false;
        }
    });
};
export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
};
export const logout = () => {
    auth.signOut().then((user) => {
        localStorage.removeItem(TOKEN_KEY);
        window.location.href = "/signage";
    });
};
