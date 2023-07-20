import { styled } from "styled-components";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
  if (props.items.length === 0) {
    return<Fallback>Found no expenses.</Fallback>
  }

  return (
    <Container>
      {props.items.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} 
        />
      ))}
    </Container>
  );
};

export default ExpensesList;

const Container = styled.ul`
  list-style: none;
  padding: 0;
`;

const Fallback = styled.h2`
  color: white;
  text-align: center;
`;