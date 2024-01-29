/* eslint-disable react/prop-types */
import { createContext } from "react";
import useGetData from "../Hooks/useGetData";
import useAuth from "../Hooks/useAuth";
export const AdminDataContext = createContext(null);
const AdminProvider = ({ children }) => {
  const [userData] = useGetData("/api/user");
  const { authInfo } = useAuth();
  const { email } = authInfo?.user || {};
  console.log(email);
  console.log(userData);
  const isAdmin = userData?.some((admin) => admin?.email == email);
  console.log(isAdmin)
  return (
    <AdminDataContext.Provider value={userData}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminProvider;
