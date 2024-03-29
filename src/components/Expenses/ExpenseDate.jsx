import { styled } from 'styled-components';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <Container>
      <Year>{year}</Year>
      <Month>{month}</Month>
      <Day>{day}</Day>
    </Container>
  );
};

export default ExpenseDate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const Year = styled.div`
  font-size: 0.75rem;
`;

const Month = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

const Day = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;