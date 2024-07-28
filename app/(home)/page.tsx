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
  return (
    <main>
    </main>
  );
}
