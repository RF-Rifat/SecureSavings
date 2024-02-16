import useGetUserData from "../../Hooks/useGetUserData";
import AccountData from "../../components/DashBoard/Accounts/AccountData";
import AccountList from "../../components/DashBoard/Accounts/AccountList";

const AccountSetting = () => {
  const [userAcc] = useGetUserData("/api/account");
  return (
    <>
      <AccountData />
      <AccountList userAcc={userAcc} />
    </>
  );
};

export default AccountSetting;
