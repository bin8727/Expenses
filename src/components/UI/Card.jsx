import { styled } from 'styled-components';

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <Container className={classes}>{props.children}</Container>;
};

export default Card;

const Container = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;