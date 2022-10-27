import '../../styles/faq.scss'
import driver from '../../img/driver.png'
import user from '../../img/user.png'
import map from '../../img/map.png'
import university from '../../img/university.png'
import Preguntas from '../Preguntas'

export default function Faq(){
    return(
        <div className='faq--container'>
            <div className='faq--header'>
                <h1>Soporte</h1>   
            </div>
            <div className='faq--content'>
                <div className='faq--content--title'>
                    <h1>Te damos la bienvenida al servicio de soporte de Pool Wheels</h1>
                    <h4>¿En qué podemos ayudarte?</h4>
                    <div className='faq--cards--container'>
                        <div className='faq--card'>
                            <span>Conductores</span>
                            <br />
                            <img src={driver} alt='driver' className='image'/>
                        </div>
                        <div className='faq--card'>
                            <span>Viajeros</span>
                            <br />
                            <img src={user} alt='driver' className='image'/>
                        </div>
                        <div className='faq--card'>
                            <span>Viajes</span>
                            <br />
                            <img src={map} alt='driver' className='image'/>
                        </div>
                        <div className='faq--card'>
                            <span>Universidades</span>
                            <br />
                            <img src={university} alt='driver' className='image'/>
                        </div>
                    </div>
                </div>
            </div>
            <Preguntas />
        </div>
    )
}