"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/auth", { method: "GET" });
      if (!response.ok) {
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl mb-4">Welcome to the Admin Dashboard</h1>
      <button
        onClick={async () => {
          await fetch("/api/auth", { method: "DELETE" });
          router.push("/login");
        }}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
