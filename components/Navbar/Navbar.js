import styles from './Navbar.module.scss';
import Link from 'next/link';
import { NavbarData } from '../../data';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <div className={styles.navHome}>
          <img
            className={styles.sraLogo}
            src={'/static/images/sra_white.svg'}
            alt='SRA logo'
          />
        </div>
      </Link>

      <div className={styles.navLinks}>
        {NavbarData.map((item, index) => (
          <Link href={item.link} key={index} className={styles.navLink}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
