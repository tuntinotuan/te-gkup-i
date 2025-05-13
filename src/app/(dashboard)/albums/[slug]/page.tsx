import ClientComponent from "./ClientComponent";

export default async function AlbumPage({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.slug}`
  );
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${params.slug}`
  );
  const resAlbum = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.slug}`
  );
  const user = await res.json();
  const photos = await response.json();
  const album = await resAlbum.json();
  console.log(`user with id ${params.slug}`, user);
  console.log(`photos with id ${params.slug}`, photos);
  console.log(`album with id ${params.slug}`, album);
  return (
    <ClientComponent
      userData={user}
      photoData={photos.slice(0, 10)}
      album={album}
    ></ClientComponent>
  );
}
