import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function Archive() {

    const [collections, setCollections] = useState([])

    useEffect(() => {
        async function getStories() {
          const response = await fetch(`https://senior-archive-backend.vercel.app/collections/`);
           if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
         const records = await response.json();
         console.log(records)
         setCollections(records);
        }
         getStories();
         return;
    }, []);

    const collectionsList = []
    
    for (let i = 0; i < collections.length; i++) {
        const collectionId = collections[i];
        const title = collectionId.split('-').map((x) => x[0].toUpperCase() + x.substring(1)).join(" ");
        collectionsList.push(<NavLink className='front-page-link' to={`/story/${collectionId}`}><p>{title}</p></NavLink>);
     }
    

    return (
        <div className="story-container" >
            <NavLink to={'/'} className='linkstyle'>
                <p className='headline'>Stories From Home</p>
            </NavLink>
            <div>
                {collectionsList}
            </div>
        </div>
 );
}