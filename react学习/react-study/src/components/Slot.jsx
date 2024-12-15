import React from "react";
// 插槽不建议用children,而是直接通过props
export default function Slot() {
  return (
    <div>
      <h1>插槽</h1>
      {/* 带参数就成了作用域插槽有子元素决定一些东西 */}
      <SlotParent
        extraSlot={<div>hhah</div>}
        buttonSlot={(item) => <button>{item}</button>}
      >
        <div>第一个插槽</div>
        <div>第二个插槽</div>
      </SlotParent>
    </div>
  );
}

// 如果只有一个那么children不是数组
function SlotParent({ children, buttonSlot, extraSlot }) {
  console.log(children);
  return (
    <div>
      {extraSlot}
      {children.map((item) => item)} {buttonSlot("子元素")}
    </div>
  );
}
