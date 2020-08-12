import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
const [photo, setPhotos] = useState([])
 console.log(photo)
let thisURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY'
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
    <h2>{address.rover.name} utilizes {address.camera.full_name} (or {address.camera.name} for short) to capture never before seen images</h2>
<h3>{address.rover.name} left Earth on {address.rover.launch_date} and reached its destination on {address.rover.landing_date}</h3>
    <h4>Picture taken on {address.earth_date}</h4>
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
      
      
     
      {photo.map(pics => {
        return <Images key={pics.id} address={pics}/>
      })

}

   </div>
  );
}

export default App;
