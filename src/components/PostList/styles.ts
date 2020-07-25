import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px;
  max-width: 930px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20% auto 0 auto;
  max-width: 930px;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-width: 500px;
  width: 100%;
  margin: 1px auto;
`;

export const PostUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-top: 15px;
  border-top: 1px solid #333333;
`;

export const PostItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #333333;
  &:hover {
    background-color: ${shade(0.05, '#f8f8ff')};
  }
`;

export const Thumb = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  margin-left: 8px;
  p {
    font-size: 14px;
  }
`;

export const Title = styled.h2`
  color: #333333;
  font-size: 22px;
  font-weight: 700;
`;

export const Time = styled.span`
  color: #666666;
`;

export const Author = styled.span`
  color: #ff5500;
`;

export const Address = styled.span`
  font-size: 14px;
  a {
    text-decoration: none;
    color: #333333;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const PageButton = styled(Button)`
  margin: 20px 0;
  padding: 10px 0;
`;
