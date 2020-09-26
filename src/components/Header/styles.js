import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const HeaderTop = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;

  h1 {
    color: #22252c;
    font-size: 18px;
    font-weight: bold;
    padding-top: 8px;
  }

  .icons {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
    color: #22252c;
    font-size: 22px;
    margin-left: 10px;
  }
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  background: #22252c;
  height: 70px;
  padding: 0px 50px;
  justify-content: flex-end;

  div {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;

    :hover {
      p {
        color: #c73838;
      }

      svg {
        color: #c73838;
      }
    }
  }

  p {
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-top: 17px;
  }

  svg {
    color: #fff;
    font-size: 22px;
    margin-left: 10px;
  }
`;
