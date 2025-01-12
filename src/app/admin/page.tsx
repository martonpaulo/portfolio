"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://directus.martonpaulo.com");
  }, [router]);

  return <Loader />;
};

export default AdminPage;
