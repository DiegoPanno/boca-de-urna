import "./Candidato2.css";
import { useState } from "react";

const Candidato2 = () => {
 const [sumar, setSumar] = useState(0);
   const aumentar = () => {
     setSumar(sumar +1)
   }
   const disminuir = () => {
    if (sumar > 0) {
        setSumar(sumar - 1);
    }
   }

  return (
    <div className="conte-candidato2">
      <h2 className="candidato2-h1">Candidato 2</h2>
      <p className="num2">{sumar}</p>
      <div className="conte-btn2">
        <button className="mas2" onClick={aumentar}>
          <h2 className="mas-menos2">+</h2>
        </button>
        <button className="menos2" onClick={disminuir}>
          <h2 className="mas-menos2">-</h2>
        </button>
      </div>
    </div>
  );
};

export default Candidato2;