import styles from "./Chatroom.module.css";
import {createSignal} from "solid-js";

export const Chatroom = (props: { username: (string & {}); }) => {
    const [message, setMessage] = createSignal("");
    const [messages, setMessages] = createSignal([{ sender: "server", text: "hi!" }]);

    //setMessages(msgs => [...msgs, { sender: "server", text: "hi!" }]);
    const handleSendMessage = (e: Event) => {
        e.preventDefault();

        if (message() != "") {
            console.log("sending message: " + message().trim());
            setMessage("");
        }
    }

    return (
        <div class={styles.container}>
            <h1 class={styles.heading}>Chatroom</h1>
            <div class={styles.messagesView}>
                messages
            </div>
            <div class={styles.input}>
                <form onSubmit={handleSendMessage}>
                    <input type={"text"} value={message()}
                           onChange={(e) => {setMessage(e.target.value)}} />
                    <button class={styles.sendButton} onClick={handleSendMessage}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
