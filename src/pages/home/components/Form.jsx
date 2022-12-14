import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'

export const Form = () => {
  return (
    <div className='formContainer'>
      <p className='data'>Datos personales</p>
      
      <form>
        <div className='boxForm'>
          <div className='boxInput'>
            <label>Nombres<span className='textRed'>*</span></label>
            <input type="text" name="name" id="" placeholder='ROCIO' disabled/>
          </div>
          <div className='boxInput marginLeft'>
            <label>Apellido<span className='textRed'>*</span></label>
            <input type="text" name="lastname" id="" placeholder='LOPEZ' disabled />
          </div>
        </div>

        <div className='boxForm'>
          <div className='boxInput'>
            <label>Fecha Nacimiento<span className='textRed'>*</span></label>
            <input type="text" name="date" id="" placeholder='xx/xx/xxxx' disabled/>
          </div>
          <div className='boxInput marginLeft'>
            <label>E-mail<span className='textRed'>*</span></label>
            <input type="email" name="email" id="" placeholder='rociolopez@gmail.com' disabled/>
          </div>
        </div>

        <div className='boxForm'>
          <div className='boxInput'>
            <label>DNI<span className='textRed'>*</span></label>
            <input type="number" name="dni" id="" placeholder='45590680' disabled/>
          </div>
          <div className='boxInput marginLeft'>
            <label>¿Tenés licencia de conducir?<span className='textRed'>*</span></label>
            <select name="" id="" disabled>
              <option value="">No</option>
              <option value="">Si</option>
            </select>
          </div>
        </div>
        </form>

        <p className='textEdit'>Si queres editar tus datos podés hacerlo desde <Link to='/serviClub' className='linkDecoration'><span className='textBlue'>Tienda ServiClub</span></Link> o desde la <a className='linkDecoration' href="http://play.google.com/" target="_blank" rel="noopener noreferrer"><span className='textBlue'>App</span></a></p>
    </div>
  )
}
