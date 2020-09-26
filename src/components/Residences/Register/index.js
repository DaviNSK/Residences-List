/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import Repository from '../../../services/repository';
import * as StatesActions from '../../../store/modules/states/actions';

import { Container, Form, Fields, LatLong, Button } from './styles';

export default function CardResidence({ send, loading }) {
  const api = new Repository();
  const dispatch = useDispatch();
  const states = useSelector((state) => state.states);
  const { register, handleSubmit, errors } = useForm();

  const submit = (data) => send(data);
  const getState = async () => {
    try {
      const response = await api.getState();
      dispatch(StatesActions.setStates(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getState();
  }, []);

  return (
    <Container>
      <h1>Cadastrar residência</h1>

      <Form onSubmit={handleSubmit(submit)}>
        <Fields>
          <label>CEP*</label>
          <input
            type="string"
            name="cep"
            ref={register({
              required: 'Enter the postal code',
              pattern: {
                message: 'Enter the postal codes',
              },
            })}
            placeholder="CEP"
          />
          {errors.cep && <small className="error">{errors.cep.message}</small>}
        </Fields>

        <Fields>
          <label>Estado*</label>
          <select
            ref={register({
              required: 'Select a state',
              pattern: {
                message: 'Select a state',
              },
            })}
            name="state"
          >
            {states.map((element) => (
              <option key={element.value} value={element.value}>
                {element.name}
              </option>
            ))}
          </select>

          {errors.state && (
            <small className="error">{errors.state.message}</small>
          )}
        </Fields>

        <Fields>
          <label>Número da residência*</label>
          <input
            ref={register({
              required: 'Enter the house number',
              pattern: {
                message: 'Enter the house number',
              },
            })}
            type="string"
            name="number"
            placeholder="Número da residência"
          />
          {errors.number && (
            <small className="error">{errors.number.message}</small>
          )}
        </Fields>

        <Fields>
          <label>Quantidade de residentes*</label>
          <input
            ref={register({
              required: 'Enter the number of residents',
              pattern: {
                value: 4,
                message: 'Enter the number of residents',
              },
            })}
            type="number"
            name="value"
            placeholder="Quantidade de residentes"
          />
          {errors.value && (
            <small className="error">{errors.value.message}</small>
          )}
        </Fields>

        <LatLong>
          <div>
            <label>Latitude*</label>
            <input
              ref={register({
                required: 'Required field',
                pattern: {
                  message: 'Required field',
                },
              })}
              type="string"
              name="latitude"
              placeholder="Latitude"
            />
            {errors.latitude && (
              <small className="error">{errors.latitude.message}</small>
            )}
          </div>
          <div>
            <label>Longitude*</label>
            <input
              ref={register({
                required: 'Required field',
                pattern: {
                  message: 'Required field',
                },
              })}
              type="string"
              name="longitude"
              placeholder="Longitude"
            />
            {errors.longitude && (
              <small className="error">{errors.longitude.message}</small>
            )}
          </div>
        </LatLong>

        <Button type="submit">
          {loading && (
            <>
              <FaSpinner className="spinner" />
            </>
          )}
          {!loading && 'Cadastrar'}
        </Button>
      </Form>
    </Container>
  );
}

CardResidence.propTypes = {
  send: PropTypes.func,
  loading: PropTypes.any,
};
