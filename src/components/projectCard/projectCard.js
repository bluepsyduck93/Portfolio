import React, {useState} from 'react'
import './projectCard.scss'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

export default  function ProjectCard({
    name,
    image,
    description,
    technology,
    link
}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return image ? (
        <div>
            <div className="resume-card-container">
                <div className="resume-card">
                    <div className="resume-card-name">
                        <h3>{name}</h3>
                    </div>
                    <div className="resume-card-image-container">
                        <img className="resume-card-image" src={image} alt={'project card'} onClick={()=>{handleOpen()}}/>
                    </div>
                </div>
                <div>
                    {technology}
                </div>
                <div>
                    {description}
                </div>
                <div>
                    {link}
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='project-modal'>
                    <img className="modal-image" src={image} alt={'modal-image'}/>
                </Box>
            </Modal>
        </div>


    ) : (
        <div className="resume-card-container">
            <div className="resume-card">
                <h3>{name}</h3>
                <div className="resume-card-image-error">Sorry this image is not avaliable at this time</div>
            </div>
            <div>
                {technology}
            </div>
            <div>
                {description}
            </div>
            <div>
                {link}
            </div>
        </div>


    )
}