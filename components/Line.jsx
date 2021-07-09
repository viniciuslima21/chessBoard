import Square from './Square';

import styles from '../styles/Line.module.css';

export default function Line(props) {
    return (
        <div className={styles.line}>
            <Square black={props.black} />
            <Square black={!props.black} />
            <Square black={props.black} />
            <Square black={!props.black} />
            <Square black={props.black} />
            <Square black={!props.black} />
            <Square black={props.black} />
            <Square black={!props.black} />
        </div>
    );
}