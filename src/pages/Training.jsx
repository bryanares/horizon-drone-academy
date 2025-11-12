import { Link } from 'react-router-dom';
import droneTrainingImg from '../assets/images/instructor1.jpg';
import dronePhotographyImg from '../assets/images/photography-2.jpg';
import droneVideographyImg from '../assets/images/videography.jpg';
import droneAssemblyImg from '../assets/images/assembly.jpg';
import droneMainenanceImg from '../assets/images/drone-maintenance.jpg';
import droneSafetyImg from '../assets/images/flight-safety.jpg';


const Training = () => {
  const trainingPrograms = [
    {
      id: 'assembly',
      name: 'Hobbyist Licence',
      description: 'Build and customize drones from components to finished aircraft. Understand electronics, motors, flight controllers, and frame construction.',
      image: droneAssemblyImg,
      features: ['Electronics', 'Motor Systems', 'Flight Controllers', 'Frame Construction'],
      duration: '28 hours',
      level: 'Intermediate'
    },
    {
      id: 'photography',
      name: 'Holiday Drone Program',
      description: 'Start your aviation journey with our Holiday Drone Training program designed for young enthusiasts. This 2-week course offers hands-on experience in drone flying, photography, and basic aerodynamics, providing a solid foundation for future learning.',
      image: dronePhotographyImg,
      features: ['Introduction to Drones & Aerodynamics', 'Drone Safety & Regulations', 'Basic Flight Training', 'Drone Simulator Flying', 'Aircraft Modelling', 'Certificate of Completion'],
      duration: '2 weeks',
      level: 'Beginner',
      age: '8-17 Years'
    },
    {
      id: 'videography',
      name: 'Advanced Drone Program',
      description: 'Join our Advanced Holiday Drone Program to elevate your drone skills. This intensive 3-week course covers advanced flight techniques, with drone assembly and innovation projects designed for young enthusiasts eager to push their limits.',
      image: droneVideographyImg,
      features: ['Drone Assembly', 'Drone Design and Programming', 'Drone Filming and photography', 'RC Aircraft Model Building', 'Drone Career Paths', 'KCAA RPA Certification'],
      duration: '3 weeks',
      level: 'Advanced',
      age: '8+ Years'
    },
    {
      id: 'pilot-training',
      name: 'Remote Pilot Licence (Multi-Rotor Rating)',
      description: 'The Remote Drone Pilot Training (Multi-Rotor Rating) program equips trainees with the skills and certification required to operate drones for commercial purposes. This license is essential for anyone intending to fly drones outside designated flying zones, in compliance with aviation regulations.',
      image: droneTrainingImg,
      features: ['Human Performance', 'Air Law', 'Human performance', 'AUS Technical Knowledge', 'Meteorology', 'Operation Procedures', 'Navigation in Drones'],
      duration: '2-3 weeks',
      level: 'Beginner to Intermediate',
      age: '18+ Years'
    },

    {
      id: 'safety',
      name: 'Remote Pilot Licence (Fixed Wing Rating)',
      description: 'This course equips trainees with the skills and confidence to operate fixed-wing drones effectively. Fixed-wing drones are more advanced than multi-rotor types, making them ideal for industrial applications that require extended flight durations, such as aerial surveying and mapping. The program may be undertaken concurrently with a Remote Pilot Licence (RPL) course.',
      image: droneSafetyImg,
      features: ['Theory of Flight', 'Airspace Regulations', 'UAS Technical Knowledge', 'Emergency Procedures'],
      duration: '3-4 weeks',
      level: 'Advanced',
      age: '18+ Years'
    },
    {
      id: 'maintenance',
      name: 'Specialized Training - Agriculture Rating',
      description: 'A 7-day Agricultural Spraying Course comprising 2 days of theory and 5 days of practical training. The program equips participants with the skills to safely and efficiently operate agricultural drones for precision spraying. Graduates earn a Certificate of Competency in Agricultural Spraying, demonstrating hands-on expertise and compliance with Kenyan aviation regulations.',
      image: droneMainenanceImg,
      features: ['Introduction to agricultural drones', 'Basics of agronomy and agrochemical application', 'Aerial spraying science (droplet size, drift control)', 'Drone systems and regulations (KCAA)', 'Field troubleshooting and data collection', 'Chemical handling and drone maintenance'],
      duration: '1 Week',
      level: 'Intermediate',
      age: '18+ Years'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-normal text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Drone Training Programs
          </h1>
          <p className="font-light text-lg text-gray-600 max-w-3xl mx-auto">
            Led by certified instructors with backgrounds in aviation, engineering, and data analysis,
            we provide a holistic learning experience that bridges theory with real-world, hands-on practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <img
                src={program.image}
                alt={program.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  {program.name}
                </h3>
                <p className="font-light text-base text-gray-600 mb-4">
                  {program.description}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Duration: {program.duration}</span>
                    <span>Age : {program.age}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Level: {program.level}</span>
                  </div>
                  <h4 className="text-l font-medium text-gray-900 mb-2">
                    What you'll cover:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/booking/${program.id}`}
                  className="inline-block w-full bg-sky-600 text-gray-50 text-center py-3 px-4 rounded-full font-normal hover:bg-sky-400 transition-colors mt-auto"
                >
                  Book Training
                </Link>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-12 text-center">
          <p className="font-normal text-gray-600 mb-4">
            Not sure which program is right for you?
          </p>
          <Link
            to="/"
            className="text-sky-600 font-semibold hover:text-sky-400 transition-colors"
          >
            Contact us for personalized guidance
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Training;
