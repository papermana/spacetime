const getAvatar = () => {
  const id = Math.floor(Math.random() * 100);
  const gender = Math.random() < 0.5 ? 'men' : 'women';

  return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
};

export default getAvatar;
