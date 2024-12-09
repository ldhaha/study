import React from "react";

export default function Content({ tabList, currentTab }) {
  return <div>{tabList[currentTab]}</div>;
}
