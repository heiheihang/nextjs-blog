import React, { useState } from 'react';
import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head'

import styles from '../../components/grid.module.css'

function ColorBox({ state }) {
    if (state == 0) {
        return <div className={styles.normal}></div>
    } else if (state == 1) {
        return <div className={styles.hole}></div>
    }
}

export default function Path() {
    const arraySize = 10
    const startingMatrix = new Array(arraySize).fill(0).map(() => new Array(arraySize).fill(0))
    startingMatrix[0][0] = 2
    startingMatrix[arraySize - 1][arraySize - 1] = 3
    const [grid, setGrid] = useState(startingMatrix)

    function Box({ state, row, col }) {
        const [boxState, setBoxState] = useState(state)
        //console.log(boxState)
        if (boxState == 0) {   //default state
            return <div onClick={() => {
                setBoxState(1)
                let newGrid = grid
                newGrid[row][col] = 1
                setGrid(newGrid)
            }} className={styles.normal}></div>
        } else if (boxState == 1) {  //blocked 
            return <div onClick={() => {
                setBoxState(0)
                let newGrid = grid
                newGrid[row][col] = 0
                setGrid(newGrid)
            }} className={styles.hole}></div>
        } else if (boxState == 2) {   //start
            return <div className={styles.start}></div>
        } else if (boxState == 3) {   //end
            return <div className={styles.end}></div>
        }
    }

    function ResetButton() {
        return <button onClick={() => setGrid(startingMatrix)}>
            Reset
        </button>
    }

    function FindPathButton() {
        return <button onClick={() => console.log(grid)}>
            Find!
    </button>
    }

    return (
        <Layout>
            <Head>
                <title>Shortest Path</title>
            </Head>
            <ResetButton />
            <FindPathButton />
            <div className={styles.container}>{grid.map((row, colIndex) => <div key={colIndex}>{row.map((elem, rowIndex) => <Box key={rowIndex * 1000 + colIndex} state={elem} row={rowIndex} col={colIndex} />)}</div>)}</div>
        </Layout>
    )
}