import styles from './style.module.scss';

const BoxLoginRegister = ({children, button}: any) => {

    return (
        <section className={styles.sectionLogin}>
            <div className={styles.containerSectionLogin}>
                <div className={styles.containerTitleButton}>
                    <h1>Tarefas</h1>
                    {
                        button
                    }
                </div>
                {
                    children
                }
            </div>
        </section>
    )

}

export default BoxLoginRegister;