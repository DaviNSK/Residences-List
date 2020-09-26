import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 50px;

  .test {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto; 
  }
`;

export const CardsList = styled.div`
  width: 30%;
  margin-right: 25px;
  margin-bottom: 30px;
`;

export const RegisterForm = styled.div`
  width: 30%;
`;
