import React, { useState } from 'react'
const inintialInputState = {
    a: 0,
    b: 0
}
function Calculator() {
    const [inputState, setInputState] = useState({...inintialInputState});
    const [result, setResult] = useState(0)
    const [histories, setHistories] = useState([]);
    const [restoreHistory, setRestoreHistory] = useState(null);

console.log(histories);
    const handelInputChange =(inp)=>{
        setInputState({
            ...inputState,
            ...inp,
        });
  }
  const handelClear = ()=>{
    setInputState({
        ...inintialInputState,
    });
    setResult(0);
  }
  
//   const handelOpertor = (operation)=>{
//       setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));
  
//   }

  const handelOpertor = (operation)=>{
    if(!inputState.a || !inputState.b){
        alert("Input NOt Valid");
    }
    const f = new Function( 'operation',
    `return ${inputState.a} ${operation} ${inputState.b}`
    );
    const result = f(operation);
    setResult(result);
    
    const history = {
      id:getId.next().value,
      inputs: {...inputState},
      operation,
      result,
      date: new Date(),
    };
    setHistories([history, ...histories ]);
    
    console.log('histories: ',histories);
  };

  const handelRestoreBtn = (history)=>{
    setInputState({...history.inputs})
    setResult(history.result)
    setRestoreHistory(history.id)
  }
  const handelAllClear =()=>{
    setHistories(" ");
    setHistories([]);
  };
  function* generateId(){
    let id= 0;
    while(true){
      yield id++;
    }
  }
  const getId = generateId();
  return (
    <div style={{width:'50%', margin:'0 auto'}}>
      <h1>Result: {result}</h1>
      <div>
        <p>Inputs</p>
        <input 
            type="number" 
            value={inputState.a}
            onChange={(e)=> handelInputChange({ a: parseInt(e.target.value)})}
            name ="a"
         />
        <input 
            type="number" 
            value={inputState.b} 
            onChange={(e)=> handelInputChange ({ b: parseInt(e.target.value)})}
            name= "b"
        />
      </div>
      <div className="operator">
        <p>Operations</p>
        <button onClick={(e)=> handelOpertor('+')}>+</button>
        <button onClick={(e)=> handelOpertor('-')}>-</button>
        <button onClick={(e)=> handelOpertor('*')}>*</button>
        <button onClick={(e)=> handelOpertor('/')}>/</button>
        <button onClick={handelClear}>Clear</button>
      </div>
      <div>
	<p>History</p>
	{histories.length === 0 ? (
		<p>
			<small>There is no history</small>
		</p>
	) : (
		<ul>
			{histories.map((historyItem) => (
				<li key={historyItem.id}>
					<p>
						Operations: {historyItem.inputs.a} {historyItem.operation}{' '}
						{historyItem.inputs.b}, Result = {historyItem.result}
					</p>
					<small>
						{historyItem.date.toLocaleDateString()}{' '}
						{historyItem.date.toLocaleTimeString()}
					</small>

					<button onClick={(e)=> handelRestoreBtn(historyItem)}>Restore</button>
				</li>
			))}
      <button onClick={handelAllClear}>Clear All History</button>
		</ul>
	)}
</div>
    </div>
  )
}

export default Calculator
