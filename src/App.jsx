import { useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import Header from './components/Header';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner/Spinner';

//Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

//Initial Object State
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
  const [loading, setLoading] = useState(false);

  //Extract data
  const { result, data } = resume;

  return (
    <Container>
      <Header title='Cotizador de Seguros' />

      <FormContainer>
        <Form setResume={setResume} setLoading={setLoading}></Form>

        {loading ? <Spinner></Spinner> : <Resume data={data} />}

        {!loading ? <Result result={result} /> : null}
      </FormContainer>
    </Container>
  );
}

export default App;
