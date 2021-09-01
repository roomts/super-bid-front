import Input from "../Input";
import styles from "./header.module.css";
interface HeaderProps {
  children?: any;
  optionsTop?: any;
  optionsBottom?: any;
}

export default function Header(props: HeaderProps) {
  function renderTopOptions(props) {
    return (
      <div className={styles.topHeader}>
        <ul className={styles.listOptions}>
          {props
            ? props.map((options, i) => (
                <li key={i} className={styles.listItem}>
                  {options}
                </li>
              ))
            : false}
        </ul>
      </div>
    );
  }

  //   function renderBottomOptions(props) {
  //     return (
  //       <div className={styles.topHeader}>
  //         <ul className={styles.listOptions}>
  //           {props
  //             ? props.map((options, i) => (
  //                 <li key={i} className={styles.listItem}>{options}</li>
  //               ))
  //             : false}
  //         </ul>
  //       </div>
  //     );
  //   }

  return (
    <div className={styles.box}>
      {renderTopOptions(props.optionsTop)}
      <div className={styles.headerBody}>
        <div className={styles.logo}>
          <img src="./logo_superbid.png" alt="" />
        </div>
        <div className={styles.search}>
          <Input value={0} />
        </div>
        <div className={styles.actions}>test</div>
        <div className={styles.perfil}>test</div>
      </div>
    </div>
  );
}
