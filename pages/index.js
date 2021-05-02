import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Alex Fung is an aspiring software engineer with a passion in developing 
          quality software. 
        </p>
        <p>
        He spent 4 years in University College London with a degree in Computer Science
          and Mathematics. He will be spending 1 year in Carnegie Mellon University to do a Masters in Software Engineering.
        </p>
        <p>
          Some of his favorite technologies are:
        </p>
        <ul>
          <li>ReScript</li>
          <li>React</li>
          <li>Flutter</li>
          <li>Next.js</li>
        </ul>
      </section>
      <section>
        <Link href="/projects/shortest-path">Pathfinding Visualizer</Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}