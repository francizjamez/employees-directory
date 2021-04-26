const User = ({ userData }) => {
  let { name, email, picture } = userData;

  return (
    <div className="user">
      <img src={picture.medium} alt="" />
      <div className="info">
        <p>{`${name.title} ${name.first} ${name.last}`}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default User;
