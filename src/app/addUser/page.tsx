"use client";

const AddUser = () => {
  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">add user</h1>
      <form className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input className="w-full p-3 border rounded text-black" type="text" placeholder="Enter name" required />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input className="w-full p-3 border rounded text-black" type="email" placeholder="Enter email" required />
        </div>

        <div className="flex flex-col gap-1">
          <label>Age</label>
          <input className="w-full p-3 border rounded appearance-none text-black" type="number" placeholder="Enter age" required />
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
