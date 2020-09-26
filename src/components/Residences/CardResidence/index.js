import React from 'react';
import PropTypes from 'prop-types';
import { ArrowUpRightSquare } from 'react-bootstrap-icons';
import { Container, Content } from './styles';

export default function CardResidence(props) {
  return (
    <Container>
      <img
        src="https://casasemmiami.com.br/wp-content/uploads/2019/11/comprar-casas-nos-estados-unidos-otimo-investimento.jpg"
        alt="house"
      />

      <Content>
        <p>
          CEP: <small>{props.cep}</small>
        </p>
        <p>
          n.º residência: <small>{props.number}</small>
        </p>
        <p>
          Residentes: <small>{props.value}</small>
        </p>
        <a
          target="_blank"
          href={`https://maps.google.com/?q=${props.latitude},${props.longitude}`}
        >
          Ver no google maps
          <ArrowUpRightSquare style={{ marginLeft: 5 }} />
        </a>
      </Content>
    </Container>
  );
}

CardResidence.propTypes = {
  cep: PropTypes.string,
  number: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  value: PropTypes.number,
};
