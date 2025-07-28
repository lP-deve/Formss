
import './Forms.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';



export default function Forms() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/thanks')
  };

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
            <input className={errors.name? "input error" : "input"} {...register('name', { required: 'obligatory' })} type="text"placeholder="e.g. Jane Appleseed" />
              <p className="error-message" >{errors.name?.message}</p>
          </div>

          <div className="div">
            <label>CARD NUMBER</label>
             <input  className={errors.card? "input error" : "input"}  {...register('card', { required: 'only numbers' })}type="text" placeholder="e.g. 1234 5678 9123 0000"/>
              <p className="error-message" >{errors.card?.message}</p>
          </div>

          <div className="div">
            <div className="label">
              <label>EXP.DATE (MM/YY)</label>
              <label>CVC</label>
            </div>

            <div className="date">
              <input className={errors.MM? "input error" : "input"}{...register('MM', { required: 'required field' })}type="text"placeholder='MM'/>
              <input className={errors.YY? "input error" : "input"}
                {...register('YY', { required: 'required field' })} type="text" placeholder='YY' />
              <div className="cvv">

                <input className={errors.cvc? "input error" : "input"}{...register('cvc', { required: 'required' })} type="text" placeholder='e.g 123' />
              
              </div>
            </div>

            <div className="erordiv">
                <p className="error-message" >{errors.MM?.message}</p>
                  <p className="error-message" >{errors.cvc?.message}</p>
            </div>
          </div>

         <button type="submit">Confirm</button>
        </form>
      </div>

      <div className="cards">
        <img className='visible' src="/Group 16.png" alt="Card front" />
        <img className='hidden' id="display" src="/Group 9.png" alt="Card back" />
      </div>
    </div>
  );
}





