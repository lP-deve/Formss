import { useState } from 'react'
import './Forms.css'
import { useNavigate } from 'react-router-dom' 

export default function Forms() {
  const [name, setName] = useState('')
  const [card, setCard] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')

  const [nameError, setNameError] = useState('')
  const [cardError, setCardError] = useState('')
  const [dateError, setDateError] = useState('')
  const [cvcError, setCvcError] = useState('')

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    setNameError('')
    setCardError('')
    setDateError('')
    setCvcError('')

    if (name.trim() === '') {
      setNameError('Name is not entered')
      return
    }

    if (isNaN(card) || card.trim() == '') {
      setCardError('Card number must contain only digits')
      return
    }

    if (month.trim() === '' || year.trim() === '') {
      setDateError('Date fields cannot be blank')
      return
    }

    if (cvc.trim() === '') {
      setCvcError('CVC field cannot be blank')
      return
    }

    console.log('Submitted Data:', { name, card, month, year, cvc })
   
    navigate('/result')

    setName('')
    setCard('')
    setMonth('')
    setYear('')
    setCvc('')
  }

  return (
    <div className="content">
      <div className="bg">
        <img className='visible' src="/big.png" alt="" />
        <img className='hidden' src="/Group 10 (2).png" alt="" />
      </div>

      <div className="forms">
        <form onSubmit={submit}>
          <div className="div">
            <label>Cardholder Name</label>
            <input type="text" placeholder="e.g. Jane Appleseed" value={name}  onChange={(e) => setName(e.target.value)}  className={nameError ? 'error' : ''}/>
            {nameError && <p className='text'>{nameError}</p>}
          </div>

          <div className="div">
            <label>CARD NUMBER</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" value={card}onChange={(e) => setCard(e.target.value)}className={cardError ? 'error' : ''} />
            {cardError && <p className='text'>{cardError}</p>}
          </div>

          <div className="div">
            <div className="label">
              <label>EXP.DATE (MM/YY)</label>
              <label>CVC</label>
            </div>

            <div className="date">
              <input type="text" placeholder="MM" value={month} onChange={(e) => setMonth(e.target.value)} className={dateError ? 'error' : ''}/>
              <input type="text" placeholder="YY" value={year} onChange={(e) => setYear(e.target.value)} className={dateError ? 'error' : ''}/>

              <div className="cvv">
                <input type="text" placeholder="e.g. 123" value={cvc} onChange={(e) => setCvc(e.target.value)}  className={cvcError ? 'error' : ''}
                />
              </div>
            </div>
            <div className="erordiv">
              {dateError && <p className='text'>{dateError}</p>}
              {cvcError && <p className='text'>{cvcError}</p>}
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>

      <div className="cards">
        <img className='visible' src="/Group 16.png" alt="" />
        <img className='hidden' id="display" src="/Group 9.png" alt="" />
      </div>
    </div>
  )
}



