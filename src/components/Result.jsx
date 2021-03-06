import { useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultQuote = styled.div`
  background-color: rgb(127, 224, 237);
  border: 1px solid #26c6da;
  margin-top: 1rem;
  padding: 0.5rem;
  position: relative;
  text-align: center;
`;

const TextQuote = styled.p`
  color: #00838f;
  font-weight: bold;
  margin: 0;
  padding: 1rem;
  text-transform: uppercase;
`;

const Result = ({ result }) => {
  const refTextQuote = useRef();

  return result === 0 ? (
    <Message>Elige marca, año y tipo de seguro</Message>
  ) : (
    <ResultQuote>
      <TransitionGroup className='result'>
        <CSSTransition
          key={result}
          nodeRef={refTextQuote}
          classNames='result'
          timeout={{ enter: 500, exit: 500 }}>
          <TextQuote ref={refTextQuote}>Total a pagar: $${result}</TextQuote>
        </CSSTransition>
      </TransitionGroup>
    </ResultQuote>
  );
};

Result.propTypes = {
  result: PropTypes.number.isRequired,
};

export default Result;
