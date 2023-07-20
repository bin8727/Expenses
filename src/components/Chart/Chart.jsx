import { styled } from 'styled-components';

import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <Container>
      {props.dataPoints.map(dataPoint => (
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMaximum} 
          label={dataPoint.label}
        />
      ))}
    </Container>
  );
};

export default Chart

const Container = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;