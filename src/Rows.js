import React from "react";
import "./App.css";

function Rows(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
      } = props
      return (
        <div>
          <input type="number" className="input" value={amount} onChange={onChangeAmount} />
          <select value={selectedCurrency} className="input" onChange={onChangeCurrency}>
            {currencyOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
  );
}

export default Rows;
