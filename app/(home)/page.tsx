import Link from "next/link";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getGenres() {
  return fetch(API_URL)
    .then((resp) => resp.json())
    .catch((error) => console.error(error));
}

export default async function Home() {
  const resp = await getGenres();
  const isStatusOk = resp.status === "OK";
  const genres = resp.results;

  return (
    <main>
      {isStatusOk ? (
        <ul>
          {genres.map((genre) => (
            <li key={genre.list_name}>
              <Link href={`/list/${genre.list_name_encoded}`}>
                {genre.display_name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h1>API is not OK</h1>
        </div>
      )}
    </main>
  );
}
