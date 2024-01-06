import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="h-24 w-24 object-cover cursor-pointer rounded-full self-center mt-2"
        />
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-green-500 text-white p-3 rounded-lg uppercase hover:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
