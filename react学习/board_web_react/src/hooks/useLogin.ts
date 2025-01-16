import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Message } from "@arco-design/web-react";
import { setUserInfo } from "@/featrues/userInfoSlice";
import { UserInfo } from "@/store/storeType";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserInfo = (): Promise<UserInfo> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: "lindong",
        });
      }, 1000);
    });

  const handleLogin = async (
    values: { name: string; password: string },
    remember: boolean
  ) => {
    try {
      setLoading(true);
      if (values.name === "lindong" && values.password === "971203ld") {
        const res = await getUserInfo();
        dispatch(setUserInfo(res));

        if (remember) {
          localStorage.setItem("userInfo", JSON.stringify(res));
        }

        Message.success("登录成功");
        navigate("/homepage");
      } else {
        Message.error("用户名或密码错误");
      }
    } catch (error) {
      Message.error("登录失败，请重试");
      console.error("登录错误:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleLogin,
  };
};
