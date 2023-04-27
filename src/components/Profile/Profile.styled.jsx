import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 280px;
  margin: 0px auto;
  background-color: #ffffff;
  border: 2px solid #d0dae6;
  border-radius: 10px;
`;

export const UserDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const UserImg = styled.img`
  width: 80%;
  margin: 10px;
  border-radius: 100%;
  border: 1px solid #d0dae6;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const UserStats = styled.ul`
  height: 80px;
  padding: 0;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f3f6f9;
  width: initial;
  border-top: 1px solid #d0dae6;
  border-radius: 0 0 10px 10px;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% / 3);
  height: 100%;
  :not(:last-child) {
    border-right: 1px solid #d0dae6;
  }
`;
