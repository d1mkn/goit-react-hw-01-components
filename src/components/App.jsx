import { TastTitle } from 'components/TaskTitle/TaskTitle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div>
      <div>
        <TastTitle text={'User Profile'} />
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <div>
        <TastTitle text={'Friend List'} />
        <FriendList friends={friends} />
      </div>
      <div>
        <TastTitle text={'Transaction History'} />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
