import type { Component } from 'solid-js';
import {createSignal, Show} from "solid-js";
import {Chatroom} from "./Chatroom";
import {Login} from "./Login";

const App: Component = () => {
  const [isLoggedIn, setLoggedIn] = createSignal(false);
  const [username, setUsername] = createSignal("");

  return (
    <div>
      <Show when={isLoggedIn()} fallback={<Login setLoggedIn={setLoggedIn} setUsername={setUsername}/>}>
        <Chatroom username={username()}/>
      </Show>
    </div>
  );
};

export default App;
