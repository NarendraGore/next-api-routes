
import Link from "next/link";
import DeleteUser from "../components/delete/page";

export async function getUsers() {
  const users = await fetch("http://localhost:3000/api/user", {
    cache: "no-store",
  });
  const userList = await users.json();
  return userList;
}

interface Items {
  id: number;
  name: string;
  age: number;
  city: string;
}

async function Users() {
  const data = await getUsers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      

      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Users List
        </h1>
        <p className="text-gray-500 mt-2">
          Manage all registered users
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6">
        {data.map((item: Items) => (
          <div
            key={item.id}
            className="
              bg-white shadow-lg rounded-2xl p-6 
              flex items-center justify-between 
              hover:shadow-xl transition duration-300 border
            "
          >
            
      
            <div>
              <Link href={`/users/${item.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  {item.name}
                </h2>
              </Link>

              <p className="text-gray-500 text-sm mt-1">
                Age: {item.age} • City: {item.city}
              </p>
            </div>

       
            <div className="flex items-center gap-3">
              
         
              <Link
                href={`/users/${item.id}/update`}
                className="
                  px-4 py-2 
                  bg-gradient-to-r from-blue-500 to-purple-600 
                  text-white rounded-xl text-sm font-semibold 
                  shadow hover:opacity-90 transition
                "
              >
                Edit
              </Link>

              <DeleteUser id={item.id} />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
