import React from 'react';
import '../styles/profile.css';
import gift from '../assets/gift.png';
import car from '../assets/car.png';
import arrow from '../assets/arrow.png';
import net from '../assets/net.png';
import { Upload } from './Upload';


export const Profile = () => {

  return (
    <main>
      <div className='container'> 

          <div className='imgPreview'>  
            <Upload/> {/* Importo componente lógico para la subida de archivos */}
          </div>

        <div className='container2'>
          <div className='box1'>
            <div className='boxName'>
              <p className='p1'>Hola, Rocío</p>
              <p className='p2'>Socio desde Junio 2022</p>
              <p className='p3'>Invitar amigos <img className='imgNet' src={net} alt="net" /></p>
            </div>

              <div className='box2'>{/* incluyo box2 en box1 */}
                <div className='textPoints'>
                  <div className='textPoint2'>
                    <p className='p4'>Tenés 1.480</p>
                    <p className='p5'>puntos</p>
                  </div>
                    <p className='p6'>¿Cómo canjear mis puntos?</p>
                </div>

                  <div className='gift'><img className='imgGift' src={gift} alt="gift" /></div>
              </div>
          </div>
        
          <div className='box3'>
            <div className='boxLicense'>
              <p className='license1'>Licencia</p>
              <p className='license2'>Obtuviste la licencia el día 20 de junio</p>
              <p className='license3'>Seguir practicando <img className='imgArrow' src={arrow} alt="arrow" /> </p>
            </div>

              <div className='imgCar'><img src={car} alt="car" /></div>
          </div>

        </div>

      </div>     
    </main>
  )
}
