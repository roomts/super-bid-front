import Header from "../Header";
import styles from "./layout.module.css";

interface LayoutProps {
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const optionsTop = [
    "Inscreva-se na newsletter",
    "Como Comprar",
    "Quero Vender",
    "Blog",
    "Ajuda",
    "Fale Conosco",
  ];
  return (
    <div>
      <Header optionsTop={optionsTop} />
      <div className={styles.container}>{props.children}</div>
    </div>
  );
}
