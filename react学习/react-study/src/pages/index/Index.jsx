import { Link } from 'react-router-dom';
import { useContext, memo } from 'react';
import { ThemeContext } from '../../App2';

export const Index = memo(() => {
  const theme = useContext(ThemeContext);
  console.log('inedx 渲染了');
  return (
    <>
      <div>这是首页</div>
      {theme}
      <Link to='/about'>去about页面</Link>
    </>
  );
});
