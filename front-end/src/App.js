import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Field from "./components/Field";

function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/api/pokemon')
            .then(res => res.json())
            .then(res => setData(res.data))
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="App">
            <header>
                <p>{!data ? 'Carregando' : data.name}</p>
            </header>
            <Field/>
            
        </div>
    );
}

export default App;
