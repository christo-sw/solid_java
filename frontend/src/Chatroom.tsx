import {Component, JSX} from "solid-js";

export const Chatroom = (props: { username: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) => {

    return (
        <div>
            <p>Chatroom for {props.username}</p>
        </div>
    );
}
