export async function getUser(id: number) {
  const userdata = await fetch(`http://localhost:3000/api/user/${id}`);
  const userDetails = await userdata.json();
  return userDetails.result;
}

async function UserDetails({ params }: { params: { userid: number } }) {
  // const data = await getUser();
  // console.log("Data from API user", data);

  const { userid } = await params;
//   console.log("User ID from URL", userid);

  const data = await getUser(userid);
//   console.log("Data from API user", data);
  return (
    <div>
      <div>User Details for ID: {userid}</div>
      <div>Name: {data.name}</div>
      <div>Age: {data.age}</div>
      <div>City: {data.city}</div>
    </div>
  );
}
export default UserDetails;
