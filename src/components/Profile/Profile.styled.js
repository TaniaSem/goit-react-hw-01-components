import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 270px;
  background-color: #eee;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 100px;
  heigth: auto;
  border-radius: 50%;
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const UserName = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

export const InfoText = styled.p`
  margin-bottom: 10px;

  font-size: 16px;
  font-weight: 400;
  color: #736f6f;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin-top: 20px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #80808054;
  border-top: 1px solid #80808054;
  width: 90px;
  padding: 10px 0;
  background-color: #dad8d8;
  border-radius: 0 0 4px 4px;

  :last-child {
    border-right: none;
    border-radius: 0 0 4px 0;
  }
  :first-child {
    border-radius: 0 0 0 4px;
  }
`;

export const StatLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const StatQuantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
