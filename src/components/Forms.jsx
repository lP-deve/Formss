import './Forms.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function Forms() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/thanks');
  };


  const name = watch("name", "FELICIA LEIRE");
  const card = watch("card", "9591 6489 6389 101E");
  const MM = watch("MM", "00");
  const YY = watch("YY", "00");
  const cvc = watch("cvc", "000");

  return (
    <div className="content">
      <div className="bg">
        <img className='visible' src="/big.png" alt="Card background" />
        <img className='hidden' src="/Group 10 (2).png" alt="Hidden background" />
      </div>

      <div className="forms">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="div">
            <label>Cardholder Name</label>
            <input className={errors.name ? "input error" : "input"} {...register('name', { required: 'obligatory' })} type="text" placeholder="e.g. Jane Appleseed" />
            <p className="error-message">{errors.name?.message}</p>
          </div>

          <div className="div">
            <label>CARD NUMBER</label>
            <input className={errors.card ? "input error" : "input"} {...register('card', { required: 'only numbers' , maxLength: { value: 16, message: "numbers length must be 16" }, minLength:{value:16, message: 'numbers length must be 16' } })} type="text" placeholder="e.g. 1234 5678 9123 0000" />
            <p className="error-message">{errors.card?.message}</p>
          </div>

          <div className="div">
            <div className="label">
              <label>EXP.DATE (MM/YY)</label>
              <label>CVC</label>
            </div>

            <div className="date">
              <input className={errors.MM ? "input error" : "input"} {...register('MM', { required: 'required field', maxLength: {value: 2, message: 'only two digits'}})} type="text" placeholder='MM' />
              <input className={errors.YY ? "input error" : "input"} {...register('YY', { required: 'required field' , maxLength: {value: 2, message: 'only two digits'} })} type="text" placeholder='YY' />
              <div className="cvv">
                <input className={errors.cvc ? "input error" : "input"} {...register('cvc', { required: 'required', maxLength: { value: 3, message: "Max 3 digits" } })} type="text" placeholder='e.g 123' />
              </div>
            </div>

            <div className="erordiv">
              <p className="error-message">{errors.MM?.message}</p>
              <p className="error-message">{errors.cvc?.message}</p>
            </div>
          </div>

          <button type="submit">Confirm</button>
        </form>
      </div>

      <div className="cards">
        <div className="cardd">
          <div className="round"></div>
          <img id='blue' src="public/Oval Copy 3.png" alt="" />
          <img  id="red" src="/Oval Copy 4.png" alt="" />
            <p className="card-number">
            {card? card.replace(/(.{4})/g, "$1 ").trim() : "0000 0000 0000 0000"} </p>
          <div className="card-details">
            <p className="card-name">{name || 'Jane Appleseed'}</p>
            <p className="card-exp">{MM || '00'}/{YY || '00'}</p>
          </div>
                   
        </div>

        <div className="cardBack">
          <div className="bgg"></div>
        
          <div className="cvc-box">{cvc || '000'}</div>
        </div>
      </div>
    </div>
  );
}






