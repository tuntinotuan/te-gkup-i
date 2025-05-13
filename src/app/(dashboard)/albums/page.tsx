import { Suspense } from "react";
import AlbumsClient from "./modules/AlbumsClient";

export default async function AlbumPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();
  console.log("albums data", albums);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AlbumsClient data={albums} />;
    </Suspense>
  );
}
