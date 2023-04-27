import styled from '@emotion/styled';

export const Table = styled.table`
  width: 800px;
  margin: 0px auto;
  border-spacing: 0px;
  border-collapse: collapse;
  box-shadow: 0px 2px 5px #a5a4a4;
`;

export const TableHead = styled.thead`
  height: 50px;
  background-color: #00bcd5;
  color: #ffffff;
  > tr > th:not(:last-child) {
    border-right: 2px solid #e4e4e4;
  }
`;

export const TableBody = styled.tbody`
  > tr {
    height: 40px;

    :nth-child(2n) {
      background-color: #f3f6f9;
    }

    > td:not(:last-child) {
      border-right: 2px solid #e4e4e4;
    }
  }
`;
