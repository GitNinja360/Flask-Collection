import GalleryGrid from './components/GalleryGrid'
import './App.css'

// Imports for all flask product images
import bambooFlask from './assets/Bamboo flask.jpeg'
import blackBamboo from './assets/Black Flask with Bamboo Top.jpeg'
import blackRubberTopA from './assets/Black Flask with rubber top.jpeg'
import blackRubberTopB from './assets/Black Flask with Rubber top.jpeg'
import blackCollarBottle from './assets/Black Flask with collar bottle.jpeg'
import blackCupColourless from './assets/Black cup with colourless top 2.jpeg'
import coffeMugs from './assets/Coffee Mugs.jpeg'
import blackSilverA from './assets/Black Flask with silver wood top.jpeg'
import blackSilverB from './assets/Black Flask with silver wood Top.jpeg'
import greenRubber from './assets/Green Flask with rubber top.jpeg'
import greenSilverA from './assets/Green Flask with silver wood top.jpeg'
import greenSilverB from './assets/Green Flask with Silver wood top.jpeg'
import largeBlackFlask from './assets/Large Black Flask Mag.jpeg'
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
    { name: 'Bamboo flask', images: [bambooFlask] },
    { name: 'Black cup (colourless top)', images: [blackCupColourless] },
    { name: 'Black Flask with collar bottle', images: [blackCollarBottle] },
    { name: 'Black Flask with rubber top', images: [blackRubberTopA, blackRubberTopB] },
    { name: 'Black Flask with Bamboo Top', images: [blackBamboo] },
    { name: 'Black Flask with silver wood top', images: [blackSilverA, blackSilverB] },
    { name: 'Coffee Mugs', images: [coffeMugs] },
    { name: 'Green Flask with rubber top', images: [greenRubber] },
    { name: 'Green Flask with silver wood top', images: [greenSilverA, greenSilverB] },
    { name: 'Large Black Flask Mag', images: [largeBlackFlask] },
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
