import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../initialData/user.json';
import data from '../initialData/data.json';
import friends from '../initialData/friends.json';
import transactions from '../initialData/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '60px 15px',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} /> 
      
      <TransactionHistory items={transactions} />
      
    </div>
  );
};
