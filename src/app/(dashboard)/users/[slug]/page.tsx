import ClientComponent from "./ClientComponent";

export default async function AlbumPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.slug}`
  );
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${params.slug}`
  );
  const user = await res.json();
  const albums = await response.json();
  console.log(`user with id ${params.slug}`, user);
  console.log(`albums with id ${params.slug}`, albums);
  return (
    <ClientComponent
      userData={user}
      albumData={albums.slice(0, 10)}
    ></ClientComponent>
  );
}
