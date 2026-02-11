"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function UpdateUserForm({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {
  const { userid } = React.use(params);
  console.log("User ID from URL", userid);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const getUserDetails = async () => {
      const data = await fetch(`http://localhost:3000/api/user/${userid}`);
      const userDetails = await data.json();
      console.log("User details for update", userDetails);
      setName(userDetails.result.name);
      setAge(userDetails.result.age);
      setCity(userDetails.result.city);
    };
    getUserDetails();
  }, [userid]);

  const updateUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:3000/api/user/${userid}`, {
      method: "PUT",
      body: JSON.stringify({ name: name, age: age, city: city }),
    });
    const result = await response.json();
    console.log("Update response", result);

    if (result.success) {
      confirm("User updated successfully!");
      router.push("/users/" + userid);
    } else {
      alert("Failed to update user.");
    }
  };

  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <form
        onSubmit={updateUser}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Update User
        </h2>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name || ""}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Age
          </label>
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
            value={age || ""}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 rounded-xl font-semibold hover:opacity-90 transition duration-200 shadow-md"
        >
          Update User
        </button>
      </form>
    </div>
  );
}
