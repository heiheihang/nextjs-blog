import React, { useState } from 'react';
import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head'

export default function Path() {
    const matrix = new Array(10).fill(0).map(() => new Array(10).fill(0));
    const [grid, setGrid] = useState(matrix)
    

    return (
        <Layout>
            <Head>
                <title>Shortest Path</title>
            </Head>
            <div>test</div>
        </Layout>
    )
}