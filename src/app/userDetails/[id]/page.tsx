import BackBtn from "@/components/ui/BackBtn";
import { useSingleUser } from "@/hooks/useSingleUser";

const UserDetails = async ({ params }: { params: { id: number } }) => {
  const { user } = await useSingleUser(params.id);
  return (
    <div className="shadow-md shadow-white mt-10 text-center p-5 rounded space-y-2">
      <BackBtn />
      <h2 className="text-2xl font-medium uppercase">{user?.name}</h2>
      <p className="lowercase">{user?.email}</p>
    </div>
  );
};

export default UserDetails;
