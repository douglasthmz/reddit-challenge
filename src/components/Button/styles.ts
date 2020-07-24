import styled, { css } from 'styled-components';
interface ButtonProps {
  isActive?: boolean;
}
export const Container = styled.button<ButtonProps>`
  border: 0;
  border-radius: 5px;
  background-color: #666666;
  color: #f8f8ff;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 18px;
  & + & {
    margin-left: 5px;
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: #ff5500;
    `}
`;
