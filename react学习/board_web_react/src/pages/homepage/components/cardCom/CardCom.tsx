import { memo } from 'react';
import styleModule from '../style.module.css';
import { Spin } from '@arco-design/web-react';
interface PropsType {
  tabList: { name: string }[];
  currentIndex: number;
  setCurrent: Function;
  loading: boolean;
  data: { name: string; date: string }[];
}
const CardCom = memo((props: PropsType) => {
  const { tabList, currentIndex, setCurrent, loading, data } = props;
  return (
    <Spin loading={loading}>
      <div className={styleModule.cardWrapper}>
        <div className='flex justify-between mb-[20px]'>
          <div className='tab-list'>
            {tabList.map((item, index) => (
              <span
                className={`text-[#07172b] mr-[40px] cursor-pointer ${
                  currentIndex === index ? '!text-primary' : ''
                } `}
                key={index}
                onClick={() => setCurrent(index)}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className='text-[14px] text-primary cursor-pointer'>
            查看更多
          </div>
        </div>
        <div>
          {data.map((_, index) => (
            <div
              key={index}
              className='flex justify-between py-[12px] border-t-solid border-t-[#f5f6f7] border-t-[1px]'
            >
              <span className='flex-1 mr-[16px] line-clamp-1'>{_.name}</span>
              <span className='flex-shrink-0'>{_.date}</span>
            </div>
          ))}
        </div>
      </div>
    </Spin>
  );
});

export default CardCom;
