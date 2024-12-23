import { memo, useState } from 'react';
import { setUserInfo } from '@/featrues/userInfoSlice';
import { LoginWrapper } from './style';
import {
  Button,
  Spin,
  Input,
  Checkbox,
  Form,
  Message
} from '@arco-design/web-react';
import { UserInfo } from '@/store/storeType';
import { useDispatch } from 'react-redux';
import style from './style.module.css';
const FormItem = Form.Item;
const Login = memo(() => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
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
    form.validate(async (errors, values) => {
      if (!errors) {
        if (values.name === 'lindong' && values.password === '971203ld') {
          setLoading(true);
          const res = await getUserInfo();
          dispatch(setUserInfo(res));
        } else {
          Message.error('密码错误');
        }
      }
    });
  }
  return (
    <Spin loading={loading}>
      <LoginWrapper
        className={`w-[100vw] h-[100vh] flex justify-center items-center ${style.loginWrapper}`}
      >
        <div className='login-wrapper w-[416px] h-[406px] rounded-[8px] ml-auto mr-[140px] bg-[white] '>
          <div>
            <div className='mt-[44px] text-center text-[24px] mb-[44px]'>
              欢迎来到陈磊之家
            </div>
            <div className='pl-[28px]'>
              <Form
                form={form}
                style={{ width: 360 }}
                initialValues={{ name: '', password: '' }}
                layout='horizontal'
              >
                <FormItem
                  label='用户名'
                  field='name'
                  rules={[{ required: true, message: '用户名必填' }]}
                >
                  <Input placeholder='请输入用户名' />
                </FormItem>
                <FormItem
                  label='密码'
                  field='password'
                  rules={[{ required: true, message: ' 密码必填' }]}
                >
                  <Input.Password placeholder='请输入密码' />
                </FormItem>
              </Form>
            </div>
            <div className='ml-[28px] mb-[34px]'>
              <Checkbox checked={check} onChange={(val) => setCheck(val)}>
                七天内免登录
              </Checkbox>
            </div>
            <div className='text-center'>
              <Button
                className='w-[360px]'
                type='primary'
                onClick={() => login()}
              >
                登录
              </Button>
            </div>
          </div>
        </div>
      </LoginWrapper>
    </Spin>
  );
});

export default Login;
