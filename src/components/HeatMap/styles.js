import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: #0000009a;
  visibility: ${(props) => (props.show ? 'unset' : 'hidden')};
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  z-index: 6;
  width: 40%;
  height: 650px;
  justify-content: center;
  position: relative;
  border: 1px solid #c5c5c5;
  @media (max-width: 1280px) {
    height: 500px;
    width: 45%;
  }
  @media (max-width: 1024px) {
    height: 600px;
    width: 45%;
  }
  @media (max-width: 768px) {
    height: 430px;
    width: 90%;
  }
  
  .close-icon {
    position: absolute;
    right: 8px;
    color: #22252c;
    top: 8px;
    z-index: 40;
    cursor: pointer;
  }
`;
