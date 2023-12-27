import UserUpdateForm from "@/components/user/UserUpdateForm";
import { useSingleUser } from "@/hooks/useSingleUser";

const UpdateUser = async ({ params }: { params: { id: number } }) => {
  const { user } = await useSingleUser(params.id);

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">update user</h1>
      <UserUpdateForm user={user} />
    </div>
  );
};

export default UpdateUser;
