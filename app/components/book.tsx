import Link from "next/link";
import styles from "../styles/books.module.css";

type IBookProps = {
  key: string;
  imageSrc: string;
  title: string;
  author: string;
  amazonUrl: string;
};

export default function Book({
  key,
  imageSrc,
  title,
  author,
  amazonUrl,
}: IBookProps) {
  return (
    <li key={key} className={styles.book}>
      <img src={imageSrc} alt={title} />
      <section>
        <article>
          <h1>{title}</h1>
          <h2>{author}</h2>
        </article>
        <div>
          <Link href={amazonUrl}>Buy Now</Link>
        </div>
      </section>
    </li>
  );
}
