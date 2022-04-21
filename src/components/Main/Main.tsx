import Card from "./Card/Card";
import * as S from "./styled";

const Main = () => {
  return (
    <S.Container>
      <S.GridContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </S.GridContainer>
    </S.Container>
  );
};

export default Main;
