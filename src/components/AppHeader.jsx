import { Link } from 'react-router-dom';
import { Button, Layout, Menu, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { logOut } from '../app/auth-slice';

const AppHeader = () => {
  const { Text } = Typography;
  const { Header } = Layout;

  const dispatch = useDispatch();

  const handleButtonClick = () => dispatch(logOut());

  return (
    <Header>
      <div className='logo' />

      <Menu theme='light' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key={'1'}>
          <Link to='/'>
            <Text className='header-text' strong='true'>
              Поиск
            </Text>
          </Link>
        </Menu.Item>
        <Menu.Item key={'2'}>
          <Link to='/favorites'>
            <Text className='header-text' strong='true'>
              Избранное
            </Text>
          </Link>
        </Menu.Item>
      </Menu>

      <Button type='text' onClick={handleButtonClick}>
        Выйти
      </Button>
    </Header>
  );
};

export default AppHeader;
