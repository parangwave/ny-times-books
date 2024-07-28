import styles from "../styles/about.module.css";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About This Project</h1>
      <p>
        This project was created to explore the New York Times Best Sellers
        lists.
      </p>
    </div>
  );
}

export const runtime = "edge";
