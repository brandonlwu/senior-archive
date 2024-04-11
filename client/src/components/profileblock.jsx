import { Outlet, Link } from "react-router-dom";

function Block({genre, text, img}) {
    return (
        <div>
            <div className='col-placard'>
            {/* <Link to={`profile`} className='linkstyle'> */}
              <img src={img} className='col-img'/>
            {/* </Link> */}
            <p className = 'col-text'>{`“${text}”`}</p>
            </div>
        </div>
    )
}

export default Block;