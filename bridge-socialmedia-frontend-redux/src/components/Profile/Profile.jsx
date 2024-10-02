// import { useSelector } from 'react-redux'

// const Profile = () => {
// const { user } = useSelector((state) => state.auth)

//  return (
//    <>
//      <h1>Profile</h1>
//      <p>{user.name}</p>
//      <p>{user.email}</p>
// 	<img src={`http://localhost:3000/${user.user_img}`} alt='' />
//    </>
//  )
// }

// export default Profile

import { useSelector } from 'react-redux';

const Profile = () => {
  const { user, isLoading, isError, message } = useSelector((state) => state.auth);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {message}</p>;
  }

  return (
    <>
      <h1>Profile</h1>
      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {/* <img src={`http://localhost:3000/${user.user_img}`} alt='' /> */}
        </>
      ) : (
        <p>No user data available</p>
      )}
    </>
  );
};

export default Profile;