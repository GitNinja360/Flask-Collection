import GalleryGrid from './components/GalleryGrid'
import './App.css'

// Auto-generated imports for existing assets
import blackBamboo from './assets/Black Flask with Bamboo Top.jpeg'
import blackRubberTopA from './assets/Black Flask with rubber top.jpeg'
import blackRubberTopB from './assets/Black Flask with Rubber top.jpeg'
import blackRubberTopC from './assets/Black Flask with Rubber Top.jpeg'
import blackCollarBottle from './assets/Black Flask with collar bottle.jpeg'
import blackCupColourless from './assets/Black cup with colourless top 2.jpeg'
import blackTransparent from './assets/Black flask with transparent top.jpeg'
import blackSilverA from './assets/Black Flask with silver wood top.jpeg'
import blackSilverB from './assets/Black Flask with silver wood Top.jpeg'
import blackCollar from './assets/Black Collar bottle.jpeg'
import blackCollarFlask from './assets/Black Collar flask.jpeg'
import greenRubber from './assets/Green Flask with rubber top.jpeg'
import greenSilverA from './assets/Green Flask with silver wood top.jpeg'
import greenSilverB from './assets/Green Flask with Silver wood top.jpeg'
import selfieA from './assets/Selfie white flask.jpeg'
import selfieB from './assets/Selfie White Flask.jpeg'
import silverWoodA from './assets/silver flask wood  top.jpeg'
import silverWoodB from './assets/Silver Flask wood top.jpeg'
import vaccumA from './assets/Vaccum Black flask.jpeg'
import vaccumB from './assets/Vaccum Black Flask.jpeg'
import whiteBambooA from './assets/white flask bamboo wood top & bottom.jpeg'
import whiteBambooB from './assets/white Flask bamboo wood top & bottom.jpeg'
import whiteTransparent from './assets/White Flask Transparent top.jpeg'
import whiteRubberA from './assets/white flask with rubber top.jpeg'
import whiteRubberB from './assets/White Flask with rubber top.jpeg'
import whiteSilver from './assets/white Flask with silver wood top.jpeg'

function App() {
  const sampleImages = [
    { name: 'Black Collar bottle', images: [blackCollar] },
    { name: 'Black Collar flask', images: [blackCollarFlask] },
    { name: 'Black cup (colourless top)', images: [blackCupColourless] },
    { name: 'Black flask (transparent top)', images: [blackTransparent] },
    { name: 'Black Flask with collar bottle', images: [blackCollarBottle] },
    { name: 'Black Flask with rubber top', images: [blackRubberTopA, blackRubberTopB, blackRubberTopC] },
    { name: 'Black Flask with Bamboo Top', images: [blackBamboo] },
    { name: 'Black Flask with silver wood top', images: [blackSilverA, blackSilverB] },
    { name: 'Green Flask with rubber top', images: [greenRubber] },
    { name: 'Green Flask with silver wood top', images: [greenSilverA, greenSilverB] },
    { name: 'Selfie White Flask', images: [selfieA, selfieB] },
    { name: 'Silver Flask wood top', images: [silverWoodA, silverWoodB] },
    { name: 'Vaccum Black Flask', images: [vaccumA, vaccumB] },
    { name: 'white flask with bamboo wood top and bottom', images: [whiteBambooA, whiteBambooB] },
    { name: 'White Flask Transparent top', images: [whiteTransparent] },
    { name: 'White Flask with rubber top', images: [whiteRubberA, whiteRubberB] },
    { name: 'White Flask with silver wood top', images: [whiteSilver] }
  ]

  return (
    <div className="app">
      <h1>Flask Collection Gallery</h1>
      <GalleryGrid images={sampleImages} />
    </div>
  )
}

export default App
