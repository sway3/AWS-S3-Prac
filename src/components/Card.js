import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 15px 10px;
  padding: 0;
  border-radius: 7px;
  background-color: grey;
  grid-row-end: ${(props) =>
    props.size === 'small'
      ? 'span 20'
      : props.size === 'medium'
      ? 'span 28'
      : 'span 33'};
`;

const Card = ({ children, size }) => {
  return <StyledCard size={size}>{children}</StyledCard>;
};

export default Card;
