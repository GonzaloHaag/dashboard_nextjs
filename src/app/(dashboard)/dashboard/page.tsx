import { auth } from "@/auth.config";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard"
  };
export default async function DashboardPage() {
  const session = await auth();
  console.log(session?.user)
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}