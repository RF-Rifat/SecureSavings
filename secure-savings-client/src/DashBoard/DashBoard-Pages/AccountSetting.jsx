import useAuth from "../../Hooks/useAuth";
import useGetUserData from "../../Hooks/useGetUserData";
import AccSkeleton from "../../components/DashBoard/Accounts/AccSkeleton";
import AccountData from "../../components/DashBoard/Accounts/AccountData";
import AccountList from "../../components/DashBoard/Accounts/AccountList";

const AccountSetting = () => {
  const { authInfo } = useAuth();
  const { displayName, photoURL, email } = authInfo?.user || {};
  const [data, refetch] = useGetUserData(`/api/userData/${email}`);

  return (
    <>
      <AccountData data={data} />
      <AccountList userAcc={data.accounts} />
    </>
  );
};

export default AccountSetting;
