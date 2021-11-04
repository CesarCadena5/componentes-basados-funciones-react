import { useState, useEffect }  from 'react';

// Para crear un Hook personalizado, siempre debe llevar la palabra use al inicio.
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);

    const Incrementar = () => {
        setContador(contador + 1);
    };
    return [contador, Incrementar];
}

const Intervalo = ({contador}) => {
    useEffect(() => {
        let i = setInterval(() => console.log(contador), 1000);

        return () => clearInterval(i);
    }, [contador]);
    return(
        <p>Intervalo</p>
    );
};

const App = () => {
    const [contador, Incrementar] = useContador(0);
    // useEffect, se ejecuta cuando surge algún efecto. Si no se le da el segundo parametro, se ejecuta siempre que haya un cambio, si se le pasa el segundo argumento, ese codigo del useEffect, se ejecutará siempre que cambie ese parametro
    
    useEffect(() => {
        console.log('cambiando')
    }, [contador]); //Siempre que cambia la variable contador, se ejecuta el console.log
    
    return(
        <div>
            <p>Contador: {contador}</p>
            {/* <button onClick={() => setContador(contador + 1)}>Incrementar</button> */}
            <button onClick={Incrementar}>Incrementar</button>
            <Intervalo contador={contador}/>
        </div>
    );
}

export default App;