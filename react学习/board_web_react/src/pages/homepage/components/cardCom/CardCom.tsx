import { memo } from "react";
import styleModule from "./style.module.css";
interface PropsType {
  tabList: { name: string }[];
  currentIndex: number;
  setCurrent: Function;
  children?: JSX.Element[];
}
const CardCom = memo((props: PropsType) => {
  const { tabList, currentIndex, setCurrent, children } = props;
  return (
    <div className={styleModule.cardWrapper}>
      <div className="flex justify-between">
        <div className="tab-list">
          {tabList.map((item, index) => (
            <span
              className={`text-[#07172b] mr-[40px] cursor-pointer ${
                currentIndex === index ? "!text-primary" : ""
              } `}
              key={index}
              onClick={() => setCurrent(index)}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="text-[14px] text-primary">查看更多</div>
      </div>
      <div>{children && children.length && children[currentIndex]}</div>
    </div>
  );
});

export default CardCom;
