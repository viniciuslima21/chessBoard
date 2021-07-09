import styles from '../styles/Square.module.css';

export default function Square(props) {
    return (
        <div 
            style={{
                backgroundColor: props.black ? '#000' : '#fff'
            }}
            className={styles.square}>
        </div>
    );
}