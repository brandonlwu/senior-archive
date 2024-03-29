import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Story1() {
    return(
        <div className="story-container" >
            <NavLink to={'/'} className='linkstyle'>
            <p className='headline'>Stories From Home</p>
            </NavLink>
            {/* <NavLink className="linkstyle" to="/create">
            <button className="button1 storybutton">SHARE STORY</button>
                </NavLink>
            <Link to={'/story'} className='linkstyle'>
            <button className='button1 storybutton'>BROWSE THE ARCHIVE</button>
            </Link> */}
            <div className="img-container">
                <img className="headerimg" src='https://storage.googleapis.com/senior-proj-images/images/junghan-3.JPG'/>
                <div className="centered-text">Trunk of Letters</div>
            </div>
            <div className="cell">
                <img src='https://storage.googleapis.com/senior-proj-images/images/junghan-1.jpeg' className='story-img-360'/>
                <p className = 'image-text-right'>The first time we talked was towards high school graduation. The date was March 29th and I gave her a letter. Letters became very important during our courtship because once we graduated from high school, we were in different cities and eventually different states in a new country.</p>
            </div>
            <div className="cell">
                <p className = 'image-text-left'>We have a whole trunk of letters we wrote to each other from when we dated. I think I have personally written around 400.</p>
                <img src='https://storage.googleapis.com/senior-proj-images/images/junghan-2.JPG' className='story-img-240'/>
            </div>
            <div className="cell">
                <img src='https://storage.googleapis.com/senior-proj-images/images/junghan-3.JPG' className='story-img-240'/>
                <p className = 'image-text-right'>The letters were mostly my reflections and thoughts. They were more like diary entries than letters to your loved one. It's funny to see how formal I used to be. By the time I wrote this letter we had already been dating, but I still referred to her as "classmate."</p>
            </div>
            <div className="dot-divider">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="cell">
                <p className = 'image-text-right'>In this one, I wrote that I had visited 3 different stationery stores but hadn't found a proper birthday card for her. So I'm asking her if she would instead be interested in getting a cake and splitting it together.</p>
            </div>
        </div>
    );
}

export default Story1;