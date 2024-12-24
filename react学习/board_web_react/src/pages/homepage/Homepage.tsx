import { memo, useEffect, useState } from 'react';
import sytleModule from './style.module.css';
import CardCom from './components/cardCom/CardCom';
import { leftCardData } from './mockData';
type CardDataType = {
  name: string;
  date: string;
};
const Homepage = memo(() => {
  const [ltIndex, setLtIndex] = useState(0);
  const [rtIndex, setRtIndex] = useState(0);
  const [ltLoading, setLtLoading] = useState(false);
  const [rtLoading] = useState(false);
  const [leftData, setLeftData] = useState<CardDataType[]>([]);
  const leftTopTabList = [
    {
      name: '火影忍者'
    },
    {
      name: '七龙珠'
    }
  ];
  const rightTopTabList = [
    {
      name: '铠甲勇士'
    },
    {
      name: '镇魂街'
    },
    {
      name: '请回答1998'
    }
  ];

  const generateLeftData = (index: number) => {
    setLtLoading(true);
    setLtIndex(index);
    const data = leftCardData[index];
    setTimeout(() => {
      setLeftData(data);
      setLtLoading(false);
    }, 500);
  };

  useEffect(() => {
    generateLeftData(0);
  }, []);
  return (
    <div className='w-[1400px] mx-auto pt-[11px]'>
      <div className={`h-[194px] ${sytleModule.banner} mb-[7px]`}></div>
      <div className='flex justify-between'>
        <CardCom
          tabList={leftTopTabList}
          currentIndex={ltIndex}
          setCurrent={generateLeftData}
          loading={ltLoading}
          data={leftData}
        ></CardCom>
        <CardCom
          tabList={rightTopTabList}
          currentIndex={rtIndex}
          setCurrent={setRtIndex}
          loading={rtLoading}
          data={[]}
        />
      </div>
    </div>
  );
});

export default Homepage;
