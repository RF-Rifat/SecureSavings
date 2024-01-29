/* eslint-disable react/prop-types */
import { createContext } from "react";
import useGetData from "../Hooks/useGetData";
import useAuth from "../Hooks/useAuth";
export const AdminDataContext = createContext(null);
const AdminProvider = ({ children }) => {
  const [userData] = useGetData("/api/user");
  const { authInfo } = useAuth();
  const { email } = authInfo?.user || {};
  const adminData = userData?.filter((admin) => admin?.email == email);
  const isAdmin = adminData?.some((item) => item.position === "Admin");
  const AdminAuth = {
    adminData,
    isAdmin,
  };
  return (
    <AdminDataContext.Provider value={AdminAuth}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminProvider;
