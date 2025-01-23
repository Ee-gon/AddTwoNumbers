import React, { useState } from 'react';
import './App.css'

function AddTwoNumbers() {
    const [num1, setNum1] = useState(0); //holds first number, zero as default
    const [num2, setNum2] = useState(0); //holds second number, zero as default
    const [set, setSum] = useState(null); //holds sum of the two numbers

    const addition = () => {
        const total = parseFloat(num1) + parseFloat(num2); //adds the two numbers
        setSum(total); //sets the sum to the total
    }

  return (
    <div style ={{ padding: "20px", fontFamily: '"Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"' }}>
        
        <>
        <h1>Pick Two Numbers!</h1>
        <div className="input-container">
        <input
            className="rotating-input"
            id="num1"
            type="number"
            placeholder='Enter first number'
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
            required
                                                    />
        <h3>+</h3>

        <input
            className="rotating-input"
            id="num2"
            type="number"
            placeholder='Enter second number'
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={{ padding: "10px", margin: "10px" }}
            required
                                                    />

        {set > 100000000000000000000 ? (
            <h3> = WOW! That's a big number!</h3>
        ) : (
            <>
                {set !== null && <h3>= &nbsp;&nbsp;&nbsp;</h3>}
                <h2>{set}</h2>
            </>
        )}
            {set !== null && set < 0 && (
                <p>&nbsp;&nbsp; ~ohhh, so negative~ </p>
            )}

        </div>

        <button onClick={addition} style={{ padding: "10px", margin: "10px" }}>
            Add the two numbers
        </button>
        
        <h5>I wonder what the sum of the two numbers will be???</h5>
        <p id="smallComment">~so interesting, so curious~</p>
        
        </>
        
    </div>

  );
}
export default AddTwoNumbers
    