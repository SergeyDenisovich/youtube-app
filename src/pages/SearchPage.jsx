import React from 'react';
import { Typography, Input } from 'antd';

const SearchPage = () => {
  const { Title } = Typography;
  const { Search } = Input;
  return (
    <section>
      <Title level={3}>Поиск видео</Title>
      <Search enterButton={'Поиск'} size='large' placeholder={'Что хотите посмотреть?'} />
    </section>
  );
};

export default SearchPage;
