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
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 p-6">
  

  <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border">
    
  
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
        {userid}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-4">
        {data.name}
      </h2>

      <p className="text-gray-500 text-sm">
        User ID: {userid}
      </p>
    </div>

    <div className="border-t my-6"></div>

   
    <div className="space-y-4 text-gray-700">
      
      <div className="flex justify-between bg-gray-50 p-3 rounded-xl">
        <span className="font-semibold">Age</span>
        <span>{data.age}</span>
      </div>

      <div className="flex justify-between bg-gray-50 p-3 rounded-xl">
        <span className="font-semibold">City</span>
        <span>{data.city}</span>
      </div>

    </div>

  </div>
</div>
);
}
export default UserDetails;
