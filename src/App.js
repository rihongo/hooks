import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import {useInput} from './useInput';
import {useTabs} from "./useTabs";
import {useTitle} from "./useTitle";
import {useClick} from "./useClick";
import {useConfirm} from "./useConfirm";
import {usePreventLeave} from "./usePreventLeave";
import {useAxios} from "./useAxios";

const content = [
    {
        tab:"Section 1",
        content:" I'm the content of Section 1"
    },
    {
        tab:"Section 2",
        content:" I'm the content of Section 2"
    },
    {
        tab:"Section 3",
        content:" I'm the content of Section 3"
    }
];

const App = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);

    const decrementItem = () => setItem(item - 1);
    const maxLen = value => value.length < 9;

    const name = useInput("Mr.", maxLen);


    const {currentItem, changeItem} = useTabs(0, content);

    useEffect(()=>{
        console.log(1)
    });

    const titleUpdater = useTitle("Loading...");
    const input = useRef();

    setTimeout(() => console.log(input.currentValue),1000);

    const sayHello = () => console.log("say ");
    const title = useClick(sayHello());

    const conFirmDelete = useConfirm("Are you Sure", sayHello);

    const {protect, unprotect} = usePreventLeave();

    const { loading, data, error, refetch} = useAxios({
        url: "https://yts-proxy.now.sh/list_movies.json"
    });
    console.log(`Loading: ${loading}\nError: ${error}\n Data: ${JSON.stringify(data)}`);
    return (
        <div className="App">
            <h1>{item}</h1>
            <div>
                <button onClick={incrementItem}>Increment</button>
                <button onClick={decrementItem}>Decrement</button>
            </div>
            <div>
                <input placeholder="Name" {...name} />
            </div>
            <div>
                {content.map((section,index) => (
                    <button onClick={() => changeItem(index)}>{section.tab}</button>
                ))}
            </div>
            <div>
                {currentItem.content}
            </div>
            <div>
                <input ref={input} placeholder="la"/>
            </div>
            <div>
                <h1 ref={title}>Hi</h1>
            </div>
            <div>
                <button onClick={conFirmDelete}>Delete the world</button>
            </div>
            <div>
                <button onClick={protect}>protect</button>
                <button onClick={unprotect}>unprotect</button>
            </div>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

export default App;
