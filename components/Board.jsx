import Line from './Line';

import styles from '../styles/Board.module.css';

export default function Board() {
    return(
        <div className={styles.board}>
            <Line />
            <Line black />
            <Line />
            <Line black />
            <Line />
            <Line black />
            <Line />
            <Line black />
        </div>
    ); 
}