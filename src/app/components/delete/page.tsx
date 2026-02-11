'use client';

export default function DeleteUser(props: { id: number }) {

    const id = props.id;

    const deleteUser = async () => {
        const response = await fetch('http://localhost:3000/api/user/' + id, {
            method: 'DELETE',
        },);
        const result = await response.json();
        console.log("Delete response", result);
        if(result.success){
            alert("User Deleted Successfully!");
        }else{
            alert("Failed to delete user.");
        }
    }

    return(
             
        <button  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-semibold shadow hover:opacity-90 transition mr-0"
        onClick={deleteUser}>Delete User</button>
    )
}
    