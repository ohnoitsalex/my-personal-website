# Project Structure

This project has been modularized for better maintainability and code organization.

## Directory Structure

```
src/
├── components/           # React components
│   ├── layout/          # Layout components
│   │   ├── Layout.jsx           # Main layout wrapper
│   │   ├── AnimatedBackground.jsx  # Animated background
│   │   ├── Navigation.jsx       # Navigation bar
│   │   └── Footer.jsx           # Footer
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx             # Hero section
│   │   ├── TechnicalExpertise.jsx  # Skills section
│   │   ├── WorkExperience.jsx   # Experience section
│   │   ├── Publications.jsx     # Publications & Education
│   │   ├── Projects.jsx         # Featured projects
│   │   ├── Photography.jsx      # Photography gallery
│   │   └── Contact.jsx          # Contact section
│   ├── ui/              # Reusable UI components
│   │   ├── Lightbox.jsx         # Image lightbox
│   │   └── SectionIcon.jsx      # Section header icon
│   └── index.js         # Component exports
├── hooks/               # Custom React hooks
│   ├── useScrollEffects.js  # Scroll tracking and navigation
│   ├── useLightbox.js       # Lightbox state management
│   └── index.js             # Hook exports
├── data/                # Static content and data
│   └── content.js       # All site content (text, images, etc.)
├── styles/              # Global styles (if needed)
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles

```

## Component Organization

### Layout Components
- **Layout.jsx**: Main layout wrapper that includes background, navigation, footer, and global styles
- **AnimatedBackground.jsx**: Animated mesh gradient background with parallax effect
- **Navigation.jsx**: Responsive navigation bar with mobile menu
- **Footer.jsx**: Site footer with copyright and availability status

### Section Components
Each section is a self-contained component:
- **Hero.jsx**: Landing section with title, tagline, and social links
- **TechnicalExpertise.jsx**: Skills and specializations
- **WorkExperience.jsx**: Work history timeline
- **Publications.jsx**: Publications and education
- **Projects.jsx**: Featured projects showcase
- **Photography.jsx**: Photography gallery with carousel
- **Contact.jsx**: Contact call-to-action

### UI Components
Reusable components:
- **Lightbox.jsx**: Modal for displaying full-size images
- **SectionIcon.jsx**: Animated icon wrapper for section headers

### Custom Hooks
- **useScrollEffects**: Manages scroll position, active section tracking, and smooth scrolling
- **useLightbox**: Manages lightbox open/close state and image display

### Data
- **content.js**: Centralized content management for:
  - Personal information
  - Skills and technologies
  - Work experience
  - Publications and education
  - Projects
  - Photography images

## Adding New Content

### To add a new project:
Edit `src/data/content.js` and add to the `projects` array.

### To add a new work experience:
Edit `src/data/content.js` and add to the `experiences` array.

### To add new photos:
Add images to `/public/images/photography/` and update the `photographyImages` object in `src/data/content.js`.

## Benefits of This Structure

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: UI components can be reused across sections
3. **Maintainability**: Easy to locate and update specific functionality
4. **Scalability**: Easy to add new sections or features
5. **Content Management**: All content in one place for easy updates
6. **Clean Code**: No unused imports or variables
7. **Type Safety**: Clear prop interfaces between components
