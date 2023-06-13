import styles from "./Chatroom.module.css";
import {createSignal, For} from "solid-js";

export const Chatroom = (props: { username: (string & {}); }) => {
    const [message, setMessage] = createSignal("");
    const [messages, setMessages] = createSignal([{ sender: "server", text: "hi!" }]);

    // Websocket nonsense
    let serverUrl = "ws://" + window.location.host + ":8081";
    console.log(serverUrl)

    const ws = new WebSocket(serverUrl);

    ws.onopen = (event) => {
        console.log("WS OPEN SUCCESSFUL");
    }

    ws.onerror = (event) => {
        console.error("WS ERROR: " + event);
    }

    ws.onmessage = (event) => {
        let msg = JSON.parse(event.data);
        setMessages([...messages(), msg]);
        console.log("RECEIVED MESSAGE");
    }

    const handleSendMessage = (e: Event) => {
        e.preventDefault();

        if (message() != "") {
            console.log("sending message: " + message().trim());
            setMessage("");
            let msg = {
                sender: props.username,
                text: message().trim(),
            }
            ws.send(JSON.stringify(msg));
        }
    }

    return (
        <div class={styles.container}>
            <h1 class={styles.heading}>Chatroom</h1>
            <div class={styles.messagesView}>
                <For each={messages()}>
                    {(msg) => <div class={styles.message}>
                        <p><b>{msg.sender}:</b> {msg.text}</p>
                    </div>}
                </For>
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
