import { memo, useState } from "react";
import sytleModule from "./style.module.css";
import CardCom from "./components/cardCom/CardCom";
const Homepage = memo(() => {
  const [ltIndex, setLtIndex] = useState(0);
  const [rtIndex, setRtIndex] = useState(0);
  const leftTopTabList = [
    {
      name: "公司公告",
    },
    {
      name: "政策法规",
    },
  ];
  const rightTopTabList = [
    {
      name: "风险监控",
    },
    {
      name: "研究报告",
    },
    {
      name: "违规案例",
    },
  ];
  return (
    <div className="w-[1400px] mx-auto pt-[11px]">
      <div className={`h-[194px] ${sytleModule.banner} mb-[7px]`}></div>
      <div className="flex justify-between">
        <CardCom
          tabList={leftTopTabList}
          currentIndex={ltIndex}
          setCurrent={setLtIndex}
        >
          <div>1</div>
          <div>2</div>
        </CardCom>
        <CardCom
          tabList={rightTopTabList}
          currentIndex={rtIndex}
          setCurrent={setRtIndex}
        />
      </div>
    </div>
  );
});

export default Homepage;
