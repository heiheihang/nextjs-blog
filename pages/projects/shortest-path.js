import React, { useState } from 'react';
import Layout2, { siteTitle } from '../../components/layout2'
import Head from 'next/head'

import styles from '../../components/grid.module.css'
import { path } from 'd3-path';

const arraySize = 10

function aStar(mat) {
    open = []
    close = []

    open.push([0, 0, 0, 0, [[0, 0]]]) //(x,y,g,f)
    let dest = []
    while (open.length != 0) {
        console.log(open)
        let minDist = 10000
        let minInd = 0
        for (let i = 0; i < open.length; i++) {
            if (open[i][3] < minDist) {
                minInd = i
                minDist = open[i][3]
            }
        }
        let [x, y, g, f, path] = open[minInd]
        if (x == arraySize - 1 && y == arraySize - 1) {
            return path
        }
        open.splice(minInd, 1)

        if (x > 0) {
            if (mat[x - 1][y] != 1) {
                let inClose = false
                let newHeuristicDistance = ((arraySize - 1) - (x - 1)) + ((arraySize - 1) - y)
                for (let i = 0; i < close.length; i++) {
                    if (close[i][0] == x - 1 && close[i][1] == y) {
                        inClose = true
                        if (newHeuristicDistance + g + 1 < close[i][3]) {
                            close.splice(i, 1)
                            let path1 = path.slice()
                            path1.push([x - 1, y])
                            open.push([x - 1, y, g + 1, newHeuristicDistance + g + 1, path1])
                        }
                        break
                    }
                }
                if (inClose == false) {
                    let inOpen = false
                    for (let i = 0; i < open.length; i++) {
                        if (open[i][0] == x - 1 && open[i][1] == y) {
                            inOpen = true
                            if (newHeuristicDistance + g + 1 < open[i][3]) {
                                open.splice(i, 1)
                                let path1 = path.slice()
                                path1.push([x - 1, y])
                                open.push([x - 1, y, g + 1, newHeuristicDistance + g + 1, path1])
                            }
                            break
                        }
                    }
                    if (inOpen == false) {
                        let path1 = path.slice()
                        path1.push([x - 1, y])
                        open.push([x - 1, y, g + 1, newHeuristicDistance + g + 1, path1])
                    }
                }
            }
        }

        if (x < arraySize - 1) {
            if (mat[x + 1][y] != 1) {
                let newHeuristicDistance = ((arraySize - 1) - (x + 1)) + ((arraySize - 1) - y)
                let inClose = false
                for (let i = 0; i < close.length; i++) {
                    if (close[i][0] == x + 1 && close[i][1] == y) {
                        inClose = true
                        if (newHeuristicDistance + g + 1 < close[i][3]) {
                            close.splice(i, 1)
                            let path1 = path.slice()
                            path1.push([x + 1, y])
                            open.push([x + 1, y, g + 1, newHeuristicDistance + g + 1, path1])
                        }
                        break
                    }
                }
                if (inClose == false) {
                    let inOpen = false
                    for (let i = 0; i < open.length; i++) {
                        if (open[i][0] == x + 1 && open[i][1] == y) {
                            inOpen = true
                            if (newHeuristicDistance + g + 1 < open[i][3]) {
                                open.splice(i, 1)
                                let path1 = path.slice()
                                path1.push([x + 1, y])
                                open.push([x + 1, y, g + 1, newHeuristicDistance + g + 1, path1])
                            }
                            break
                        }
                    }
                    if (inOpen == false) {
                        let path1 = path.slice()
                        path1.push([x + 1, y])
                        open.push([x + 1, y, g + 1, newHeuristicDistance + g + 1, path1])
                    }
                }
            }
        }

        if (y > 0) {
            if (mat[x][y - 1] != 1) {
                let inClose = false
                let newHeuristicDistance = ((arraySize - 1) - x) + ((arraySize - 1) - (y - 1))
                for (let i = 0; i < close.length; i++) {
                    if (close[i][0] == x && close[i][1] == y - 1) {
                        inClose = true
                        if (newHeuristicDistance + g + 1 < close[i][3]) {
                            close.splice(i, 1)
                            let path1 = path.slice()
                            path1.push([x, y - 1])
                            open.push([x, y - 1, g + 1, newHeuristicDistance + g + 1, path1])
                        }
                        break
                    }
                }
                if (inClose == false) {
                    let inOpen = false
                    for (let i = 0; i < open.length; i++) {
                        if (open[i][0] == x && open[i][1] == y - 1) {
                            inOpen = true
                            if (newHeuristicDistance + g + 1 < open[i][3]) {
                                open.splice(i, 1)
                                let path1 = path.slice()
                                path1.push([x, y - 1])
                                open.push([x, y - 1, g + 1, newHeuristicDistance + g + 1, path1])
                            }
                            break
                        }
                    }
                    if (inOpen == false) {
                        let path1 = path.slice()
                        path1.push([x, y - 1])
                        open.push([x, y - 1, g + 1, newHeuristicDistance + g + 1, path1])
                    }
                }
            }
        }
        if (y < arraySize - 1) {
            if (mat[x][y + 1] != 1) {
                let inClose = false
                let newHeuristicDistance = ((arraySize - 1) - x) + ((arraySize - 1) - (y + 1))
                for (let i = 0; i < close.length; i++) {
                    if (close[i][0] == x && close[i][1] == y + 1) {
                        inClose = true
                        if (newHeuristicDistance + g + 1 < close[i][3]) {
                            close.splice(i, 1)
                            let path1 = path.slice()
                            path1.push([x, y + 1])
                            open.push([x, y + 1, g + 1, newHeuristicDistance + g + 1, path1])
                        }
                        break
                    }
                }
                if (inClose == false) {
                    let inOpen = false
                    for (let i = 0; i < open.length; i++) {
                        if (open[i][0] == x && open[i][1] == y + 1) {
                            inOpen = true
                            if (newHeuristicDistance + g + 1 < open[i][3]) {
                                open.splice(i, 1)
                                let path1 = path.slice()
                                path1.push([x, y + 1])
                                open.push([x, y + 1, g + 1, newHeuristicDistance + g + 1, path1])
                            }
                            break
                        }
                    }
                    if (inOpen == false) {
                        let path1 = path.slice()
                        path1.push([x, y + 1])
                        open.push([x, y + 1, g + 1, newHeuristicDistance + g + 1, path1])
                    }
                }
            }
        }
    }
    console.log("no route")
    return []
}

function dijkstra(mat) {
    let cnt = 0
    let visited = new Array(arraySize).fill(0).map(() => new Array(arraySize).fill(0))
    let distance = new Array(arraySize).fill(0).map(() => new Array(arraySize).fill(10000))
    let prevNode = new Array(arraySize).fill(0).map(() => new Array(arraySize).fill([0, 0]))
    console.log("prevNode")
    console.log(prevNode)
    distance[0][0] = 0
    while (cnt < arraySize * arraySize) {
        let minDist = 10000
        let [x, y] = [0, 0]
        for (let i = 0; i < arraySize; i++) {
            for (let j = 0; j < arraySize; j++) {
                if (visited[i][j] == 0 && distance[i][j] < minDist) {
                    minDist = distance[i][j]
                    x = i
                    y = j
                }
            }
        }
        if (mat[x][y] == 1) {
            visited[x][y] = 1
            cnt++
            continue
        }
        if (x > 0) {
            if (distance[x - 1][y] > distance[x][y] + 1 && mat[x - 1][y] != 1) {
                distance[x - 1][y] = distance[x][y] + 1
                prevNode[x - 1][y] = [x, y]
            }
        }
        if (x < arraySize - 1) {
            if (distance[x + 1][y] > distance[x][y] + 1 && mat[x + 1][y] != 1) {
                distance[x + 1][y] = distance[x][y] + 1
                prevNode[x + 1][y] = [x, y]
            }
        }
        if (y > 0) {
            if (distance[x][y - 1] > distance[x][y] + 1 && mat[x][y - 1] != 1) {
                distance[x][y - 1] = distance[x][y] + 1
                prevNode[x][y - 1] = [x, y]
            }
        }
        if (y < arraySize - 1) {
            if (distance[x][y + 1] > distance[x][y] + 1 && mat[x][y + 1] != 1) {
                distance[x][y + 1] = distance[x][y] + 1
                prevNode[x][y + 1] = [x, y]
            }
        }
        visited[x][y] = 1
        cnt++
    }
    console.log(distance)
    let path = []
    let prev = prevNode[arraySize - 1][arraySize - 1]
    while (prev != [0, 0]) {
        let [a, b] = prev
        if (a == 0 && b == 0) {
            break
        }
        console.log(prev)
        path.push([a, b])
        prev = prevNode[a][b]
    }
    console.log("finished")
    return path
}

function depthFirstSearch(mat) {
    const stack = []
    let visited = new Array(arraySize).fill(0).map(() => new Array(arraySize).fill(0))
    stack.push([0, 0, [[0, 0]]])
    while (stack.length > 0) {
        let [row, col, path] = stack.pop()
        if (mat[row][col] == 3) {
            return path
        }
        if (mat[row][col] == 1) {
            continue
        }
        if (row < arraySize - 1) {
            let path1 = path.slice()
            path1.push([row + 1, col])
            stack.push([row + 1, col, path1])
        }
        if (col < arraySize - 1) {
            let path2 = path.slice()
            path2.push([row, col + 1])
            stack.push([row, col + 1, path2])
        }
        if (row > 0) {
            let path1 = path.slice()
        }
    }
}

function breadthFirstSearch(mat) {
    const queue = []
    queue.push([0, 0, [[0, 0]]])
    let visited = new Array(arraySize).fill(0).map(() => new Array(arraySize).fill(0))
    while (queue.length > 0) {
        console.log(queue)
        let [row, col, path] = queue.shift()
        
        if (mat[row][col] == 3) {
            console.log(path)
            return path
        }
        if (mat[row][col] == 1 || mat[row][col] == 5) {
            continue
        }
        mat[row][col] = 5
        if (row > 0) {

            let queue1 = path.slice()
            queue1.push([row - 1, col])
            queue.push([row - 1, col, queue1])

        }
        if (col > 0) {
            let queue2 = path.slice()
            queue2.push([row, col - 1])
            queue.push([row, col - 1, queue2])
        }
        if (row < arraySize - 1) {
            let queue1 = path.slice()
            queue1.push([row + 1, col])
            queue.push([row + 1, col, queue1])
        }
        if (col < arraySize - 1) {
            let queue2 = path.slice()
            queue2.push([row, col + 1])
            queue.push([row, col + 1, queue2])
        }
    }
}

export default function Path() {
    const startingMatrix = new Array(arraySize).fill(0).map(() => new Array(arraySize).fill(0))
    startingMatrix[0][0] = 2
    startingMatrix[arraySize - 1][arraySize - 1] = 3
    const [grid, setGrid] = useState(startingMatrix)

    function depthFirstSearch(mat) {
        const stack = []
        let visited = new Array(arraySize).fill(0).map(() => new Array(arraySize).fill(0))
        stack.push([0, 0, [[0, 0]]])
        while (stack.length > 0) {
            let [row, col, path] = stack.pop()

            if (mat[row][col] == 3) {
                return path
            }
            if (mat[row][col] == 1 || mat[row][col] == 5) {
                continue
            }
            mat[row][col] = 5
            console.log(mat)

            if (row > 0) {
                if (mat[row - 1][col] != 5) {
                    let path1 = path.slice()
                    path1.push([row - 1, col])
                    stack.push([row - 1, col, path1])
                }
            }
            if (col > 0) {
                if (mat[row][col - 1] != 5) {
                    let path1 = path.slice()
                    path1.push([row, col - 1])
                    stack.push([row, col - 1, path1])
                }
            }
            if (row < arraySize - 1) {
                if (mat[row + 1][col] != 5) {
                    let path1 = path.slice()
                    path1.push([row + 1, col])
                    stack.push([row + 1, col, path1])
                }
            }
            if (col < arraySize - 1) {
                if (mat[row][col + 1] != 5) {
                    let path1 = path.slice()
                    path1.push([row, col + 1])
                    stack.push([row, col + 1, path1])
                }
            }
        }
    }
    function Box({ state, row, col }) {
        const [boxState, setBoxState] = useState(state)
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
        } else if (boxState == 4) {
            return <div className={styles.path}></div>
        } else if (boxState == 5) {
            return <div className={styles.visited}></div>
        }
    }

    function ResetButton() {
        return <button onClick={() => {
            setGrid(startingMatrix)
        }}>
            Reset
        </button>
    }

    function DepthFirstSearchButton() {
        return <button onClick={() => {
            let path = depthFirstSearch(grid)
            let newGrid = grid.map(row => row.slice())

            path.forEach(([row, col]) => {
                newGrid[row][col] = 4
            });
            console.log(newGrid)
            setGrid(newGrid)
        }}>
            Depth First Search
    </button>
    }

    function BreadthFirstSearchButton() {
        return <button onClick={() => {
            let path = breadthFirstSearch(grid)
            console.log(path)
            let newGrid = grid.map(row => row.slice())
            console.log("finished")
            path.forEach(([row, col]) => {
                newGrid[row][col] = 4
            });
            setGrid(newGrid)
        }}> Breadth First Search </button>
    }

    function DijkstraButton() {
        return <button onClick={() => {
            let path = dijkstra(grid)
            console.log(path)
            let newGrid = grid.map(row => row.slice())
            console.log("finished")
            path.forEach(([row, col]) => {
                newGrid[row][col] = 4
            });
            setGrid(newGrid)
        }}>Dijkstra</button>
    }

    function AStarButton() {
        return <button onClick={() => {
            let path = aStar(grid)
            console.log(path)
            let newGrid = grid.map(row => row.slice())
            console.log("finished")
            path.forEach(([row, col]) => {
                newGrid[row][col] = 4
            });
            setGrid(newGrid)
        }}>A*</button>
    }

    return (
        <Layout2>
            <Head>
                <title>Shortest Path</title>
            </Head>
            <ResetButton />
            <DepthFirstSearchButton />
            <BreadthFirstSearchButton />
            <DijkstraButton />
            <AStarButton />
            <div className={styles.container}>{grid.map((row, colIndex) => <div>{row.map((elem, rowIndex) => <Box state={elem} row={colIndex} col={rowIndex} />)}</div>)}</div>
        </Layout2>
    )
}