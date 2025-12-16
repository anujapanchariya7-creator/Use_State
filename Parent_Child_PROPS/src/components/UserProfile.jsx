import UserInfo from "./UserInfo";

function UserProfile() {
  const userName = "Anuja";
  const userAge = 22;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}

export default UserProfile;
