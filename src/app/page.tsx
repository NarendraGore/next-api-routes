"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      
      <nav className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
         
          <h1 className="text-2xl font-bold text-indigo-600">
            User API Dashboard
          </h1>

          
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 font-semibold hover:text-indigo-600 transition"
            >
              Home
            </Link>

            <Link
              href="/users"
              className="text-gray-700 font-semibold hover:text-indigo-600 transition"
            >
              Users
            </Link>

            <Link
              href="/adduser"
              className="text-gray-700 font-semibold hover:text-indigo-600 transition"
            >
              Add User
            </Link>

            <Link
              href="/api/user"
              className="text-gray-700 font-semibold hover:text-indigo-600 transition"
            >
              API Test
            </Link>
          </div>
        </div>
      </nav>

     
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          User Management API Practice
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Practice building full CRUD operations using Next.js API Routes. 
          Add users, update details, delete records, and explore dynamic routing.
        </p>

       
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/adduser"
            className="px-6 py-3 bg-gradient-to from-indigo-500 to-blue-600 text-white rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            Add New User
          </Link>

          <Link
            href="/users"
            className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            View Users
          </Link>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Create Users
          </h3>
          <p className="text-gray-500 text-sm">
            Add new users using POST API requests and form handling.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Update Records
          </h3>
          <p className="text-gray-500 text-sm">
            Edit existing users dynamically with PUT API routes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Delete & Fetch
          </h3>
          <p className="text-gray-500 text-sm">
            Practice DELETE and GET APIs with real-time UI updates.
          </p>
        </div>
      </div>
    </div>
  );
}