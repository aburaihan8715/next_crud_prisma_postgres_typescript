"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">add user</h1>
      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            name="name"
            value={userData.name}
            onChange={inputChangeHandler}
            className="w-full p-3 border rounded text-black"
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            name="email"
            value={userData.email}
            onChange={inputChangeHandler}
            className="w-full p-3 border rounded text-black"
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Age</label>
          <input
            name="age"
            value={userData.age}
            onChange={inputChangeHandler}
            className="w-full p-3 border rounded appearance-none text-black"
            type="number"
            placeholder="Enter age"
          />
        </div>

        <div>
          <button className="c-btn bg-green-600 w-full p-3" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
