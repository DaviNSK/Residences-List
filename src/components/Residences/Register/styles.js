import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 530px;
  background: white;
  flex-direction: column;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);

  h1 {
    color: #22252c;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }

  .error {
    color: red;
    font-weight: bold;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
`;

export const Fields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    font-weight: bold;
    font-family: sans-serif;
    color: #22252c;
    text-transform: uppercase;
    font-size: 10px;
    margin-bottom: 2px;
  }

  select {
    width: 100%;
    height: 35px;
    border: 1px solid #999999;
    border-radius: 4px;
    background: transparent;
    padding-left: 10px;
    
    ::placeholder {
      font-size: 12px;
    }
  }

  input {
    width: 100%;
    height: 35px;
    border: 1px solid #999999;
    border-radius: 4px;
    background: transparent;
    padding-left: 10px;
    
    ::placeholder {
      font-size: 12px;
    }
  }
`;

export const LatLong = styled.div`
  width: 100%;
  display: flex;
  padding-top: 15px;
  margin-bottom: 40px;

  div:first-child {
    margin-right: 10px;
  }
  div {
    width: 50%;

    label {
    font-weight: bold;
    font-family: sans-serif;
    color: #22252c;
    text-transform: uppercase;
    font-size: 10px;
    margin-bottom: 2px;
  }

  input {
    width: 100%;
    height: 35px;
    border: 1px solid #999999;
    border-radius: 4px;
    background: transparent;
    padding-left: 10px;

    ::placeholder {
      font-size: 12px;
    }
  }
  }
`;

export const Button = styled.button`
  width: 60%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 0;
  background: #22252c;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    opacity: 0.9;
  }

  @keyframes spinner {
  to {transform: rotate(360deg);}
}
.spinner {
  box-sizing: border-box;
  position: absolute;
  font-size: 16px;
  animation: spinner .6s linear infinite;
}
`;
