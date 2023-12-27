"use client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const UserDeleteBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  const useDeleteHandler = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.message === "Success") {
        await Swal.fire({
          text: "User has been deleted.",
          icon: "success",
          position: "center",
        });
        router.refresh();
      }
    }
  };
  return (
    <button onClick={useDeleteHandler} className="c-btn bg-red-600">
      delete
    </button>
  );
};

export default UserDeleteBtn;
