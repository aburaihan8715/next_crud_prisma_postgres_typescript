"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const initialUserData = { name: "", email: "", password: "" };
const inputStyles = `w-full p-3 border rounded text-black`;

const AddUser = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [error, setError] = useState("");
  const router = useRouter();

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!userData.name || !userData.email || !userData.password) return setError("Input should not be empty ☹!");

    try {
      toast.loading("Sending Request 🚀", { id: "1" });
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.message === "Success") {
        toast.success("User created successfully!", { id: "1" });
        router.replace("/");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }

    setUserData(initialUserData);
  };

  return (
    <>
      <Toaster />
      <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
        <h1 className="text-center text-3xl font-medium uppercase">add user</h1>
        <form onSubmit={submitHandler} className="space-y-3">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input name="name" value={userData.name} onChange={inputChangeHandler} className={inputStyles} type="text" placeholder="Enter name" />
          </div>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input name="email" value={userData.email} onChange={inputChangeHandler} className={inputStyles} type="email" placeholder="Enter email" />
          </div>

          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              name="password"
              value={userData.password}
              onChange={inputChangeHandler}
              className={inputStyles}
              type="password"
              placeholder="Enter password"
            />
          </div>

          {error && <div className="text-xs bg-red-500 rounded px-1 py-1 max-w-fit">{error}</div>}

          <div>
            <button className="c-btn bg-green-600 w-full p-3" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
