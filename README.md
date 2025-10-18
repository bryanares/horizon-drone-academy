# Horizon Drone Academy Website

A minimal aviation school website built with Vite + React + Tailwind CSS for drone training and aviation education.

## Features

- **Home Page**: Hero section, about us, services overview, and contact form
- **Drone Training**: Browse different drone training programs with booking functionality
- **Booking System**: Dynamic booking pages for specific drone types
- **User Authentication**: Login and signup pages (UI only)
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Navigation**: Clean navigation with active route highlighting

## Tech Stack

- **React** (JavaScript)
- **Vite** (Build tool)
- **Tailwind CSS** (Styling)
- **React Router DOM** (Navigation)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Training.jsx
│   ├── Booking.jsx
│   ├── Profile.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── data/
│   └── drones.js
├── App.jsx
└── main.jsx
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

## Pages & Routes

- `/` - Home page with hero section and services
- `/training` - Drone training programs
- `/booking/:droneId` - Booking form for specific drone
- `/profile` - User profile with login/signup options
- `/login` - Login form
- `/signup` - Registration form

## Features Implemented

✅ Responsive navigation with active route highlighting  
✅ Hero section with aviation-themed branding  
✅ Services section with 4 key offerings  
✅ Contact form (UI only)  
✅ Drone training cards with booking functionality  
✅ Dynamic booking pages with route parameters  
✅ User authentication pages (UI only)  
✅ Mobile-responsive design  
✅ Clean aviation-themed styling  

## Future Enhancements

- Backend integration for form submissions
- User authentication system
- Database integration for bookings
- Payment processing
- Admin dashboard
- Email notifications