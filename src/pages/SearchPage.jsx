import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from '../app/queries-slice';
import VideoList from '../components/VodeoList';
import { Typography, Input, Tooltip, Col, Row } from 'antd';
import { ProfileTwoTone, AppstoreTwoTone, HeartTwoTone } from '@ant-design/icons';

const SearchPage = () => {
  const { Title } = Typography;
  const { Search } = Input;

  const response = useSelector((state) => state.query.asyncResponse);
  const dispatch = useDispatch();

  const onSearch = (value) => {
    dispatch(fetchUserRequest(value));
  };

  return (
    <>
      <section>
        <Title level={3}>Поиск видео</Title>
        <Search
          enterButton={response ? 'Поиск' : 'Найти'}
          size='large'
          placeholder={response ? null : 'Что хотите посмотреть?'}
          onSearch={onSearch}
          suffix={
            response ? (
              <Tooltip placement='bottom' visible={true}>
                <HeartTwoTone />
              </Tooltip>
            ) : null
          }
        />
      </section>

      {response && (
        <section>
          <Row align='middle' justify='space-between'>
            <Col>
              <Title level={5}>{`Видео по запросу "-"`}</Title>
            </Col>
            <Col>
              <ProfileTwoTone style={{ fontSize: '20px', padding: '0 15px', cursor: 'pointer' }} />
              <AppstoreTwoTone style={{ fontSize: '20px', cursor: 'pointer' }} />
            </Col>
          </Row>
        </section>
      )}

      {response && <VideoList data={response} />}
    </>
  );
};

export default SearchPage;
