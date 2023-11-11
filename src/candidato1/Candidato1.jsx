import "./Candidato1.css";
import { useState } from "react";

const Candidato1 = () => {
    const [sumar, setSumar] = useState(0)

    const aumentar = () => {
        setSumar(sumar + 1)
    }

    const disminuir = () => {
        if (sumar > 0) {
            setSumar(sumar - 1);
        }
    }

  return (
    <div className="conte-candidato1">
      <h2 className="candidato1-h1">Candidato 1</h2>
      <p className="num1">{sumar}</p>
      <div className="conte-btn">
        <button className="mas" onClick={aumentar}>
          <h2 className="mas-menos">+</h2>
        </button>
        <button className="menos" onClick={disminuir}>
          <h2 className="mas-menos">-</h2>
        </button>
      </div>
    </div>
  );
};

export default Candidato1;
