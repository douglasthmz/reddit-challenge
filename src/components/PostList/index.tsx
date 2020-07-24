import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  Container,
  ButtonRow,
  PostUl,
  PostItem,
  Thumb,
  Infos,
  Title,
  Time,
  Author,
  Address,
  PageButton,
  LoaderContainer,
} from './styles';
import Button from '../Button';
import NoThumb from '../../assets/no-thumbnail.jpg';
import api from '../../utils/api';

interface PostRaw {
  data: PostData;
}

interface PostData {
  id: string;
  title: string;
  created_utc: number;
  author: string;
  thumbnail: string;
  url: string;
}

const PostList: React.FC = () => {
  const [active, setActive] = useState('hot');
  const [posts, setPosts] = useState([] as PostRaw[]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      setLoading(true);
      const apiData = await api.get(`/${active}.json`);

      setPosts(apiData?.data?.data?.children);
      setLoading(false);
    };

    getApiData();
  }, [active]);

  return (
    <Container>
      <ButtonRow>
        <Button
          onClick={() => {
            setActive('hot');
            setShow(false);
            setLoading(true);
          }}
          isActive={active === 'hot' ? true : false}
          disabled={active === 'hot' ? true : false}
        >
          HOT
        </Button>
        <Button
          onClick={() => {
            setActive('new');
            setShow(false);
          }}
          isActive={active === 'new' ? true : false}
          disabled={active === 'new' ? true : false}
        >
          NEWS
        </Button>
        <Button
          onClick={() => {
            setActive('rising');
            setShow(false);
          }}
          isActive={active === 'rising' ? true : false}
          disabled={active === 'rising' ? true : false}
        >
          RISING
        </Button>
      </ButtonRow>
      {loading ? (
        <LoaderContainer>
          <ClipLoader size={150} color={'#ff5500'} />
        </LoaderContainer>
      ) : (
        <>
          <PostUl>
            {posts &&
              posts.map((post, index) =>
                index < 5 || show ? (
                  <PostItem key={post.data.id}>
                    <Thumb>
                      <img
                        src={
                          post.data.thumbnail === 'self'
                            ? NoThumb
                            : post.data.thumbnail
                        }
                        alt="thumb"
                      />
                    </Thumb>
                    <Infos>
                      <Title>{post.data.title}</Title>
                      <p>
                        <Time>{post.data.created_utc}</Time> por{' '}
                        <Author>{post.data.author}</Author>
                      </p>
                      <Address>
                        <a
                          href={post.data.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.data.url}
                        </a>
                      </Address>
                    </Infos>
                  </PostItem>
                ) : null
              )}
          </PostUl>

          <PageButton onClick={() => setShow(!show)}>
            {show ? `- VER MENOS` : `+ VER MAIS`}
          </PageButton>
        </>
      )}
    </Container>
  );
};

export default PostList;
