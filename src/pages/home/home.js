import React from "react"
import './home.scss'
import {CopyBlock, dracula} from "react-code-blocks"
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PersonIcon from '@mui/icons-material/Person';
import PetsIcon from '@mui/icons-material/Pets';
import DashboardTile from "../../components/dashboardTile/dashboardTile";

export default function Home(){

    return(
        <div>
            <CopyBlock
                text={"console.log('Hello World!');"}
                language={"javascript"}
                theme={dracula}
            />
            <div className="dashboard-container">
                <DashboardTile
                    title={"Resume"}
                    picture={<HistoryEduIcon />}
                    link={'/resume'}
                />
                <DashboardTile
                    title={"Projects"}
                    picture={<StickyNote2Icon />}
                    link={'/projects'}
                />
                <DashboardTile
                    title={"About Me"}
                    picture={<PersonIcon />}
                    link={'/aboutme'}
                />
                <DashboardTile
                    title={"Suki"}
                    picture={<PetsIcon />}
                    link={'/suki'}
                />
            </div>
        </div>
    )
}