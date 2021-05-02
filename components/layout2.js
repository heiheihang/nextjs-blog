import Head from 'next/head'
import Image from 'next/image'
import styles from './layout2.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Alex'
export const siteTitle = 'Next.js Sample Website'

export default function Layout2({ children, home }) {
    return <div className={styles.container}>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        )}
    </div>
}