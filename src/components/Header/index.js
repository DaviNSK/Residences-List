import React, { useState } from 'react';

import { FaLinkedinIn, FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';

import { Container, HeaderTop, HeaderBottom } from './styles';
import HeatMap from '../HeatMap';

export default function Header() {
  const [modalEdit, setModalEdit] = useState(false);

  const openModal = () => {
    setModalEdit(true);
  };

  return (
    <>
      <Container>
        <HeaderTop>
          <h1>Davi Cardoso</h1>
          <div className="icons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/davi-cardoso-5775521a0/"
            >
              <FaLinkedinIn />
            </a>
            <a target="_blank" href="https://github.com/DaviNSK">
              <AiOutlineGithub />
            </a>

            <a target="_blank" href="https://www.instagram.com/davvicard/">
              <AiOutlineInstagram />
            </a>
          </div>
        </HeaderTop>

        <HeaderBottom>
          <div onClick={() => openModal()}>
            <p>Heat Map</p>
            <FaMapMarkedAlt />
          </div>
        </HeaderBottom>
      </Container>
      {modalEdit && (
        <HeatMap show={modalEdit} close={() => setModalEdit(false)} />
      )}
    </>
  );
}
