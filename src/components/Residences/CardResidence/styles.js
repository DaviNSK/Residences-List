import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 270px;
  background: white;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    background-size: cover;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-weight: bold;
    font-family: sans-serif;
    color: #22252c;
  }

  a {
    font-size: 12px;
    text-decoration: underline;
    color: #22252c;
    font-family: sans-serif;
    font-weight: bold;

    :hover {
      opacity: 0.8; 
    }
  }
`;
