"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://directus.martonpaulo.com");
  }, [router]);

  return (
    <section className="section is-medium">
      <progress className="progress is-medium is-primary" max="100" />
    </section>
  );
};

export default AdminPage;
