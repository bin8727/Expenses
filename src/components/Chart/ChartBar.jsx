import { styled } from 'styled-components';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <Container>
      <Wrapper>
        <BackgroundFill style={{height: barFillHeight}} />
      </Wrapper>
      <Label>{props.label}</Label>
    </Container>
  );
};

export default ChartBar;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f4;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BackgroundFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all .3s ease-in-out;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: .5rem;
  text-align: center;
`;