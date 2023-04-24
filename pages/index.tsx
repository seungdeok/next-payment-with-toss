import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
        <button>구매하기</button>
      </div>
    </main>
  );
}
