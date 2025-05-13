"use client";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/albums?pageSize=10&current=1");
  // useEffect(() => {
  //   const width = window.innerWidth;
  //   // update state safely
  // }, []);
  return (
    <div className="h-full">
      <h1>Hello</h1>
    </div>
  );
}
