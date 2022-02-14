import React from 'react'
import './aboutMe.scss'
import MyPicture from '../../assets/mypicture.jpeg'
import AnimalCrossing from '../../assets/animalcrossing.png'
import FF from '../../assets/ff14.png'
import League from '../../assets/leagueoflegends.png'
import LostArk from '../../assets/lostark.png'
import Pokemon from '../../assets/pokemon.png'
import ROR2 from '../../assets/ror2.png'
import Stardew from '../../assets/stardew.png'
import Becoming from '../../assets/becoming.png'
import CommonGood from '../../assets/thecommongood.png'
import InvisibleMan from '../../assets/invisibleman.png'
import Gloomhaven from '../../assets/gloomhaven.png'
import Cartographers from '../../assets/cartographers.png'
import SpiritIsland from '../../assets/spiritisland.png'

export default  function AboutMe() {
    return (
        <div>
            <h1>
                About Me
            </h1>
            <div className="self-description-container">
                <div>
                    <img className="about-me-image" src={MyPicture}/>
                </div>
                <div className="self-description-text-container">
                    <p>
                        I am a software engineer that is currently focused on frontend / Javascript work.
                    </p>
                    <p>
                        I like cats, playing video games and board games, and reading books.
                    </p>
                </div>
            </div>
            <div>
                <p>
                    Games that I like to play
                </p>
                <img className="about-me-media" src={League} />
                <img className="about-me-media" src={FF} />
                <img className="about-me-media" src={LostArk}/>
                <img className="about-me-media" src={Pokemon}/>
                <img className="about-me-media" src={Stardew}/>
                <img className="about-me-media" src={ROR2}/>
                <img className="about-me-media" src={AnimalCrossing}/>
                <p>
                    Books that I have read recently
                </p>
                <img className="about-me-media" src={Becoming}/>
                <img className="about-me-media" src={CommonGood} />
                <img className="about-me-media" src={InvisibleMan}/>
                <p>
                    Board Games that I have played recently
                </p>
                <img className="about-me-media" src={Gloomhaven} />
                <img className="about-me-media" src={Cartographers}/>
                <img className="about-me-media" src={SpiritIsland}/>
            </div>
        </div>
    )
}