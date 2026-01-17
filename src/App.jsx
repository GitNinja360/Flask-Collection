import GalleryGrid from './components/GalleryGrid'
import './App.css'

// Import all flask images
import flaskBlackCollarBottle from './assets/Black Collar bottle.jpeg'
import flaskBlackCollarFlask from './assets/Black Collar flask.jpeg'
import flaskBlackCupTransparent from './assets/Black cup with transparent top.jpeg'
import flaskBlackFlaskCollarBottle from './assets/Black Flask with collar bottle.jpeg'
import flaskBlackRubberTop1 from './assets/Black Flask with rubber top.jpeg'
import flaskBlackRubberTop2 from './assets/Black Flask with Rubber top.jpeg'
import flaskBlackSilverWoodTop1 from './assets/Black Flask with silver wood top.jpeg'
import flaskBlackSilverWoodTop2 from './assets/Black Flask with silver wood Top.jpeg'
import flaskGreenRubberTop from './assets/Green Flask with rubber top.jpeg'
import flaskGreenSilverWoodTop1 from './assets/Green Flask with silver wood top.jpeg'
import flaskGreenSilverWoodTop2 from './assets/Green Flask with Silver wood top.jpeg'
import flaskSelfieWhite1 from './assets/Selfie white flask.jpeg'
import flaskSelfieWhite2 from './assets/Selfie White Flask.jpeg'
import flaskSilverWoodTop1 from './assets/silver flask wood  top.jpeg'
import flaskSilverWoodTop2 from './assets/Silver Flask wood top.jpeg'
import flaskVaccumBlack1 from './assets/Vaccum Black flask.jpeg'
import flaskVaccumBlack2 from './assets/Vaccum Black Flask.jpeg'
import flaskWhiteBambooWoodTop1 from './assets/white flask bamboo wood top & bottom.jpeg'
import flaskWhiteBambooWoodTop2 from './assets/white Flask bamboo wood top & bottom.jpeg'
import flaskWhiteTransparentTop from './assets/White Flask Transparent top.jpeg'
import flaskWhiteRubberTop1 from './assets/white flask with rubber top.jpeg'
import flaskWhiteRubberTop2 from './assets/White Flask with rubber top.jpeg'
import flaskWhiteSilverWoodTop from './assets/white Flask with silver wood top.jpeg'

function App() {
  // Flask images collection - grouped by product with duplicates
  const sampleImages = [
    { 
      name: 'Black Collar bottle', 
      images: [flaskBlackCollarBottle] 
    },
    { 
      name: 'Black Collar flask', 
      images: [flaskBlackCollarFlask] 
    },
    { 
      name: 'Black cup with transparent top', 
      images: [flaskBlackCupTransparent] 
    },
    { 
      name: 'Black Flask with collar bottle', 
      images: [flaskBlackFlaskCollarBottle] 
    },
    { 
      name: 'Black Flask with rubber top', 
      images: [flaskBlackRubberTop1, flaskBlackRubberTop2] 
    },
    { 
      name: 'Black Flask with silver wood top', 
      images: [flaskBlackSilverWoodTop1, flaskBlackSilverWoodTop2] 
    },
    { 
      name: 'Green Flask with rubber top', 
      images: [flaskGreenRubberTop] 
    },
    { 
      name: 'Green Flask with silver wood top', 
      images: [flaskGreenSilverWoodTop1, flaskGreenSilverWoodTop2] 
    },
    { 
      name: 'Selfie White Flask', 
      images: [flaskSelfieWhite1, flaskSelfieWhite2] 
    },
    { 
      name: 'Silver Flask wood top', 
      images: [flaskSilverWoodTop1, flaskSilverWoodTop2] 
    },
    { 
      name: 'Vaccum Black Flask', 
      images: [flaskVaccumBlack1, flaskVaccumBlack2] 
    },
    { 
      name: 'white flask with bamboo wood top and bottom', 
      images: [flaskWhiteBambooWoodTop1, flaskWhiteBambooWoodTop2] 
    },
    { 
      name: 'White Flask Transparent top', 
      images: [flaskWhiteTransparentTop] 
    },
    { 
      name: 'White Flask with rubber top', 
      images: [flaskWhiteRubberTop1, flaskWhiteRubberTop2] 
    },
    { 
      name: 'White Flask with silver wood top', 
      images: [flaskWhiteSilverWoodTop] 
    }
  ]

  return (
    <div className="app">
      <h1>Flask Collection Gallery</h1>
      <GalleryGrid images={sampleImages} />
    </div>
  )
}

export default App
