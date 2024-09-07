import React, { createContext, useContext } from "react";

const ThemeContext = React.createContext();
function Person() {
  const theme = "dark"; // Значение, которое мы передадим через контекст

  return (
    // 2. Предоставляем значение контекста через Provider
    <ThemeContext.Provider value={theme} >
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // 3. Потребляем значение контекста через useContext
  const theme = useContext(ThemeContext);

  return `I am styled by theme context ${theme}`
}
export default Person;
