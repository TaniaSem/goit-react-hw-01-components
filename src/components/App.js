import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} title="Upload stats" />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
