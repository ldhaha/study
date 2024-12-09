import Header from "./Header";
import Content from "./Content";
import { useState } from "react";
export function Main() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabList = ["游戏", "体育", "音乐"];

  return (
    <div style={{ width: "375px", margin: "0 auto" }}>
      <Header
        tabList={tabList}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <Content tabList={tabList} currentTab={currentTab} />
    </div>
  );
}
