import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 800px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.th`
  padding: 16px 0;
  font-size: 20px;
  text-align: center;
  color: #fff;
  background-color: blue;
`;

export const TableString = styled.tr`
  background-color: #fff;
  :nth-child(2n) {
    background-color: #ecf1f4;
  }
`;
export const TableData = styled.td`
  padding: 16px 0;
  text-align: center;
  box-shadow: 0px 0px 5px #d3d3d3;
  color: #838383;
`;
