import Link from 'next/link';
import styles from './NewNavbar.module.scss';
import NavbarData from '../../data/navbar';

const NewNavbar = () => {
  return (
    <nav className={styles.navbar}>
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

export default NewNavbar;
