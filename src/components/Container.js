import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 130vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  background-color: 'black';
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
