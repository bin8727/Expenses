import { useState } from 'react';
import { styled } from 'styled-components';

import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredYear, setFileteredYear] = useState("2020");

  const filterChangeHandler = selectedYear => {
    setFileteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Container>
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses} />
      </Container>
    </div>
  );
}

export default Expenses;

const Container = styled(Card)`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`;