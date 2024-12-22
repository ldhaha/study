import { memo } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/featrues/userInfoSlice";
import { useRoute } from "@/hooks";
import { LoginWrapper } from "./style";
import { Button } from "@arco-design/web-react";

const Login = memo(() => {
  const dispatch = useDispatch();
  const { navigate } = useRoute();
  function login() {
    dispatch(setUserInfo({ id: 456 }));
    navigate("/homepage");
  }
  return (
    <LoginWrapper>
      <div className="login-wrapper">
        <Button type="primary" onClick={() => login()}>
          登录
        </Button>
      </div>
    </LoginWrapper>
  );
});

export default Login;
