import { Section } from './Section/Section';
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
    <>
      <Section title={"Task 1 - Social network profile"}>
        <Profile
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"Task 2- Statistics Section"}>
        <Statistics title="Upload stats" stats={data}/>
      </Section>

      <Section title={"Task 3 - Friends list"}>
        <FriendList friends={friends}/> 
      </Section>

      <Section title={"Task 4 - Transaction History"}>
        <TransactionHistory items={transactions}/>
      </Section>
    </>
  );
};
