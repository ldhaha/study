import React from "react";
import "../css/header.css";
export default function Header({ tabList, currentTab, setCurrentTab }) {
  return (
    <div className="tab-header">
      {tabList.map((item, index) => (
        <div
          onClick={() => setCurrentTab(index)}
          className={`tab ${currentTab === index ? "active-tab" : ""}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
