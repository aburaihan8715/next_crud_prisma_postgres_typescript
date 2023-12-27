import UserDeleteBtn from "@/components/user/UserDeleteBtn";
import Link from "next/link";

async function fetchUsers() {
  const res = await fetch("http://localhost:3000/api/users", { cache: "no-store" });
  const data = await res.json();
  return data.users;
}

export default async function Home() {
  const users = await fetchUsers();
  // console.log(users);
  return (
    <main>
      <ul className="my-6 flex flex-col gap-4">
        {users?.map((user: User) => (
          <li key={user.id} className="border py-6 px-4 flex justify-between rounded">
            <div>
              <h2 className="text-2xl font-medium uppercase">{user.name}</h2>
              <p className="lowercase">{user.email}</p>
            </div>
            <div className="flex gap-2 items-start">
              <UserDeleteBtn id={user.id} />
              <Link href={`/updateUser/${user.id}`}>
                <button className="c-btn bg-green-600">update</button>
              </Link>

              <Link href={`/userDetails/${user.id}`}>
                <button className="c-btn bg-blue-600">details</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
