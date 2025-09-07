# Copilot Instructions for Portfolio Project

## Project Overview
This is a React-based personal portfolio website built with Vite, showcasing projects, experience, education, and skills. The project uses modern web technologies and follows component-based architecture.

## Tech Stack
- **Frontend**: React 18.3.1 with JSX
- **Build Tool**: Vite 5.4.8
- **Styling**: Tailwind CSS 3.4.13
- **Icons**: React Icons 5.3.0, FontAwesome React
- **Linting**: ESLint 9.11.1
- **Package Manager**: npm
- **Deployment**: GitHub Pages

## Project Structure
```
src/
├── App.jsx                 # Main app component with ThemeProvider
├── main.jsx               # Entry point
├── components/
│   ├── HomePage.jsx       # Main layout component
│   ├── Theme/
│   │   └── ThemeContext.jsx # Theme management (dark/light mode)
│   └── pages/             # Feature components
│       ├── ProfileCard.jsx
│       ├── TechStack.jsx
│       ├── Experience.jsx
│       ├── Education.jsx
│       ├── Certificate.jsx
│       ├── Links.jsx
│       ├── ThemeCard.jsx
│       ├── Themes.jsx
│       ├── MyProjects/
│       │   └── MyProjects.jsx
│       ├── GitProject/
│       │   └── GitProjects.jsx
│       ├── Articles/
│       │   └── Articles.jsx
│       └── Publications/
│           └── Publications.jsx
└── assets/               # Images and static files
```

## Coding Standards & Best Practices

### React Component Patterns
- Use functional components with hooks
- Follow the existing component structure with default exports
- Use React Context for global state (theme management)
- Import hooks at the top: `import { useContext, useState } from "react"`

### Theme System
- The project uses a custom theme context with `isDarkMode` boolean
- Always use `useContext(ThemeContext)` to access theme state
- Apply conditional styling: `${isDarkMode ? 'dark-classes' : 'light-classes'}`
- Use theme utility functions from `Themes.jsx`:
  - `getComponent(isDarkMode)` - for component backgrounds
  - `getText(isDarkMode)` - for text colors
  - `getThemeClassNames(isDarkMode)` - for comprehensive styling

### Tailwind CSS Usage
- Use custom color scheme defined in `tailwind.config.js`:
  - `light`: background, text, primary colors
  - `dark`: background, text, primary colors
  - `default`: background, text, primary colors
- Common patterns:
  - Responsive grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2`
  - Spacing: `p-5`, `m-5`, `gap-5`
  - Shadows: `shadow-lg shadow-black`
  - Rounded corners: `rounded-md`

### Component Structure Template
```jsx
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { getComponent, getText } from "./Themes";

const ComponentName = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="mt-5">
      <div className={`${getComponent(isDarkMode)} py-5 rounded-md shadow-lg shadow-black`}>
        <h1 className={`${getText(isDarkMode)} text-xl font-semibold ml-5 p-5`}>
          Section Title
        </h1>
        {/* Component content */}
      </div>
    </div>
  );
};

export default ComponentName;
```

### File Naming Conventions
- Components: PascalCase (e.g., `MyProjects.jsx`)
- Folders: PascalCase for component folders (e.g., `MyProjects/`)
- Assets: lowercase with hyphens (e.g., `profile-image.jpg`)
- Use `.jsx` extension for React components

### Import Patterns
- React hooks from react: `import { useContext, useState } from "react"`
- Components: relative imports `import Component from "./Component"`
- Assets: relative imports `import image from "../../../assets/image.png"`
- Context: `import { ThemeContext } from "../Theme/ThemeContext"`

### Data Management
- Project data stored as arrays of objects within components
- Image imports at the top of files
- Use descriptive object properties: `title`, `img`, `des` (description)

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Common responsive patterns:
  - `w-full lg:flex` - full width on mobile, flex on large screens
  - `grid-cols-1 md:grid-cols-2 lg:grid-cols-2` - responsive grid
  - `p-5` for consistent padding

### Performance Considerations
- Use React Context sparingly (currently only for theme)
- Optimize images and assets
- Use `key` prop for mapped elements
- Import images statically for better optimization

## Common Tasks

### Adding New Sections
1. Create component in `src/components/pages/`
2. Import and add to `HomePage.jsx`
3. Follow existing theme integration pattern
4. Use consistent styling with other sections

### Theme Integration
- Always use `isDarkMode` from ThemeContext
- Apply theme classes conditionally
- Use utility functions from `Themes.jsx`
- Test both light and dark modes

### Asset Management
- Add images to `src/assets/`
- Import at component level
- Use descriptive names
- Optimize for web performance

### Styling Guidelines
- Use Tailwind utility classes
- Follow existing spacing patterns (increments of 5)
- Apply consistent shadows and rounded corners
- Ensure responsive behavior

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Code Quality
- Follow ESLint configuration
- Use meaningful variable and function names
- Keep components focused and single-purpose
- Comment complex logic
- Maintain consistent indentation and formatting

## Accessibility
- Use semantic HTML elements
- Ensure proper contrast in both themes
- Add appropriate alt text for images
- Consider keyboard navigation

When suggesting code, always follow these patterns and maintain consistency with the existing codebase structure and styling approach.
