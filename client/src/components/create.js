import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";



const themes = ["immigration", "love", "friend",
 "family", "loss", "growth", "career", "faith"]

export default function Create() {
 const [form, setForm] = useState({
   narrator: "",
   text: "",
   img: "",
   genre:[],
   collection: "",
   number: null,
 });
 const navigate = useNavigate();
  // These methods will update the state properties.
 function updateForm(value) {
  console.log(value)
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }


const themeOptionList = themes.map((theme) =>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="checkbox"
      name="genreOptions"
      id={theme}
      value={theme}
      onChange={(e) => {e.target.checked? form.genre.push(e.target.value): form.genre = form.genre.filter(function(item) {
      return item !== e.target.value
    }); console.log(form.genre)}}
    />
    <label htmlFor={theme} className="form-check-label col-text" >{theme}</label>
  </div>
);

  // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
   const newStory = { ...form };
    await fetch("http://localhost:5000/stories/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newStory),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
    setForm({ narrator: "", text: "", img: "", genre:[], collection: "",number: null });
   navigate("/");
 }
  // This following section will display the form that takes the input from the user.
 return (
   <div className="create-container">
     <NavLink className="linkstyle" to="/">
        <button className="button1">BACK HOME</button>
      </NavLink>
     <h3 className="add-text">Add New Story</h3>
     <form onSubmit={onSubmit}>
      <div className="img-question-block">
      <div className="question-right">
        <img src={form.img} className='preview-img'/>
        </div>
       <div className="question-left">
         <label htmlFor="narrator" className="question-text">Narrator ID</label>
         <input
           type="text"
           className="form-control"
           id="narrator"
           value={form.narrator}
           onChange={(e) => updateForm({ narrator: e.target.value })}
         />
       </div>
       <div className="question-left">
         <label htmlFor="text" className="question-text">Story Text</label>
         <textarea
           type="text"
           className="form-control story-text-input"
           id="text"
           value={form.text}
           onChange={(e) => updateForm({ text: e.target.value })}
         />
       </div>
        <div className="question-left">
          <label htmlFor="img" className="question-text">Image link</label>
          <input
            type="text"
            className="form-control"
            id="img"
            value={form.img}
            onChange={(e) => updateForm({ img: e.target.value })}
          />
        </div>
        <div className="question-left">
          <label htmlFor="collection" className="question-text">Collection</label>
          <input
            type="text"
            className="form-control"
            id="collection"
            value={form.collection}
            onChange={(e) => updateForm({ collection: e.target.value })}
          />
        </div>
        <div className="question-left">
          <label htmlFor="collection" className="question-text">Number</label>
          <input
            type="number"
            className="form-control"
            id="number"
            value={form.number}
            onChange={(e) => updateForm({ number: e.target.value })}
          />
        </div>
       </div>
       <div className="form-group">
        <label htmlFor="img" className="question-text">Theme</label>
         {themeOptionList}
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Add story"
           className="add-btn"
         />
       </div>
     </form>
   </div>
 );
}