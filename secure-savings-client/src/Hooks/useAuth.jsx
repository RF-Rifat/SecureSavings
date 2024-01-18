import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const useAuth = () => {
   const authInfo = useContext(AuthContext);
   console.log(authInfo)
   if (authInfo.user === null) {
      return false
   }

   return { authInfo };
};
// { user, loading, createUser, login, updateUserProfile }
export default useAuth;