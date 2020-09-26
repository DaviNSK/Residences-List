import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';

import CardResidence from '../../components/Residences/CardResidence';
import Register from '../../components/Residences/Register';

import { Container, CardsList, RegisterForm } from './styles';

import Repository from './../../services/repository';
import * as ResidencesActions from '../../store/modules/residences/actions';

export default function Home() {
  const api = new Repository();
  const dispatch = useDispatch();
  const residences = useSelector((state) => state.residences);
  const [loading, setLoading] = useState(true);

  const getResidence = async () => {
    setLoading(true);
    try {
      const response = await api.getResidence();

      setTimeout(() => {
        setLoading(false);
        dispatch(ResidencesActions.setResidences(response.data));
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const postResidence = async (data) => {
    data.id = uuidv4();
    data.latitude = Number(data.latitude);
    data.longitude = Number(data.longitude);
    data.value = Number(data.value);

    try {
      const response = await api.postResidence(data);

      console.log(response);
      getResidence();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResidence();
  }, []);

  return (
    <>
      <Container>
        <div className="test">
          {residences.map((element) => (
            <CardsList key={element.id}>
              <CardResidence {...element} />
            </CardsList>
          ))}
        </div>

        <RegisterForm>
          <Register send={(data) => postResidence(data)} loading={loading} />
        </RegisterForm>
      </Container>
    </>
  );
}
