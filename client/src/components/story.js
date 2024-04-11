import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { LeftBlock, RightBlock, LastLeftBlock, LastRightBlock, HeaderBlock } from "./storyblock";

export default function Story() {
 const params = useParams();
 const navigate = useNavigate();

const [collection, setCollection] = useState([]);
const [headerImg, setHeaderImg] = useState(null);

  useEffect(() => {
   async function fetchData() {
     const collectionName = params.collection.toString();
     const response = await fetch(`https://senior-archive-backend.vercel.app/stories/collections/${params.collection.toString()}`);
      if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
    const collectionRes = await response.json();
     if (!collectionRes) {
      //  window.alert(`Record with collection ${collectionName} not found`);
       navigate("/");
       return;
     }

     setCollection(collectionRes);
   }
    fetchData();
    return;
 }, [params.collection, navigate]);

 const blocks = []


 for (let i = 0; i < collection.length; i++) {
    if (i == 0) {
      blocks.push(<HeaderBlock img = {collection[collection.length-1].img} collection = {collection[i].collection}/>);
    }
    if (i%2 == 0) {
      if (i === collection.length-1) {
        blocks.push(<LastLeftBlock img = {collection[i].img } text = {collection[i].text }/>);
      } else {
        blocks.push(<LeftBlock img = {collection[i].img } text = {collection[i].text }/>);
      }
    } else {
      if (i === collection.length-1) {
        blocks.push(<LastRightBlock img = {collection[i].img } text = {collection[i].text }/>);
      } else {
        blocks.push(<RightBlock img = {collection[i].img } text = {collection[i].text }/>);
      }
    }
 }


 return (
  <div className="story-container" >
  <NavLink to={'/'} className='linkstyle'>
  <p className='headline'>Stories From Home</p>
  </NavLink>
  <div>
    {blocks}
  </div>
 
</div>
 );
}