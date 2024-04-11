

export function LeftBlock({img, text}) {
    const splitsentence = text.split(".");
    const sentencelen = splitsentence.length;
  
    let text1 = "";
    let text2 = null;
  
    if (sentencelen > 5) {
      text1 = splitsentence.slice(0,3).join(".") + ".";
      text2 = splitsentence.slice(3,-1).join(".") + ".";
    } else {
      text1 = text;
    }
  
    return(
      <>
        <div className="cell">
            <img src={img} className='story-img-360'/>
            <p className = 'image-text-right'>{text1}</p>
        </div>
        {text2 ? 
        <div className="cell">
          <p className = 'image-text-right'>{text2}</p>
        </div>: <></>}
      </>
    );
  }
  
  
  export function RightBlock({img, text}) {
    const splitsentence = text.split(".");
    const sentencelen = splitsentence.length;
  
    let text1 = "";
    let text2 = null;
  
    if (sentencelen > 5) {
      text1 = splitsentence.slice(0,3).join(".") + ".";
      text2 = splitsentence.slice(3,-1).join(".") + ".";
    } else {
      text1 = text;
    }
  
    return(
      <>
        <div className="cell">
            <p className = 'image-text-left'>{text1}</p>
            <img src={img} className='story-img-360'/>
        </div>
        {text2 ? 
        <div className="cell">
          <p className = 'image-text-right'>{text2}</p>
        </div>: <></>}
      </>
    );
  }
  
  export function LastRightBlock({img, text}) {
    const splitsentence = text.split(".");
    const sentencelen = splitsentence.length;
  
    let text1 = splitsentence.slice(0,sentencelen-2).join(".") + ".";
    let text2 = splitsentence.slice(sentencelen-2,-1).join(".") + ".";
  
    return(
      <>
        <div className="cell">
            <p className = 'image-text-left'>{text1}</p>
            <img src={img} className='story-img-360'/>
        </div>
        <div className="dot-divider">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
      </div>
        <div className="cell">
          <p className = 'image-text-left'>{text2}</p>
        </div> <></>
      </>
    );
  }
  
  export function LastLeftBlock({img, text}) {
    const splitsentence = text.split(".");
    const sentencelen = splitsentence.length;
  
    let text1 = splitsentence.slice(0,sentencelen-2).join(".") + ".";
    let text2 = splitsentence.slice(sentencelen-2,-1).join(".") + ".";
  
    return(
      <>
        <div className="cell">
            <img src={img} className='story-img-360'/>
            <p className = 'image-text-right'>{text1}</p>
        </div>
        <div className="dot-divider">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
      </div>
        <div className="cell">
          <p className = 'image-text-left'>{text2}</p>
        </div> <></>
      </>
    );
  }
  
  export function HeaderBlock({img, collection}) {
    let title = collection.split('-').map((x) => x[0].toUpperCase() + x.substring(1)).join(" ");
    return(
    <div className="img-container">
        <img className="headerimg" src={img}/>
        <div className="centered-text">{title}</div>
    </div>
    )
  }