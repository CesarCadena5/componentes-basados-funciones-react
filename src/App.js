import { useReducer, useState } from 'react';

const initialState = {
    contador: 0
}

// action = {type: 'subir o bajar', payload: {[]} lo que sea => any }
const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1 }
        case 'reducir':
            return { contador: state.contador -1 }
        case 'set':
            return { contador: action.payload }
        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [valor, setValor] = useState(0);

    return( 
        <div>
            Contador: {state.contador}
            <input value={valor} onChange={e => setValor(e.target.value) } />
            <button onClick={() => dispatch({ type: 'incrementar' }) }>Más</button>
            <button onClick={() => dispatch({ type: 'reducir' }) }>Menos</button>
            <button onClick={() => dispatch({ type: 'set', payload: Number(valor) }) }>Set</button>
        </div>
    );
}

export default App;