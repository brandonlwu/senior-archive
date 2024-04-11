import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Block from './profileblock';
import { NavLink } from "react-router-dom";


function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

const themes = ["all", "immigration", "love", "friend",
 "family", "loss", "growth", "career", "faith"]

 const themetitles = ["all", "immigration", "love&kindness", "friendship",
 "family", "loss", "growing", "career&passions", "faith"]

function Main() {
  const [topic, setTopic] = useState('all')
  const [stories, setStories] = useState([]);

  // This method fetches the stories from the database.
 useEffect(() => {
   async function getStories() {
     const response = await fetch(`http://localhost:5000/stories/`);
      if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
    const records = await response.json();
    setStories(records);
   }
    getStories();
    return;
 }, [stories.length]);


  const col1 = [];
  const col2 = [];
  const col3 = [];
  let val = 0;

  const shuffleStories = shuffle(stories)


  for (let i = 0; i < stories.length; i++) {
    if (topic == 'all') {
      if (i%3 == 0) {
        col1.push(<NavLink className='front-page-link' to={`/story/${stories[i].collection}`}><Block genre = {stories[i].genre} text = {stories[i].text} img = {stories[i].img}/></NavLink>);
      } else if (i%3 == 1) {
        col2.push(<NavLink className='front-page-link' to={`/story/${stories[i].collection}`}><Block genre = {stories[i].genre} text = {stories[i].text} img = {stories[i].img}/></NavLink>);
      } else {
        col3.push(<NavLink className='front-page-link' to={`/story/${stories[i].collection}`}><Block genre = {stories[i].genre} text = {stories[i].text} img = {stories[i].img}/></NavLink>);
      }
    } else {
      if (stories[i].genre.includes(topic)) {
        if (val%3 == 0) {
          col1.push(<Block genre = {stories[i].genre} text = {stories[i].text} img = {stories[i].img}/>);
        } else if (val%3 == 1) {
          col2.push(<Block genre = {stories[i].genre} text = {stories[i].text} img = {stories[i].img}/>);
        } else {
          col3.push(<Block genre = {stories[i].genre} text = {stories[i].text} img = {stories[i].img}/>);
        }
        val++;
      }
    }
  }

  const themesBar = themes.map((theme, i) =>
    <button className = {`topic ${topic == `${theme}` ? 'selected': ''}`} onClick={() => setTopic(`${theme}`)}>{themetitles[i].toUpperCase()}</button>
  );


  return (
    <div className="container">
      <div className='header'>
        <NavLink to={'/'} className='linkstyle'>
        <p className='headline'>Stories From Home</p>
        </NavLink>
        <NavLink className="linkstyle" to="/create">
          <button className="button1 storybutton">SHARE STORY</button>
             </NavLink>
        <Link to={'/archive'} className='linkstyle'>
        <button className='button1 storybutton'>BROWSE THE ARCHIVE</button>
        </Link>
        </div>
        <div className='topic-container'>
          <hr></hr>
          {themesBar}
          <hr></hr>
        </div>
        <div className='photo-board'>
          <div className='col'>
            {col1}
          </div>
          <div className='col'>
            {col2}
          </div>
          <div className='col'>
            {col3}
          </div>
        </div>


    </div>
  );
}

export default Main;
