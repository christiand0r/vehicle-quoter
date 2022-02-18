import { useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import Header from './components/Header';
import Resume from './components/Resume';
import Result from './components/Result';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const initialResume = {
  result: 0,
  data: {
    brand: '',
    plan: '',
    year: '',
  },
};

function App() {
  const [resume, setResume] = useState(initialResume);

  //Extraemos data
  const { result, data } = resume;

  return (
    <Container>
      <Header title='Cotizador de Seguros' />

      <FormContainer>
        <Form setResume={setResume}></Form>
        <Resume data={data} />
        <Result result={result} />
      </FormContainer>
    </Container>
  );
}

export default App;
