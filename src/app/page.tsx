"use client";
import { useUserStore } from "@/store/user-store";

export default function Home() {
  const { user, update } = useUserStore();
  const bear = useUserStore((state) => state.bear);
  const increaseBear = useUserStore((state) => state.increaseBear);
  const removeBear = useUserStore((state) => state.removeBear);
  function updateUser() {
    update({
      _id: "1212121212",
      name: "Atif Ali",
      email: "atif276ali@gmail.com",
      phoneNo: 12121,
    });
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Zustand State Management</h1>
      <p>Username:{user?.name}</p>
      <p>Email:{user?.email}</p>
      <p>Phone No:{user?.phoneNo}</p>
      <button onClick={updateUser}>Update User</button>
      <h1>Bear</h1>
      <p>{bear}</p>
      <button onClick={increaseBear}>Increase bear</button>
      <button onClick={removeBear}>Remove bear</button>
    </main>
  );
}
