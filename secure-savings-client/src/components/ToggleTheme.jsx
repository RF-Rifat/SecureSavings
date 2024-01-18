import { Switch } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  //
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="" onChange={handleTheme}>
      <Switch></Switch>
    </div>
  );
};

export default ToggleTheme;
