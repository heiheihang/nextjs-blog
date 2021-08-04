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
          and Mathematics. In previous summers, he spent most of his time doing research with UCL's 
          PPLV (Programming Principles, Logic, and Verification Group) on topics ranging from category theory,
          FSA, Buchi Arithmetic, Expressiveness of Algebraic Group etc.
          
          <p>After discovering the joy of software engineering, he will be spending 1 year in Carnegie Mellon University to do a Masters in Software Engineering.</p>
        </p>
        <p>He has interned at Vectr Ventures as a software engineer. He is currently the technical cofounder of 
        Parentvestment, also the sole developer/UX designer of the app incubated by Cyberport, Hong Kong. 
        </p>
        <p>
          Some of his favorite technologies are:
        </p>
        <ul>
          <li>ReScript</li>
          <li>React</li>
          <li>Flutter</li>
          <li>Python/Django</li>
          <li>Node/Express</li>
          <li>Docker</li>
          <li>AWS/GCP</li>
          <li>Next.js</li>


        </ul>
      </section>
      <section>
        <h2>Toy Projects</h2>
        <p><Link href="/projects/shortest-path">Pathfinding Visualizer</Link></p>

        <p><Link href="https://github.com/LCHK-Side-Project/Study-Paxos">Study Paxos</Link></p>

        <p><Link href="https://github.com/heiheihang/Grading-Server-Test">Codeforces Clone</Link></p>
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