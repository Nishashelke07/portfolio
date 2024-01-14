import React from 'react';
import '../styles_projects/projects.scss';
import work from '../../data/work.json';

const Recent = () => {
    return (
        <section id="work-a">
            <div className='work_a'>
                <h2 className='section_title'> My Work </h2>
                <div className='bottom-line'></div>
                <p className='lead_about'>Here you can peek into some of my recent work...</p>
                <div className='items'>
                    {
                        work.map((item)=> <div className='item' onClick={()=>window.open(item?.homePage)}>                       
                                <div className='item-text'>
                                        <img src={item?.imgURL} alt=''/>  
                                        <p className='item-text-category'>Design</p>
                                        <h2 className='item-text-title'> {item.title} </h2>  
                                                                   
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Recent;
