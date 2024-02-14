import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import '../index.css';

export default function Calculator(){

    const [result,setResult] = useState('');
    return(
        <>
        <h2>Gokul's Calculator</h2>
        <br></br>
        <div className="calculator">
            <div >
                <input className="result"></input>
            </div>
            <div>
                <button>(</button>
                <button>)</button>
                <button><FaDeleteLeft /></button>
                <button>C</button>

            </div>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>

            </div>
            <div>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>

            </div>
            <div>
                <button>+/-</button>
                <button>0</button>
                <button>.</button>
                <button>=</button>

            </div>
        </div>
        
        </>
    )
}