export const useSingleUser = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    if (!res.ok) throw new Error("Not found!");
    return res.json();
  } catch (error) {
    return error;
  }
};
