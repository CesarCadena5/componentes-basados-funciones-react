import { useState } from 'react';

// Para crear un Hook personalizado, siempre debe llevar la palabra use al inicio.
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);

    const Incrementar = () => {
        setContador(contador + 1);
    };
    return [contador, Incrementar];
}

const App = () => {
    const [contador, Incrementar] = useContador(0);
    return(
        <div>
            <p>Contador: {contador}</p>
            {/* <button onClick={() => setContador(contador + 1)}>Incrementar</button> */}
            <button onClick={Incrementar}>Incrementar</button>
        </div>
    );
}

export default App;