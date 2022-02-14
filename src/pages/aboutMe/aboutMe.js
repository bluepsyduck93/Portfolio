import React from 'react'
import './aboutMe.scss'
import MyPicture from '../../assets/mypicture.jpeg'
import AnimalCrossing from '../../assets/media/animalcrossing.png'
import FF from '../../assets/media/ff14.png'
import League from '../../assets/media/leagueoflegends.png'
import LostArk from '../../assets/media/lostark.png'
import Pokemon from '../../assets/media/pokemon.png'
import ROR2 from '../../assets/media/ror2.png'
import Stardew from '../../assets/media/stardew.png'
import Becoming from '../../assets/media/becoming.png'
import CommonGood from '../../assets/media/thecommongood.png'
import InvisibleMan from '../../assets/media/invisibleman.png'
import Gloomhaven from '../../assets/media/gloomhaven.png'
import Cartographers from '../../assets/media/cartographers.png'
import SpiritIsland from '../../assets/media/spiritisland.png'

export default  function AboutMe() {
    return (
        <div className="about-me-container">
            <h1>
                About Me
            </h1>
            <div className="self-description-container">
                <div>
                    <img className="about-me-image" src={MyPicture}/>
                </div>
                <div className="self-description-text-container">
                    <p>
                        I am a software engineer that is currently focused on Frontend / Javascript work.
                    </p>
                    <p>
                        I like cats, playing video games and board games, and reading books.
                    </p>
                </div>
            </div>
            <div>
                <h3>
                    Games that I like to play
                </h3>
                <img className="about-me-media" src={League} />
                <img className="about-me-media" src={FF} />
                <img className="about-me-media" src={LostArk}/>
                <img className="about-me-media" src={Pokemon}/>
                <img className="about-me-media" src={Stardew}/>
                <img className="about-me-media" src={ROR2}/>
                <img className="about-me-media" src={AnimalCrossing}/>
                <h3>
                    Books that I have read recently
                </h3>
                <img className="about-me-media" src={Becoming}/>
                <img className="about-me-media" src={CommonGood} />
                <img className="about-me-media" src={InvisibleMan}/>
                <h3>
                    Board Games that I have played recently
                </h3>
                <img className="about-me-media" src={Gloomhaven} />
                <img className="about-me-media" src={Cartographers}/>
                <img className="about-me-media" src={SpiritIsland}/>
            </div>
        </div>
    )
}