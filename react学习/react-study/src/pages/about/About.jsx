import { Link, Outlet } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div>这事About页面</div>
      <div>
        <Link to='/home'>去index页面</Link>
      </div>
      <Outlet />
    </>
  );
};

export default About;
