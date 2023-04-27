import styled from '@emotion/styled';

export const Section = styled.section`
  width: 50%;
  margin: 0px auto;
  background-color: #f3f6f9;
`;

export const StatTitle = styled.h2`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0px;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  span {
    padding: 5px;
  }
`;
