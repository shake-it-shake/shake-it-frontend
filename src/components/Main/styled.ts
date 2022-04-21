import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding-top: 50px;
` 

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 60px;
  width: 100%;
`