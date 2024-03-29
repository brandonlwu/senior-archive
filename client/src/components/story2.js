import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Story2() {
    return(
        <div className="story-container" >
            <NavLink to={'/'} className='linkstyle'>
            <p className='headline'>Stories From Home</p>
            </NavLink>
            <div className="img-container">
                <img className="headerimg" src='https://storage.googleapis.com/senior-proj-images/images/laoye-3.jpeg'/>
                <div className="centered-text">Radios</div>
            </div>
            <div className="cell">
                <img src='https://storage.googleapis.com/senior-proj-images/images/laoye-1.jpeg' className='story-img-360'/>
                <p className = 'image-text-right'>This is me with my mom and my younger sister. She was 7 years younger. My other sister was 2 years older. Actually, my parents had another 3 kids but they all passed away before I was born.</p>
            </div>
            <div className="cell">
            <p className = 'image-text-right'>I was the only son my parents had and because of that my mom really cherished me. At this point in time in China, there was this belief that placed emphasis on having a son because they carried on the family name.</p>
            </div>
            <div className="cell">
                <p className = 'image-text-left'>My mom was always very supportive of me, regardless of what I did. And that was most clear when I started working with radios. I would say the happiest time of my life was during high school when I joined my school's amateur radio club.</p>
                <img src='https://storage.googleapis.com/senior-proj-images/images/laoye-2.jpeg' className='story-img-240'/>
            </div>
            <div className="cell">
                <p className = 'image-text-right'>During this time in China, it was still relatively hard to come by radios and electronic parts so I disassembled my family's radio. I would take the radio apart and look at the individual parts, learn how they work, and reassemble the entire radio. </p>
            </div>
            <div className="cell">
                <img src='https://storage.googleapis.com/senior-proj-images/images/laoye-3.jpeg' className='story-img-240'/>
                <p className = 'image-text-right'>My mom wanted me to learn how to work with electronics because she knew it was important for the future, so she gave the radio to me and said do with it whatever you want. Because of that I was never afraid of breaking the radio or not being able to reassemble it.</p>
            </div>
            <div className="dot-divider">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="cell">
                <p className = 'image-text-right'> I still feel the same now whenever I take something apart. I'll figure a way to put it back together.</p>
            </div>
        </div>
    );
}

export default Story2;