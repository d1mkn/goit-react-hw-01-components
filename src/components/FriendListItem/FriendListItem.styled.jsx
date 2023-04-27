import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  height: 90px;
  background-color: #f3f6f9;
  box-shadow: 0 0 5px #555;
`;

export const OnlineStatus = styled.span`
  width: 15px;
  height: 15px;
  margin: 0px 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return '#51AD55';

      case false:
        return '#FD534F';

      default:
        return '#fff';
    }
  }};
`;

export const FriendImg = styled.img`
  width: 75px;
  height: 75px;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const FriendName = styled.p`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;
