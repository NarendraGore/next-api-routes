import Link from "next/link";


export async function getUsers(){
    const users = await fetch("http://localhost:3000/api/user");
    const userList = await users.json();
    return userList;
}

interface Items{
    id: number;
    name: string;
    age: number;
    city: string;   
}

async function Users(){
    const data = await getUsers();
    // console.log("Data from API", data);
    return(
        <div>
            <h1>Users List</h1>
           {data.map((item:Items)=>(
            <Link key={item.id} href={`/users/${item.id}`}><h2>{item.name}</h2></Link>
           ))}
        </div>
    )
}
export default Users;