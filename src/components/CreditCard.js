import React from 'react'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/mastercard.png'



function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  return (
    <div className="container flex flex-col mx-auto rounded-lg shadow border p-8 m-10 w-[30rem]" style={{background: `${bgColor}`, color: `${color}`}}>
        <div className="flex flex-col">

          <div className="flex ">
            <img className="aligns-end w-16" src={type === 'Visa' ? visa : mastercard} alt="visa" />
          </div>
          <div className="flex justify-center">{number}</div>
          <div className="flex justify-start">Expires {expirationMonth}/{expirationYear} {bank}</div>
          <div className="flex justify-start">{owner}</div>
        </div>
    </div>
  )
}

export default CreditCard