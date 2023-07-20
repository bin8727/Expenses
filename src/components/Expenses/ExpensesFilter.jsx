import { styled } from 'styled-components';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <Container>
      <Control>
        <label>Filter by year</label>
        <select 
          value={props.selected} 
          onChange={dropdownChangeHandler}
        >
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </Control>
    </Container>
  );
};

export default ExpensesFilter;

const Container = styled.div`
  color: white;
  padding: 0 1rem;
`;

const Control = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  label {
    font-weight: bold;
    margin-bottom: .5rem;
  }

  select {
    font: inherit;
    padding: .5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }
`;