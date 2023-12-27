"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const inputStyles = `w-full p-3 border rounded text-black`;

const UserUpdateForm = ({ user }: { user: User }) => {
  const [userData, setUserData] = useState(user);
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
      const res = await fetch(`http://localhost:3000/api/users/${user?.id}`, {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.message === "Success") {
        toast.success("User updated successfully!", { id: "1" });
        router.replace("/");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            name="name"
            onChange={inputChangeHandler}
            defaultValue={user?.name || ""}
            className={inputStyles}
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            name="email"
            onChange={inputChangeHandler}
            defaultValue={user?.email || ""}
            className={inputStyles}
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            onChange={inputChangeHandler}
            defaultValue={user?.password || ""}
            name="password"
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
    </>
  );
};

export default UserUpdateForm;
