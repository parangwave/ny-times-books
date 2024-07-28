import { API_URL } from "../../../constants";
import styles from "../../../styles/books.module.css";
import Book from "../../../components/book";

type IParams = {
  params: { id: string };
};

async function getBooks(id: string) {
  return fetch(`${API_URL}?name=${id}`)
    .then((resp) => resp.json())
    .catch((error) => console.error(error));
}

export async function generateMetadata({ params: { id } }: IParams) {
  return {
    title: id,
  };
}

export default async function BookList({ params: { id } }: IParams) {
  const resp = await getBooks(id);
  const isStatusOk = resp.status === "OK";
  const books = resp.results.books;

  return (
    <main>
      {isStatusOk ? (
        <ul className={styles.books}>
          {books.map((book) => (
            <Book
              key={book.primary_isbn10}
              imageSrc={book.book_image}
              title={book.title}
              author={book.author}
              amazonUrl={book.amazon_product_url}
            />
          ))}
        </ul>
      ) : (
        <div>
          <h1>API is not OK</h1>
        </div>
      )}
      {/* <ul><Suspense fallback={<h1>loading..</h1>}>{id}</Suspense></ul> */}
    </main>
  );
}
