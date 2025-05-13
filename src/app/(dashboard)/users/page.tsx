import UsersClient from "./modules/UsersClient";

export default async function UserPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log("users data", users);
  return <UsersClient data={users} />;
}
