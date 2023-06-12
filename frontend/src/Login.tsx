import styles from "./Login.module.css";

export const Login = (props: { username: string; setUsername: (arg0: string) => void; setLoggedIn: (arg0: boolean) => void; }) => {
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        props.setLoggedIn(true);
    }

    return (
        <div class={styles.main}>
            <h1 class={styles.banner}>Welcome</h1>
            <form onSubmit={handleSubmit}>
                <input type={"text"}
                       value={props.username}
                       onChange={(e) => {
                    props.setUsername(e.currentTarget.value.trim())
                }}
                        placeholder={"Username"}/>
                <button onClick={handleSubmit}>
                    Login
                </button>
            </form>
        </div>
    )
}
