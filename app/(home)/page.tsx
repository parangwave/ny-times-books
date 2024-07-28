import Link from "next/link";
import { API_URL } from "../constants";
import styles from "../styles/genres.module.css";

export const metadata = {
  title: "Home",
};

async function getGenres() {
  return fetch(`${API_URL}s`)
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
        <ul className={styles.genres}>
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
