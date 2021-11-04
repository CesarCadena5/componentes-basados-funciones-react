// const impura = _ => console.log(new Date().toLocaleDateString());
// impura();

function Micomponente({ valor }) {
  return(
    <div>
      <p>{ valor }</p>
    </div>
  );  
}

const App = () => {
  return(
    <Micomponente valor={'Cesar'}/>
  );
};

export default App;
