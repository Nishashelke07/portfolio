import React from 'react'
import '../styles_projects/projects.scss'
import img1 from '../../../dist/img/project_1.png'
import img2 from '../../../dist/img/project_2.png'

const Recent = () => {
    return (
        <section id="work-a">
            <div className='work_a'>
                <h2 className='section_title'> My Work </h2>
                <div className='bottom-line'></div>
                <p className='lead_about'> Here you can peek into some of my recent work..</p>
                <div className='items'>
                    <div className='item'>                       
                        <img src={img1} alt=''/>
                        <div className='item-text'>
                                <p className='item-text-category'>Design</p>
                                <h2 className='item-text-title'> Great gradients</h2>                               
                        </div>
                    </div>
                    <div className='item'>

                            <img src={img2} alt=''/>

                        <div className='item-text'>

                                <p className='item-text-category'>UI/UX</p>
                                <h2 className='item-text-title'> World xp</h2>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recent
