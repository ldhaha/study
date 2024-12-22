import React, { createContext, memo, useContext, useState, use } from "react";
const UserContext = createContext();
const InnerCom = () => {
  if (1) {
    // use可以在内部代码块执行，useContext不可以
    console.log(use(UserContext));
  }
  const user = useContext(UserContext);
  console.log(user);
  console.log("-----");
  return <>内部{user}</>;
};
const UseContext = memo(() => {
  const [name] = useState("chenlei");
  return (
    <UserContext.Provider value={name}>
      <InnerCom />
    </UserContext.Provider>
  );
});

export default UseContext;
