import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function PaymentCompletePage() {
    return (
        <main className={`${styles.main} ${inter.className}`}>
            <div className={styles.description}>
                <h1>결제완료</h1>
                <ul>
                    <li>결제상품</li>
                    <li>주문번호</li>
                    <li>카드회사</li>
                    <li>카드번호</li>
                    <li>결제금액</li>
                    <li>결제승인날짜</li>
                </ul>
            </div>
        </main>
    );
}
