import { useRef } from "react";

const App = () => {
    const ref = useRef();
    const click = () => {
        console.log(ref);
        ref.current.focus();
    };

    return(
        <div onClick={click}>
            <input ref={ref} />
        </div>
    );
}

export default App;