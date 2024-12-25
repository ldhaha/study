import { useState, createRef, useImperativeHandle, forwardRef } from 'react';
import styleModule from '../style.module.css';
import { Spin } from '@arco-design/web-react';
import * as echarts from 'echarts';
const EchartsCom = forwardRef((props, ref) => {
  const divRef = createRef<HTMLDivElement>();
  const [loading, setLoading] = useState(false);
  function drawEcharts() {
    setLoading(true);
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    const instance = echarts.init(divRef.current);
    instance.setOption(option);
    setLoading(false);
  }
  useImperativeHandle(ref, () => ({
    drawEcharts,
    divRef,
    name: 'lindong'
  }));
  return (
    <>
      <Spin loading={loading}>
        <div
          className={`${styleModule.cardWrapper} !w-[1400px] mt-[16px] p-[16px] text-center`}
        >
          <div ref={divRef} className='w-[1368px] h-[400px]'></div>
        </div>
      </Spin>
    </>
  );
});

export default EchartsCom;
