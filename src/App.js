import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Login from './components/Login';
import SearchPage from './pages/SearchPage';
import SavedQuery from './pages/SavedQuery';
import { useSelector, useDispatch } from 'react-redux';
import { onReload } from './app/auth-slice';

function App() {
  const { Content } = Layout;
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (localStorage.getItem('token')) {
    const token = JSON.parse(localStorage.getItem('token'));
    dispatch(onReload(token));
  }
  return (
    <Router>
      {token !== null ? (
        <Layout>
          <AppHeader />
          <Switch>
            <Layout>
              <Content>
                <Route exact path='/' component={SearchPage} />
                <Route exact path='/favorites' component={SavedQuery} />
              </Content>
            </Layout>
          </Switch>
        </Layout>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
