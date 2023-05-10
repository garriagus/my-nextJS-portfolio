import styles from './card.module.css'



export default function PersonalCard({ children, ...props }) {
  return (
    <>

      <div className={styles.parent}>
        <div className={styles.div1}>
          <div id={styles[props.id]} className={styles.div2}>
            <article className={styles.card}>
              <h3>Agustín Garrido</h3>
              <p className={styles.p}>
                Utilizo tecnologías React y Java.
                Tengo 27 años, actualmente vivo en Argentina.
                Soy Licenciado en Gestión Operativa de Construcciones Inteligentes.
                Soy el autor de esta pagina,
              </p>
              <span id={styles.span} className={styles.top}></span>
              <span id={styles.span} className={styles.right}></span>
              <span id={styles.span} className={styles.bottom}></span>
              <span id={styles.span} className={styles.left}></span>
            </article>
       
          </div>
        </div>

      </div>
    </>
  );
}