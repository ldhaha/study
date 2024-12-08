import React from "react";
// 插槽不建议用children,而是直接通过props
export default function Slot() {
  return (
    <div>
      <h1>插槽</h1>
      <SlotParent buttonSlot={<button>button</button>}>
        <div>第一个插槽</div>
        <div>第二个插槽</div>
      </SlotParent>
    </div>
  );
}

// 如果只有一个那么children不是数组
function SlotParent({ children, buttonSlot }) {
  console.log(children);
  return (
    <div>
      {children.map((item) => item)} {buttonSlot}
    </div>
  );
}
