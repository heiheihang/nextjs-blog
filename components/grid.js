import styles from './grid.module.css'
import React, { useState } from 'react';

function ColorBox({state}) {
    if(state == 0) {
        return <div className={styles.normal}></div>
    } else if(state == 1) {
        return <div className={styles.hole}></div>
    }
}


function Box({state}) {

    const [boxState, setBoxState] = useState(state)
    //console.log(boxState)
    if(boxState == 0) {
        return <div onClick={() =>{
            setBoxState(1)
        } } className={styles.normal}></div>
    } else if(boxState == 1) {
        return <div onClick={() =>{
            setBoxState(0)
        } } className={styles.hole}></div>
    }
}

export default function Grid({ matrix }) {
    return <div className={styles.container}>{matrix.map(row => <div>{row.map(elem => <Box state={elem}/>)}</div>)}</div>
}