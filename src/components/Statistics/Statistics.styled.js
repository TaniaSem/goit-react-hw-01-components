import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatBox = styled.section`
  width: 350px;
  background-color: #eee;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Title = styled.h2`
  padding: 30px;
  text-align: center;
  color: #686565;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #80808054;
  border-top: 2px solid #80808054;
  width: 90px;
  padding: 10px 0;
  background-color: ${props => {
    switch (props.type) {
      case '.docx':
        return getRandomHexColor();
      case '.pdf':
        return getRandomHexColor();
      case '.mp3':
        return getRandomHexColor();
      case '.psd':
        return getRandomHexColor();
      default:
        return '#eee';
    }
  }};
  gap: 8px;

  :last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
