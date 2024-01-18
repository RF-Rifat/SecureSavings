import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const useAuth = () => {
   const authInfo = useContext(AuthContext);

   return { authInfo };
};
// { user, loading, createUser, login, updateUserProfile }
export default useAuth;