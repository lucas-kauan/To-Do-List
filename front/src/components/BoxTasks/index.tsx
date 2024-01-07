import styles from './style.module.scss';

const BoxTasks = ({children, button}: any) => {
    return (
        <section className={styles.sectionTasks}>
            <div className={styles.containerTittleButton}>
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

export default BoxTasks;