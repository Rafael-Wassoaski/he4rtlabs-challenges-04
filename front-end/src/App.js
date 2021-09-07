import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/api/pokemon')
            .then(res => res.json())
            .then(res => setData(res.msg))
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="App">
            <header>
                <p>{!data ? 'Carregando' : data}</p>
            </header>
        </div>
    );
}

export default App;
