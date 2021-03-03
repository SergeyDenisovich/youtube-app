import logo from '../assets/logo.svg';
import { Form, Input, Button, Col } from 'antd';
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../app/auth-slice';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const { Title } = Typography;
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleFormSubmit = (value) => {
    dispatch(logIn(value));
  };

  if (token) {
    <Redirect to='/' />;
  }

  return (
    <div className='login'>
      <Col align='middle'>
        <img src={logo} alt='Logo' />
      </Col>
      <Col align='middle'>
        <Title level={4}>Вход</Title>
      </Col>

      <Form onFinish={handleFormSubmit} layout='vertical'>
        <Form.Item
          label='Логин'
          name='login'
          rules={[{ required: true, message: 'Пожалуйста введите имя пользователя!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label='Пароль' name='password' rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' size='large'>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
