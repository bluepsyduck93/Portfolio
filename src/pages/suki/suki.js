import React from 'react'
import './suki.scss'
import Suki1 from '../../assets/suki/suki1.jpeg'
import Suki2 from '../../assets/suki/suki2.jpg'
import Suki3 from '../../assets/suki/suki3.jpg'
import Suki4 from '../../assets/suki/suki4.jpg'
import Suki5 from '../../assets/suki/suki5.jpg'
import Suki6 from '../../assets/suki/suki6.jpg'
import Suki7 from '../../assets/suki/suki7.jpg'
import Suki8 from '../../assets/suki/suki8.jpg'
import Suki9 from '../../assets/suki/suki9.jpg'
import Suki10 from '../../assets/suki/suki10.jpg'
import Suki11 from '../../assets/suki/suki11.jpg'
import Suki12 from '../../assets/suki/suki12.jpg'
import Suki13 from '../../assets/suki/suki13.jpg'
import Suki14 from '../../assets/suki/suki14.jpg'
export default  function Suki() {
    return(
        <div>
            <h1>Suki Shrine</h1>
            <section className="suki-image-container">
                <img className="suki-image" src={Suki1}/>
                <img className="suki-image" src={Suki2}/>
                <img className="suki-image" src={Suki3}/>
                <img className="suki-image" src={Suki4}/>
                <img className="suki-image" src={Suki5}/>
                <img className="suki-image" src={Suki6}/>
                <img className="suki-image" src={Suki7}/>
                <img className="suki-image" src={Suki8}/>
                <img className="suki-image" src={Suki9}/>
                <img className="suki-image" src={Suki10}/>
                <img className="suki-image" src={Suki11}/>
                <img className="suki-image" src={Suki12}/>
                <img className="suki-image" src={Suki13}/>
                <img className="suki-image" src={Suki14}/>
            </section>
        </div>
    )
}