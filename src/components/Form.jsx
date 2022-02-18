import { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDifference } from '../helpers/getYearDifference';
import { increaseAccordingBrand } from '../helpers/increaseAccordingBrand';
import { increaseAccordingPlan } from '../helpers/increaseAccordingPlan';

/* Styles */
const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  appearance: none;
  border: 1px solid #e1e1e1;
  display: block;
  padding: 1rem;
  width: 100%;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 2rem;
  padding: 1rem;
  text-transform: uppercase;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: #d63d32;
  color: #fff;
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;
  width: 100%;
`;

const initialForm = {
  brand: '',
  plan: '',
  year: '',
};

const Form = ({ setResume }) => {
  const [quote, setQuote] = useState(initialForm);
  const [error, setError] = useState(false);

  //Extraer valores del state
  const { brand, plan, year } = quote;

  //Leer datos del formulario
  const handleChange = e =>
    setQuote({
      ...quote,
      [e.target.name]: e.target.value,
    });

  //Cotizar el vehiculo
  const quoteVehicle = e => {
    e.preventDefault();

    //Iteramos cada llave y checamos el valor
    for (const key in quote) {
      if (quote[key].trim() === '') {
        setError(true);
        return;
      }
    }

    //Todos los campos correctos
    setError(false);

    //Base de cotización 2000
    let result = 2000;

    //Obtener la diferencia de años
    const yearDifference = getYearDifference(year);

    //Por cada año de diferencia restamos el 3%
    result -= (yearDifference * 3 * result) / 100;

    //Incremento acorde a la marca
    result = increaseAccordingBrand(brand) * result;

    //Incremento acorde al plan
    result = parseFloat(increaseAccordingPlan(plan) * result).toFixed(2);

    setResume({
      result,
      data: quote,
    });
  };

  return (
    <form onSubmit={quoteVehicle}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}

      <Field>
        <Label htmlFor='vehicle-brand'>Modelo</Label>
        <Select
          name='brand'
          id='vehicle-brand'
          defaultValue={brand}
          onChange={handleChange}>
          <option value='' disabled hidden>
            Seleccione un modelo
          </option>
          <option value='americano'>Americano</option>
          <option value='europeo'>Europeo</option>
          <option value='asiatico'>Asiatico</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor='vehicle-year'>Año</Label>
        <Select
          name='year'
          id='vehicle-year'
          defaultValue={year}
          onChange={handleChange}>
          <option value='' disabled hidden>
            Seleccione un año
          </option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
          <option value='2011'>2011</option>
          <option value='2010'>2010</option>
          <option value='2009'>2009</option>
          <option value='2008'>2008</option>
          <option value='2007'>2007</option>
          <option value='2006'>2006</option>
          <option value='2005'>2005</option>
        </Select>
      </Field>
      <Field>
        <Label htmlFor='basic-plan'>Plan</Label>

        <InputRadio
          type='radio'
          name='plan'
          id='basic-plan'
          value='básico'
          checked={plan === 'básico'}
          onChange={handleChange}
        />
        <Label htmlFor='basic-plan'>Básico</Label>

        <InputRadio
          type='radio'
          name='plan'
          id='complete-plan'
          value='completo'
          checked={plan === 'completo'}
          onChange={handleChange}
        />
        <Label htmlFor='complete-plan'>Completo</Label>
      </Field>

      <Button type='submit'>Cotizar</Button>
    </form>
  );
};

export default Form;
