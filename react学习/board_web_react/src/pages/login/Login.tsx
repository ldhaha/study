import { memo, useState } from "react";
import { setUserInfo } from "@/featrues/userInfoSlice";
import { LoginWrapper } from "./style";
import { Button, Spin } from "@arco-design/web-react";
import {  UserInfo } from "@/store/storeType";
import { useDispatch } from "react-redux";
import style from './style.module.css'
const Login = memo(() => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
 
  // 模拟获取用户信息
  const getUserInfo = (): Promise<UserInfo> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'lindong'
        });
      }, 1000);
    });

  // 登录
  async function login() {
    setLoading(true);
    const res  = await getUserInfo();
    dispatch(setUserInfo(res));
   
  }
  return (
    <Spin loading={loading}>
      <LoginWrapper className={`w-[100vw] h-[100vh] flex justify-center items-center ${style.loginWrapper}`}>
        <div className="login-wrapper !w-[600px] mx-auto !h-[400px] ">
          <Button type="primary" onClick={() => login()}>
            登录
          </Button>
        </div>
      </LoginWrapper>
    </Spin>
  );
});

export default Login;
