# 🏰 Girona Tourism Website

A React-based tourism promotion website showcasing the beautiful medieval city of Girona, Catalonia.

![Girona Tourism](https://images.unsplash.com/photo-1583509313622-0c3c8a5b2b63?w=1200&h=400&fit=crop)

## 📋 Project Overview

This project is an interactive, multimedia-rich web application designed to promote tourism in Girona, Spain. Built with React, it features:

- 🎬 **Cinematic Video Tour** - 2-minute drone footage of Girona
- 🎧 **Audio Guide** - Custom-recorded narration about the city
- 🖼️ **Edited Photography** - Professional images with filters and enhancements
- 🎯 **Interactive Activity Planner** - Select and book tourist activities
- 🛒 **Smart Cart System** - Real-time trip planning with price calculation

## ✨ Key Features

### Multimedia Integration
- **Video**: 2-minute cinematic drone footage with volume control
- **Audio**: 45-second narrated guide (original recording)
- **Images**: Professionally edited photos of Girona Cathedral
- **Synchronization**: Audio-video playback coordination

### Interactive Elements
- **Activity Gallery**: Browse 6 curated tourist experiences
- **Experience Summaries**: Modal galleries with multiple images per activity
- **Trip Planner Cart**: Floating widget for activity management
- **Booking Confirmation**: Animated success messages

### Design
- **Modern UI**: Gradient backgrounds with Google Fonts
- **Responsive Layout**: Mobile-friendly design
- **Smooth Animations**: Hover effects and transitions
- **Accessible Navigation**: Smooth scroll between sections

## 🎯 Tourist Activities

1. **Cathedral Tour** (€15) - Explore the widest Gothic nave in the world
2. **Jewish Quarter Walk** (€12) - Discover El Call, one of Europe's best-preserved Jewish quarters
3. **City Walls Experience** (€10) - Walk medieval walls with panoramic views
4. **Onyar River Houses** (€8) - Photo tour of iconic colorful houses
5. **Gastronomic Tour** (€45) - Taste authentic Catalan cuisine
6. **Arab Baths Visit** (€7) - Explore 12th-century Romanesque baths

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: CSS-in-JS + External CSS
- **Fonts**: Google Fonts (Playfair Display, Lato)
- **State Management**: React Hooks (useState, useRef, useEffect)
- **Version Control**: Git + GitHub
- **Development**: Visual Studio Code

## 📁 Project Structure

```
girona-tourism-react/
├── public/
│   ├── index.html
│   ├── girona-cathedral-edited.jpg
│   ├── girona-audio-guide.mp3
│   └── girona-tour.mp4
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── MediaGallery.jsx
│   │   ├── Activities.jsx
│   │   ├── Cart.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdrianLuchaco/girona-tourism-react.git
   ```

2. **Navigate to project directory**
   ```bash
   cd girona-tourism-react
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, navigate to the URL manually

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎨 Design Features

### Color Palette
- **Primary**: Dark Blue (#2c3e50) - Headers and text
- **Secondary**: Bright Blue (#3498db) - Interactive buttons
- **Accent**: Green (#27ae60) - Prices and success states
- **Background**: Lavender to Blue gradient

### Typography
- **Headings**: Playfair Display (Serif) - Elegant and classic
- **Body**: Lato (Sans-serif) - Clean and readable

### Layout
- Maximum content width: 1200px
- Responsive grid system
- Mobile-first approach
- Smooth scroll navigation

## 🎬 Multimedia Files

All multimedia files are stored in the `/public` directory:

- **Video**: `girona-tour.mp4` (2-minute drone footage)
- **Audio**: `girona-audio-guide.mp3` (45-second narration)
- **Image**: `girona-cathedral-edited.jpg` (Edited with Canva)

## 📊 Project Statistics

- **Components**: 7 React components
- **Code**: ~800+ lines
- **Multimedia**: 3 files (video, audio, image)
- **Features**: 4 interactive systems
- **Development Time**: 8-10 hours

## 🎓 Academic Project

**Course**: Multimedia - GEINF/GDDV  
**University**: Universitat de Girona (UdG)  
**Student**: Adrian Luchaco  
**Date**: December 2024

## 📝 Documentation

For detailed technical documentation, see [Technical Report](./technical_report.pdf)

## 🔮 Future Enhancements

- [ ] Backend integration for bookings
- [ ] User authentication system
- [ ] Multi-language support (Catalan, Spanish, English)
- [ ] 360° virtual tours
- [ ] Interactive maps
- [ ] Social media integration
- [ ] User reviews and ratings

## 📄 License

This project is created for educational purposes as part of the Multimedia course at UdG.

## 🙏 Acknowledgments

- **Video Source**: Pexels (royalty-free)
- **Images**: Pixabay (royalty-free)
- **Fonts**: Google Fonts
- **Icons**: Unicode Emojis

---

**Made with ❤️ in Girona**
