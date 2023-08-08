import styles from "./Footer.module.css";

import { Link } from "../../models/Link";
import FooterLink from "./FooterLink/FooterLink";
import { myData } from "../../data/Mine";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export type FooterProps = {
  links: Link[];
};

function Footer({ links }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          {links.map((l, i) => (
            <FooterLink key={i} targetRef={l.ref} name={l.name} />
          ))}
        </div>
        <div className={styles.contact}>
          <div className={styles.personal}>
            <p>
              Email:{" "}
              <a href={`mailto:${myData.contact.email}`}>
                {myData.contact.email}
              </a>
            </p>
            <p>
              Phone: <span>{myData.contact.phone}</span>
            </p>
          </div>
          <div className={styles.social}>
            <a href={myData.contact.github}>
              <FaGithub />
            </a>
            <a href={myData.contact.linkedIn}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          {`${myData.firstName} ${myData.lastName}`}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
