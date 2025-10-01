# React Netflix Clone - Complete Course

Build a production-ready Netflix clone from scratch using React 19, TypeScript, and modern web technologies. This comprehensive course takes you from beginner to advanced React developer.

🎥 **[Watch the Full Course on YouTube](https://www.youtube.com/watch?v=X2Rcp87yl4s)**

## 📚 Course Overview

This hands-on project covers everything you need to master React in 2025:
- React 19 fundamentals and advanced patterns
- State management with Zustand
- Routing with TanStack Router
- Data fetching with TanStack Query
- Authentication with Clerk
- Testing with Vitest and React Testing Library
- Performance optimization techniques
- Production deployment

## 🗂️ Course Modules

### Module 0: Introduction
- Course overview and what you'll build
- Technologies: React, Vite, TypeScript, Tailwind CSS, Zustand
- Setting up your learning environment

### Module 1: Kickoff & Setup
- Project setup with Vite + TypeScript
- Folder structure & code organization
- Development environment configuration

### Module 2: Foundational UI Components
- Building Header and Hero components
- Setting up Tailwind CSS v4
- Responsive layout (mobile → desktop)
- CSS best practices

### Module 3: Building Movie Components
- Rendering lists in React
- Props and TypeScript types
- Integrating Shadcn UI components
- Styling MovieList and MovieCard components
- **Homework**: Add pagination numbers

### Module 4: Search Functionality
- `useState` hook for search state
- Event handling (onClick, onChange)
- Building a search bar component
- **Homework**: 
  - Dismiss search when clicking away
  - Implement debouncing (500ms delay)

### Module 5: State Management with Zustand
- When local state breaks down
- Introduction to Zustand store
- Global state management patterns
- Search implementation with Zustand

### Module 6: Routing Implementation
- Setting up TanStack Router
- Creating routes and navigation
- Route parameters and dynamic routing

### Module 7: Data & APIs
- `useEffect` hook deep dive
- Fetching data from TMDB API
- Handling loading and error states
- Environment variables and API keys
- Creating custom hooks (`useMovies`, `useSearchMovies`)
- **Homework**: Implement `useSearchMovies` hook
- **Reading**: 
  - [useEffect Guide by Dan Abramov](https://overreacted.io/a-complete-guide-to-useeffect/)
  - [TMDB API Documentation](https://api.themoviedb.org/3/movie/popular?language=en-US)

### Module 8: Testing & Accessibility
#### Accessibility
- Chrome and Firefox accessibility tools
- Keyboard navigation testing
- **Homework**: Test with screen reader

#### Testing
- Unit testing with Vitest
- Component testing with React Testing Library
- Testing custom hooks
- Testing edge cases (empty props, null values, error states)
- End-to-end testing concepts
- **Homework**: Add test cases for your custom hooks

### Module 9: Authentication
- Integrating [Clerk](https://go.clerk.com/CYrvZF2) for authentication
- Protected routes
- User session management
- **Homework**: Add email field in banner

### Module 10: Advanced Data Loading
- TanStack Query for data fetching
- Fixing useEffect bugs
- `useRef` for infinite scroll
- Implementing infinite queries
- **Homework**: Implement infinite scroll with IntersectionObserver

### Module 11: Homework Module - Implement Video Player
- Building a VideoPlayer component
- Opening movies in new pages
- Accessible video controls

#### Sample Movies for Testing
Use these free sample videos (Creative Commons licensed) to test your VideoPlayer component:

1. **Big Buck Bunny** (Blender Foundation)
   - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
   - Description: A giant rabbit with a heart bigger than himself seeks comical revenge on three rodents

2. **Sintel** (Blender Foundation)
   - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4`
   - Description: A 15-minute independently produced short film about a girl's quest

3. **Tears of Steel** (Blender Foundation)
   - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4`
   - Description: A compelling sci-fi film made with open source tools

4. **Elephant Dream** (Blender Foundation)
   - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4`
   - Description: The first Blender Open Movie from 2006

5. **For Bigger Blazes** (Google)
   - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4`
   - Description: HBO GO with Chromecast demo

6. **For Bigger Escape** (Google)
   - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4`
   - Description: Chromecast with Google Play Movies demo

7. **For Bigger Fun** (Google)
   - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4`
   - Description: Chromecast introduction video

8. **For Bigger Joyrides** (Google)
   - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4`
   - Description: Chromecast with YouTube demo

9. **For Bigger Meltdowns** (Google)
   - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4`
   - Description: Chromecast with Netflix demo

10. **Subaru Outback On Street And Dirt** (Garage419)
    - URL: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4`
    - Description: Smoking Tire takes the Subaru Outback to new heights

**Note**: All videos are hosted on Google Cloud Storage and are free to use for testing purposes. They are licensed under Creative Commons and are perfect for building and testing your video player functionality.

### Module 12: Performance Optimization
- Core Web Vitals (LCP, FCP)
- `React.memo` for component memoization
- `useMemo` and `useCallback` hooks
- Image optimization and lazy loading
- Code splitting strategies

### Module 13: Deployment
- Production build optimization
- Deploying to Vercel/Netlify
- Environment configuration for production
- Final project walkthrough

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (preferred) or npm/yarn
- TMDB API key ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shrutikapoor08/youtube-react-course.git
cd youtube-react-course
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env` file at the project root:
```env
VITE_TMDB_AUTH_TOKEN=your_tmdb_bearer_token_here
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
```

4. Run the development server:
```bash
pnpm dev
```

5. Run tests:
```bash
pnpm test
```

## 📂 Project Structure

```
youtube-react-course/
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MovieCard.tsx
│   │   ├── MovieList.tsx
│   │   ├── SearchBar.tsx
│   │   └── VideoPlayer.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useMovies.ts
│   │   └── useSearchMovies.ts
│   ├── store/            # Zustand store
│   │   └── searchStore.ts
│   ├── routes/           # TanStack Router routes
│   ├── data/             # Mock data and types
│   ├── __tests__/        # Test files
│   └── tests/            # Additional tests
├── public/               # Static assets
├── .env                  # Environment variables
├── vite.config.ts        # Vite configuration
├── vitest.config.ts      # Vitest configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🌿 Branch Structure

- `main` — Stable baseline and final course snapshot
- `module-5-search` — Search feature implementation
- `module-8-fetch-api` — TMDB API integration
- `module-9-testing` — Testing examples and setup
- `module-11-tanstack-query` — TanStack Query migration

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **State Management**: Zustand
- **Routing**: TanStack Router
- **Data Fetching**: TanStack Query
- **Authentication**: Clerk
- **Testing**: Vitest + React Testing Library
- **API**: TMDB (The Movie Database)

## 📖 Additional Resources

### Courses
- [React Fundamentals by Shruti Kapoor (O'Reilly)](https://www.oreilly.com/videos/react-fundamentals-building/0636920981428/)
- [Become a FullStack Developer (Scrimba)](https://scrimba.com/fullstack-path-c0fullstack?via=shrutikapoor)

### Interview Prep
- [Practice JavaScript Interviews](https://www.greatfrontend.com/questions/js?fpr=shruti79)
- [FREE React Interview Questions Book](https://bit.ly/free-react-guide)

### Reading Materials
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [Netflix Design System - Hawkins](https://netflixtechblog.com/hawkins-diving-into-the-reasoning-behind-our-design-system-964a7357547)

## 💬 Community & Support

- **Discord**: [Join our community](https://bit.ly/shruti-discord)
- **Newsletter**: [Stay updated](https://bit.ly/shruti-newsletter)
- **1:1 Guidance**: [Book a session](https://topmate.io/shrutikapoor08)

## 🎯 Learning Outcomes

By completing this course, you will:
- ✅ Master React 19 fundamentals and advanced patterns
- ✅ Build production-ready applications with TypeScript
- ✅ Implement complex state management solutions
- ✅ Write comprehensive tests for React applications
- ✅ Optimize application performance
- ✅ Deploy applications to production
- ✅ Have a portfolio-worthy project for interviews

## 📝 Homework Assignments

Throughout the course, you'll complete hands-on assignments:
- Implement debounced search
- Add pagination to movie lists
- Create custom hooks for data fetching
- Test components with screen readers
- Build infinite scroll functionality
- Optimize component rendering

## 🤝 Contributing

Found an issue or want to improve the course? Feel free to:
- Open an issue
- Submit a pull request
- Join the Discord community for discussions

## 🔗 Links

- **GitHub**: [shrutikapoor08/youtube-react-course](https://github.com/shrutikapoor08/youtube-react-course)
- **YouTube**: [Full Course Video](https://www.youtube.com/watch?v=X2Rcp87yl4s)
- **Website**: [shrutikapoor.dev](https://shrutikapoor.dev/)
- **Twitter**: [@shrutikapoor08](https://twitter.com/shrutikapoor08)

## 📄 License

This project is open source and available for educational purposes.

---

⭐ If you find this course helpful, please star the repository and share it with others!

**Made with ❤️ by [Shruti Kapoor](https://shrutikapoor.dev/)**
