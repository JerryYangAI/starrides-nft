# Overview

This is a full-stack web application built with React, TypeScript, and Express.js for the StarRides Founders Key NFT landing page. The project features a React frontend with shadcn/ui components, an Express.js backend API, and uses Drizzle ORM with PostgreSQL for database operations. The application is configured with Vite for fast development and building, TailwindCSS for styling, and includes comprehensive UI components for building modern web applications.

The website showcases StarRides Founders Key - a limited edition collection of 500 NFTs offering exclusive global luxury lifestyle experiences and membership benefits across 11 major cities including Hong Kong, Macau, Singapore, Seoul, Tokyo, Osaka, New York, London, Paris, Monte Carlo, and Las Vegas.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with a simple Switch/Route pattern
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Styling**: TailwindCSS with custom CSS variables for theming and shadcn/ui component system
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Forms**: React Hook Form with Hookform resolvers for form validation
- **Build System**: Vite with custom configuration for development and production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage) that can be swapped for database implementations
- **API Structure**: RESTful API design with centralized route registration
- **Development Server**: Custom Vite integration for seamless full-stack development

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **User Model**: Basic user table with id, username, and password fields
- **Migrations**: Drizzle Kit configured for database migrations in `/migrations` directory

## Project Structure
- **Monorepo Structure**: Client and server code in separate directories with shared types
- **Client**: React frontend in `/client` directory with src structure
- **Server**: Express backend in `/server` directory
- **Shared**: Common types and schemas in `/shared` directory
- **Configuration**: Centralized config files at root level (tsconfig, tailwind, vite, drizzle)

## Development Workflow
- **Hot Reload**: Vite dev server with HMR for frontend changes
- **TypeScript**: Full TypeScript support across frontend, backend, and shared code
- **Path Aliases**: Configured path mapping for clean imports (@/, @shared/, @assets/)
- **Error Handling**: Runtime error overlay for development debugging

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL using `@neondatabase/serverless` driver
- **Connection**: Configured through `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM for type-safe database operations

## UI Framework
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built component system built on Radix UI primitives
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including Font Awesome

## Styling and Theming
- **TailwindCSS**: Utility-first CSS framework with custom configuration
- **Class Variance Authority**: For variant-based component styling
- **clsx**: Utility for constructing className strings conditionally

## Form and Data Handling
- **React Hook Form**: Forms with validation and error handling
- **Zod**: Schema validation for forms and API data
- **TanStack Query**: Server state management and caching
- **date-fns**: Date manipulation and formatting

## Development Tools
- **Vite**: Build tool and dev server with React plugin
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution for development server
- **PostCSS**: CSS processing with Autoprefixer

## Replit Integration
- **Replit Plugins**: Custom Vite plugins for Replit environment integration
- **Development Banner**: Replit-specific development mode indicators