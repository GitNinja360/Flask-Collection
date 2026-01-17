# Flask-Collection Gallery

A modern, responsive React-based image gallery web application for showcasing flask and bottle products. Built with Vite and React, featuring a clean grid layout with modal preview capabilities.

## Features

✨ **Responsive Grid Gallery** - Beautiful grid layout that adapts to any screen size (desktop, tablet, mobile)

🖼️ **Product Images** - Display your flask and bottle collection with exact product names

🔍 **Modal Preview** - Click any image to view it in a full-screen modal with product details

🔀 **Multi-Image Support** - For products with multiple photos, browse through them with navigation arrows and counter

📱 **Mobile Optimized** - Fully responsive design with touch-friendly controls

🎨 **Smooth Animations** - Elegant hover effects and transitions throughout the interface

## Project Structure

```
src/
├── components/
│   ├── GalleryGrid.jsx      # Main gallery grid component
│   └── ImageSlider.jsx      # Alternative slider component
├── styles/
│   ├── GalleryGrid.css      # Gallery styling
│   └── ImageSlider.css      # Slider styling
├── assets/                   # Product images (JPEG)
├── App.jsx                  # Main app component
├── App.css                  # App styling
└── main.jsx                 # Entry point
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/GitNinja360/Flask-Collection.git
   cd Flask-Collection
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## Usage

### Adding Your Products

Edit `src/App.jsx` and update the `sampleImages` array with your flask products:

```javascript
const sampleImages = [
  { 
    name: 'Product Name', 
    images: [image1, image2] // Add multiple images for same product
  },
  // Add more products...
]
```

### Adding Images

1. Place your flask images in `src/assets/`
2. Import them in `src/App.jsx`:
   ```javascript
   import flaskImage from './assets/your-image.jpeg'
   ```
3. Add to the `sampleImages` array

## Build & Deploy

### Build for production
```bash
npm run build
```
Output will be in the `dist/` folder.

### Preview production build
```bash
npm run preview
```

## Technologies Used

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool & dev server
- **CSS3** - Styling with animations and responsive design
- **JavaScript ES6+** - Modern JavaScript

## Gallery Features in Detail

### Grid Layout
- Auto-responsive columns based on screen size
- Smooth hover effects with image overlays
- Badge showing count of additional images (if available)

### Modal Preview
- Click any gallery item to open full-screen preview
- Navigate between multiple images with arrow buttons
- Image counter showing current position
- Click X or outside modal to close

### Image Organization
- Duplicate images are grouped under one gallery item
- Multiple images can be viewed sequentially in the modal
- Product names displayed prominently

## Performance Tips

- Images are optimized for web (compress JPEG to ~50-100KB each)
- The gallery handles up to 20+ products smoothly
- Lazy loading can be added for large collections

## Future Enhancements

- Search/filter functionality
- Product categories/tags
- Shopping cart integration
- Lightbox with keyboard navigation
- Backend API integration

## License

This project is open source and available under the MIT License.

## Support

For issues or feature requests, please open an issue on GitHub: https://github.com/GitNinja360/Flask-Collection/issues
