import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import PostList from './components/PostList';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <PostList />
      <GlobalStyle />
    </>
  );
};
export default App;
