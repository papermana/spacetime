import faker from 'faker';
import getAvatar from '../api/getAvatar';

const mockUsers = (num = 10) => {
  const users = [];

  for (let i = 0; i < num; i++) {
    users[i] = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      city: faker.address.city(),
      country: faker.address.country(),
      avatar: getAvatar(),
    };
  }

  return users;
};

export default mockUsers;
