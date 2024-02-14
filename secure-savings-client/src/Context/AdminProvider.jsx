/* eslint-disable react/prop-types */
import { createContext } from "react";
import useGetData from "../Hooks/useGetData";
import useAuth from "../Hooks/useAuth";
export const AdminDataContext = createContext(null);
const AdminProvider = ({ children }) => {
  const [userData] = useGetData("/api/user");
  const { authInfo } = useAuth();
  const { email } = authInfo?.user || {};
  const LoggedUser = userData?.filter((admin) => admin?.email == email);
  const isAdmin = LoggedUser?.some((item) => item.position === "Admin");
  const AdminAuth = {
    LoggedUser,
    isAdmin,
  };
  console.log(AdminAuth);
  return (
    <AdminDataContext.Provider value={AdminAuth}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminProvider;
