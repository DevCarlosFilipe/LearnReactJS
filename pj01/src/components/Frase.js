import styles from './Frase.module.css'

function Frase() {

    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Criando uma frase</p>
        </div>
    );
}

export default Frase;