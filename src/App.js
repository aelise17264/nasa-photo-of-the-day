import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import styled, {keyframes} from 'styled-components'


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

const StyleIndex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  padding: ${props => props.theme.containerMargin};
  img{
    height: ${props => props.theme.height};
    width: ${props => props.theme.width};
    margin: ${props => props.theme.imageMargin};
    border-radius: 50%;
  }
  h3{
    padding-right: 5rem;
    padding-left: 5rem;

  }
`

const Images = ({address}) => (
  <StyleIndex className="image-container">
    <h2>{address.rover.name} left Earth on {address.rover.launch_date} and reached its destination on {address.rover.landing_date}</h2>

    <h3>{address.rover.name} utilizes {address.camera.full_name} (or {address.camera.name} for short) to stear clear of any obstacles while it works to capture never before seen images</h3>
    
     <img src={address.img_src}
     alt='mars at night'/>
     <h4>Picture taken on {address.earth_date}</h4>
   </StyleIndex>
     
    
      )

const kf = keyframes`
blink{
  0%{
    opacity: 0;

  }
100%{
   color: ${props => props.theme.spanColor};
   opacity: 1;
}
}
`

const StyledHeader = styled.header`
border: dotted 5px ${props => props.theme.white};
 padding: 40px;
 margin: 0;
 background-color: ${props => props.theme.headingColor};
   span{
     font-style: italic;
     font-weight: normal;
     color: ${props => props.theme.spanColor};
     animation: ${kf.blink} 1s alternate infinite;
   }
 
`

const styledFooter = styled.footer`
font-size: 2rem;

`

  return (
    <div className="App">
      <StyledHeader className='header'>
       
      <h1>Have you been <span className='pun'>curious</span> about what our latest rover is up to on Mars?</h1>
     
      </StyledHeader>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      
      {photo.map(pics => {
        return <Images key={pics.id} address={pics}/>
      })

}
  <styledFooter>Check back with us weekley for new images and updates. Stay curious my friends</styledFooter>
   </div>
  );
}

export default App;
