import React from 'react';

function calculatorFormJpa72(props){
    return (
        <div className='row'>
            <div className="col-4">
                <label for="operand1" className="col-2 col-form-label">Operand1</label>
                <input type="text" className="form-control-plaintext" id="operand1" onChange={props.update}></input>
            </div>
            <select className="form-select" id="operation" onChange={props.update}>
                <option>Multplication</option>
            </select>
            <div className="col-4">
            <label for="operand2" className="col-2 col-form-label">Operand2</label>
                <input type="text" className="form-control-plaintext" id="operand2" onChange={props.update}></input>
            </div>
            <button onClick={props.action}>Go!</button>
        </div>
   
    )
}

export default calculatorFormJpa72;