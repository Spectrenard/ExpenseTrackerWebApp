import { LoginButton } from "@/auth/LoginButton";
import Balance from "@/components/currentBalance";
import React from "react";
import { getServerSession } from "next-auth/next";
import authConfig from "@/pages/api/auth/[...nextauth]";

const DashboardPage = async () => {
  const session = await getServerSession(authConfig);

  if (session) {
    return <p>{JSON.stringify(session, null, 2)}</p>;
  }

  return (
    <div>
      <LoginButton />
      <Balance />
    </div>
  );
};

export default DashboardPage;
