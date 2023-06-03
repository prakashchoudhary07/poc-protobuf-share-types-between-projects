import {User} from '../types/sample';
function getSampleUser(id: string): User {
  const user: User = {
    id,
    name: 'prakash',
    userId: 'prakash',
    address: {
      city: 'bangalore',
      state: 'ka',
      country: 'india',
    },
    profile: {
      image: 'imgURL',
      someArray: ['S', 's'],
    },
    roles: {
      active: true,
      member: false,
    },
  };
  return user;
}

export default getSampleUser;
