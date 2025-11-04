import droneTrainingImg from '../assets/images/instructor1.jpg';
import dronePhotographyImg from '../assets/images/photography-2.jpg';
import droneVideographyImg from '../assets/images/videography.jpg';
import droneAssemblyImg from '../assets/images/assembly.jpg';
import droneMainenanceImg from '../assets/images/drone-maintenance.jpg';
import droneSafetyImg from '../assets/images/flight-safety.jpg';

export const drones = [
    {
        id: 'pilot-training',
        name: 'Drone Pilot Training',
        description: 'Master the fundamentals of drone operation with our comprehensive pilot training program.',
        image: droneTrainingImg,
        features: ['Flight Controls', 'Navigation Systems', 'Emergency Procedures', 'Weather Assessment'],
        duration: '40 hours',
        level: 'Beginner to Intermediate'
    },
    {
        id: 'photography',
        name: 'Drone Photography',
        description: 'Capture stunning aerial images with professional photography techniques.',
        image: dronePhotographyImg,
        features: ['Aerial Composition', 'Camera Settings', 'Lighting Techniques', 'Post-Processing'],
        duration: '24 hours',
        level: 'All Levels'
    },
    {
        id: 'videography',
        name: 'Aerial Videography',
        description: 'Create cinematic aerial videos with advanced filming techniques.',
        image: droneVideographyImg,
        features: ['Cinematic Movements', 'Storytelling', 'Post-Production', 'Color Grading'],
        duration: '32 hours',
        level: 'Intermediate to Advanced'
    },
    {
        id: 'assembly',
        name: 'Drone Assembly',
        description: 'Build and customize drones from components to finished aircraft.',
        image: droneAssemblyImg,
        features: ['Electronics', 'Motor Systems', 'Flight Controllers', 'Frame Construction'],
        duration: '28 hours',
        level: 'Intermediate'
    },
    {
        id: 'maintenance',
        name: 'Drone Maintenance',
        description: 'Keep your drone in perfect condition with professional maintenance techniques.',
        image: droneMainenanceImg,
        features: ['Troubleshooting', 'Component Replacement', 'Preventive Care', 'Diagnostic Tools'],
        duration: '20 hours',
        level: 'All Levels'
    },
    {
        id: 'safety',
        name: 'Flight Safety Training',
        description: 'Essential safety protocols and emergency procedures for safe drone operations.',
        image: droneSafetyImg,
        features: ['Safety Protocols', 'Airspace Regulations', 'Risk Management', 'Emergency Procedures'],
        duration: '16 hours',
        level: 'All Levels'
    }
];

