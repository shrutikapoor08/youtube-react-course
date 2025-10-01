# React Netflix Clone - Foundational UI Branch

This branch contains the foundational UI setup for the React Netflix Clone course. It covers the initial project setup and basic component structure.

🎥 **[Watch the Full Course on YouTube](https://www.youtube.com/watch?v=X2Rcp87yl4s)**

## 📍 What's in This Branch

This branch represents the early stages of the course (Module 1-3) and includes:

### ✅ Completed Features
- **Project Setup**: Vite + React 19 + TypeScript configuration
- **Styling**: Tailwind CSS v4 integration with custom Netflix theme
- **Header Component**: Responsive header with REACTFLIX branding
- **Hero Component**: Full-screen hero section with background image and CTA
- **Movies Component**: Placeholder component (to be implemented)
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Custom Fonts**: Inter and Poppins font families from Google Fonts

### 🎨 Design System
- Netflix-inspired color palette (red: #e50914)
- Dark theme with smooth transitions
- Custom CSS variables for consistent theming
- Optimized typography with fluid font sizing

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (preferred) or npm/yarn

### Installation

1. Clone this branch:
```bash
git clone -b <branch-name> https://github.com/shrutikapoor08/youtube-react-course.git
cd youtube-react-course
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📂 Project Structure

```
youtube-react-course/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header with branding
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   └── Movies.tsx       # Placeholder for movie list
│   ├── assets/
│   │   └── hero-background.jpg  # Hero background image
│   ├── App.tsx              # Main app component
│   ├── App.css              # Global styles and theme
│   ├── main.tsx             # App entry point
│   └── vite-env.d.ts        # Vite type definitions
├── public/                  # Static assets
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Tech Stack

- **React 19**: Latest React with modern features
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS v4**: Utility-first CSS framework
- **ESLint**: Code linting and formatting

## 📚 What You'll Learn

In this stage of the course, you've learned:

1. **Project Setup**
   - Setting up Vite with React and TypeScript
   - Configuring Tailwind CSS v4
   - Project structure and organization

2. **Component Development**
   - Creating functional React components
   - Using TypeScript with React
   - Component composition

3. **Styling**
   - Tailwind CSS utility classes
   - Custom CSS variables
   - Responsive design patterns
   - Google Fonts integration

4. **Best Practices**
   - File organization
   - CSS architecture
   - Accessibility considerations
   - Performance optimizations

## 🎯 Current Implementation

### Header Component
- Responsive navigation bar
- REACTFLIX branding with Netflix red color
- Fixed positioning for persistent visibility
- Mobile-optimized spacing

### Hero Component
- Full-screen hero section (80vh)
- Background image with gradient overlay
- Centered content with call-to-action
- Responsive typography
- Hover effects on CTA button
- Accessibility features (focus states)

### Movies Component
- Placeholder component ready for implementation
- Will be expanded in later modules

## 🔜 Next Steps

In the upcoming modules, you'll add:
- Movie data and types
- MovieCard component
- MovieList component with grid layout
- Search functionality
- State management
- API integration

## 📖 Related Modules

This branch covers:
- **Module 1**: Kickoff & Setup
- **Module 3**: Foundational UI Components

For the complete course structure, see the main branch README.

## 💡 Tips for This Stage

1. **Explore the Components**: Open each component file and understand the structure
2. **Modify Styles**: Try changing colors, spacing, and typography to understand Tailwind
3. **Responsive Testing**: Test the UI on different screen sizes
4. **Accessibility**: Use keyboard navigation to test focus states

## 🎨 Customization

### Changing the Theme
Edit `src/App.css` to modify the color scheme:
```css
:root {
  --netflix-red: #e50914;
  --netflix-red-hover: #f40612;
  --netflix-dark: #141414;
  --netflix-gray: #2f2f2f;
}
```

### Updating Fonts
Modify the Google Fonts import in `src/App.css`:
```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap");
```

## 🐛 Common Issues

### Vite Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port. Check the terminal output for the correct URL.

### Tailwind Classes Not Working
Make sure `@import "tailwindcss";` is at the top of `src/App.css`.

### TypeScript Errors
Run `pnpm install` to ensure all type definitions are installed.

## 📝 Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm lint     # Run ESLint
```

## 🔗 Resources

- **Main Course**: [YouTube Video](https://www.youtube.com/watch?v=X2Rcp87yl4s)
- **Discord**: [Join the community](https://bit.ly/shruti-discord)
- **React Docs**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Vite**: [vitejs.dev](https://vitejs.dev)

## 🤝 Contributing

Found an issue or want to improve this branch? Feel free to:
- Open an issue
- Submit a pull request
- Join the Discord community for discussions

## 📄 License

This project is open source and available for educational purposes.

---

⭐ If you find this helpful, please star the repository!

**Made with ❤️ by [Shruti Kapoor](https://shrutikapoor.dev/)**