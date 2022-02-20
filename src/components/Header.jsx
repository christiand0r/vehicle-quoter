import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContainerHeader = styled.header`
  background-color: #26c6da;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const TextHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <TextHeader>{title}</TextHeader>
    </ContainerHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
