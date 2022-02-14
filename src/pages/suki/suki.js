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
        <div className="suki-shrine">
            <h1>Suki Shrine</h1>
            <section className="suki-image-container">
                <img className="suki-image" src={Suki1} alt={'suki smiling'}/>
                <img className="suki-image" src={Suki2} alt={'suki eating juice box'}/>
                <img className="suki-image" src={Suki3} alt={'suki on cat bed'}/>
                <img className="suki-image" src={Suki4} alt={'suki on another cat bed'}/>
                <img className="suki-image" src={Suki5} alt={'sleepy suki'}/>
                <img className="suki-image" src={Suki6} alt={'suki sleeping strangely'}/>
                <img className="suki-image" src={Suki7} alt={'suki staring on cat bed'}/>
                <img className="suki-image" src={Suki8} alt={'suki in cat tree bowl'}/>
                <img className="suki-image" src={Suki9} alt={'suki next to keyboard'}/>
                <img className="suki-image" src={Suki10} alt={'suki on lap'}/>
                <img className="suki-image" src={Suki11} alt={'baby suki in cat tree bowl'}/>
                <img className="suki-image" src={Suki12} alt={'baby suki with stuffy'}/>
                <img className="suki-image" src={Suki13} alt={'baby suki on couch'}/>
                <img className="suki-image" src={Suki14} alt={'tired baby suki'}/>
            </section>
        </div>
    )
}