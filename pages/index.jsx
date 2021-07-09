import Board from '../components/Board';

import styles from '../styles/Home.module.css';

export default function chessBoard() {
    return (
        <div className={styles.chessBoard}>
            <Board />
        </div>
    )
}