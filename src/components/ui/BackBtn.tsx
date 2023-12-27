"use client";

import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="bg-green-600 py-1 px-2 rounded cursor-pointer">
      go back
    </button>
  );
};

export default BackBtn;
