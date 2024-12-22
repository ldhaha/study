import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAction } from "@/featrues/userInfoSlice";
import { LoginWrapper } from "./style";
import { Button, Spin } from "@arco-design/web-react";
import { StoreType } from "@/store/storeType";
import { useRoute } from "@/hooks";

const Login = memo(() => {
  const { navigate } = useRoute();
  const [loading, setLoading] = useState(false);
  const userInfo = useSelector((state: StoreType) => state.userInfo);
  useEffect(() => {
    if (userInfo.id) {
      navigate("/homepage");
    }
  }, [userInfo]);
  const dispatch = useDispatch();
  function login() {
    setLoading(true);
    dispatch(getUserInfoAction() as any);
  }
  return (
    <Spin loading={loading}>
      <LoginWrapper className="w-[100vw] h-[100vh] flex justify-center items-center">
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
