
import './App.css';
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    // <div classNameName="App">
      <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card tier={"FREE"} cost={"0"}/>
          <Card tier={"PLUS"} cost={"9"}/>
          <Card tier={"PRO"} cost={"49"}/>
        </div>
      </div>
      </section>
    // </div>
  );
}

export default App;
