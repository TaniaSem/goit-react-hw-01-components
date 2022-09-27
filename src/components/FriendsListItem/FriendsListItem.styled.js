import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 10px;
  /* width: 100%; */
  height: 70px;
  border-radius: 6px;
  padding: 10px 20px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-shadow: 0px 0px 5px rgba(33, 33, 33, 0.2);
  background-color: #fff;
`;

export const Status = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: ${props => {
    if (props.type === true) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const Avatar = styled.img`
  display: block;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #212121;
`;
