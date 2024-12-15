import { createContext, useState } from "react";
const ThemeContext = createContext();

function withThemeColor(Com) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          return <Com {...props} {...value} />;
        }}
      </ThemeContext.Consumer>
    );
  };
}

function InnerCom(props) {
  return <div>{props.color}hhh</div>;
}

export default function App() {
  const Com = withThemeColor(InnerCom);
  const [theme, setTheme] = useState({ color: "red" });
  return (
    <ThemeContext.Provider value={theme}>
      <Com />

      {/* {withThemeColor(InnerCom)} */}
    </ThemeContext.Provider>
  );
}
