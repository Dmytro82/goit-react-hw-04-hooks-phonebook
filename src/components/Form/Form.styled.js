import styled from '@emotion/styled';

export const Container = styled.form`
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Button = styled.button`
  width: 180px;
  background-color: #4df05b;
  &:hover {
    cursor: pointer;
    background-color: #4b4ef0;
  }
`;
