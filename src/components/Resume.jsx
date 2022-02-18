import styled from '@emotion/styled';
import { firstLetterCapitalize } from '../helpers/firstLetterCapitalize';

const ResumeContainer = styled.div`
  background-color: #005d54;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Resume = ({ data }) => {
  // Si algun valor viene vacío retornamos para evitar cargar el componente
  for (const key in data) {
    if (data[key] === '') return null;
  }

  //Extraemos valores de data
  const { brand, plan, year } = data;

  return (
    <ResumeContainer>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca del Vehiculo: {firstLetterCapitalize(brand)}</li>
        <li>Año del Vehiculo: {year}</li>
        <li>Plan Seleccionado: {firstLetterCapitalize(plan)}</li>
      </ul>
    </ResumeContainer>
  );
};

export default Resume;
