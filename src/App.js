import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
const [photo, setPhotos] = useState([])
 console.log(photo)
let thisURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY'
console.log(thisURL)

useEffect(() =>{
axios.get(thisURL)
.then((results) => {
setPhotos(results.data.photos)
})
.catch(error => {
  console.log('Error, something did not work')
})


}, [])

const Images = ({address}) => (
  <div className="image-container">
    <div className = "header">
    <h2>Picture taken on {address.earth_date}</h2>
     <img src={address.img_src}
     alt='mars at night'/>
   </div>
      
    
      )


  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      
      
      </div>
      {photo.map(pics => {
        return <Images key={pics.id} address={pics}/>
      })

}

   </div>
  );
}

export default App;
