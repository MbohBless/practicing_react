import React ,{ useState }from "react";

import memesData from "../helpers/memesData";


function Meme() {
  const [meme,setMeme]  =  useState({
  topText:"",
  bottomText:"",
  randomImg:"http://i.imgflip.com/1bij.jpg",
  })
  const [allMemeImgs,setAllMemeImgs] = useState(memesData);

  function handleClick(e){
    e.preventDefault();
    console.log("clicked")
    const memesArray  = allMemeImgs.data.memes;
    const randomMemeId = Math.floor(Math.random() * memesArray.length);
    console.log(randomMemeId)
     setMeme(oldMeme=>{
        return{
          ...oldMeme,
          randomImg:memesArray[randomMemeId].url
        }
     })
  }
  return (
    <main className="container">
    <form className="form" action="">
     <input type="text" className="form--input" placeholder="Top Text" />
      <input type="text" className="form--input" placeholder="Buttom Text"/>
      <button onClick={handleClick} className="form--button">Get a new Meme Image</button>
    </form>
    
      <img
        src={meme.randomImg}
        alt="meme_image"
        className="meme_image"
      />
    </main>
  );
}

export default Meme;
