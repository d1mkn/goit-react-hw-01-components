import { TastTitle } from 'components/TaskTitle/TaskTitle';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { MainContainer, Container } from './App.styled';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <MainContainer>
      <Container>
        <TastTitle text={'User Profile'} />
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data} />
      </Container>
      <Container>
        <Statistics stats={data} />
      </Container>
      <Container>
        <TastTitle text={'Friend List'} />
        <FriendList friends={friends}></FriendList>
      </Container>
      <Container>
        <TastTitle text={'Transaction History'} />
        <TransactionHistory items={transactions} />
      </Container>
    </MainContainer>
  );
};
