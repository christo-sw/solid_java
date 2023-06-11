import {JSXElement} from "solid-js";

export const Login = (props) => {
    let input: HTMLInputElement | ((el: HTMLInputElement) => void) | undefined;
    const handleSubmit = () => {
        // @ts-ignore
        if (!input.value.trim()) return;
    };

    return (
        <div>
            <h1>Login</h1>
            <form use:formSubmit={handleSubmit}>
                <label>
                    Username:
                    <input ref={input} />
                    <button>
                        Login
                    </button>
                </label>
            </form>
        </div>
    )
}
