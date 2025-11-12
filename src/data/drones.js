import droneTrainingImg from "../assets/images/instructor1.jpg";
import dronePhotographyImg from "../assets/images/photography-2.jpg";
import droneVideographyImg from "../assets/images/videography.jpg";
import droneAssemblyImg from "../assets/images/assembly.jpg";
import droneMainenanceImg from "../assets/images/drone-maintenance.jpg";
import droneSafetyImg from "../assets/images/flight-safety.jpg";

export const drones = [
  {
    id: "pilot-training",
    name: "Remote Pilot Licence (Multi-Rotor)",
    description:
      "The Remote Drone Pilot Training (Multi-Rotor Rating) program equips trainees with the skills and certification required to operate drones for commercial purposes. This license is essential for anyone intending to fly drones outside designated flying zones, in compliance with aviation regulations.",
    image: droneTrainingImg,
    features: [
      "Human Performance",
      "Air Law",
      "Human performance",
      "AUS Technical Knowledge",
      "Meteorology",
      "Operation Procedures",
      "Navigation in Drones",
    ],
    duration: "2-3 weeks",
    level: "Beginner to Intermediate",
  },
  {
    id: "photography",
    name: "Holiday Drone Program",
    description:
      "Start your aviation journey with our Holiday Drone Training program designed for young enthusiasts. This 2-week course offers hands-on experience in drone flying, photography, and basic aerodynamics, providing a solid foundation for future learning.",
    image: dronePhotographyImg,
    features: [
      "Introduction to Drones & Aerodynamics",
      "Drone Safety & Regulations",
      "Basic Flight Training",
      "Drone Simulator Flying",
      "Aircraft Modelling",
      "Certificate of Completion",
    ],
    duration: "2 weeks",
    level: "Beginner",
  },
  {
    id: "videography",
    name: "Advanced Drone Program",
    description:
      "Join our Advanced Holiday Drone Program to elevate your drone skills. This intensive 3-week course covers advanced flight techniques, with drone assembly and innovation projects designed for young enthusiasts eager to push their limits.",
    image: droneVideographyImg,
    features: [
      "Drone Assembly",
      "Drone Design and Programming",
      "Drone Filming and photography",
      "RC Aircraft Model Building",
      "Drone Career Paths",
      "KCAA RPA Certification",
    ],
    duration: "3 weeks",
    level: "Advanced",
  },
  {
    id: "assembly",
    name: "Hobbyist Licence",
    description:
      "Build and customize drones from components to finished aircraft. Understand electronics, motors, flight controllers, and frame construction.",
    image: droneAssemblyImg,
    features: [
      "Electronics",
      "Motor Systems",
      "Flight Controllers",
      "Frame Construction",
    ],
    duration: "28 hours",
    level: "Intermediate",
  },
  {
    id: "maintenance",
    name: "Specialized Training - Agriculture Rating",
    description:
      "A 7-day Agricultural Spraying Course comprising 2 days of theory and 5 days of practical training. The program equips participants with the skills to safely and efficiently operate agricultural drones for precision spraying. Graduates earn a Certificate of Competency in Agricultural Spraying, demonstrating hands-on expertise and compliance with Kenyan aviation regulations.",
    image: droneMainenanceImg,
    features: [
      "Introduction to agricultural drones",
      "Basics of agronomy and agrochemical application",
      "Aerial spraying science (droplet size, drift control)",
      "Drone systems and regulations (KCAA)",
      "Field troubleshooting and data collection",
      "Chemical handling and drone maintenance",
    ],
    duration: "1 Week",
    level: "Intermediate",
  },
  {
    id: "safety",
    name: "Remote Pilot Licence (Fixed Wing Rating)",
    description:
      "This course equips trainees with the skills and confidence to operate fixed-wing drones effectively. Fixed-wing drones are more advanced than multi-rotor types, making them ideal for industrial applications that require extended flight durations, such as aerial surveying and mapping. The program may be undertaken concurrently with a Remote Pilot Licence (RPL) course.",
    image: droneSafetyImg,
    features: [
      "Theory of Flight",
      "Airspace Regulations",
      "UAS Technical Knowledge",
      "Emergency Procedures",
    ],
    duration: "3-4 weeks",
    level: "Advanced",
  },
];
