import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <h3 className={styles.footerTitle}>¡Contactanos!</h3>
      <ul className={styles.footerList}>
        <li className={styles.listItem}>
          <a href="mailto:infomaltton@gmail.com">
            <i class="ri-mail-fill"></i>infomaltton@gmail.com
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            className={styles.iconInsta}
            href="https://instagram.com/maltton/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="ri-instagram-fill"></i>maltton
          </a>
        </li>
        <li className={styles.listItem}>
          <a className={styles.iconPhone} href="tel:+5491147067343">
            <i class="ri-phone-fill"></i>4706-7343
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
