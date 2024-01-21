import { Switch } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  // Retrieve the theme from local storage on initial load
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    // Update the HTML class and save the theme to local storage
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    // Toggle between "light" and "dark" themes
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="" onChange={handleTheme}>
      <Switch checked={theme === "dark"}></Switch>
    </div>
  );
};

export default ToggleTheme;
