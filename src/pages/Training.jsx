import { Link } from 'react-router-dom';

const Training = () => {
  const trainingPrograms = [
    {
      id: 'pilot-training',
      name: 'Drone Pilot Training',
      description: 'Master the fundamentals of drone operation with our comprehensive pilot training program. Learn flight controls, navigation systems, and emergency procedures from certified instructors.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
      features: ['Flight Controls', 'Navigation Systems', 'Emergency Procedures', 'Weather Assessment'],
      duration: '40 hours',
      level: 'Beginner to Intermediate'
    },
    {
      id: 'photography',
      name: 'Drone Photography',
      description: 'Capture stunning aerial images with professional photography techniques. Learn composition, lighting, camera settings, and post-processing for breathtaking results.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
      features: ['Aerial Composition', 'Camera Settings', 'Lighting Techniques', 'Post-Processing'],
      duration: '24 hours',
      level: 'All Levels'
    },
    {
      id: 'videography',
      name: 'Aerial Videography',
      description: 'Create cinematic aerial videos with advanced filming techniques. Master smooth movements, storytelling, and professional post-production workflows.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
      features: ['Cinematic Movements', 'Storytelling', 'Post-Production', 'Color Grading'],
      duration: '32 hours',
      level: 'Intermediate to Advanced'
    },
    {
      id: 'assembly',
      name: 'Drone Assembly',
      description: 'Build and customize drones from components to finished aircraft. Understand electronics, motors, flight controllers, and frame construction.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
      features: ['Electronics', 'Motor Systems', 'Flight Controllers', 'Frame Construction'],
      duration: '28 hours',
      level: 'Intermediate'
    },
    {
      id: 'maintenance',
      name: 'Drone Maintenance',
      description: 'Keep your drone in perfect condition with professional maintenance techniques. Learn troubleshooting, component replacement, and preventive care.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
      features: ['Troubleshooting', 'Component Replacement', 'Preventive Care', 'Diagnostic Tools'],
      duration: '20 hours',
      level: 'All Levels'
    },
    {
      id: 'safety',
      name: 'Flight Safety Training',
      description: 'Essential safety protocols and emergency procedures for safe drone operations. Learn weather assessment, airspace regulations, and risk management.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
      features: ['Safety Protocols', 'Airspace Regulations', 'Risk Management', 'Emergency Procedures'],
      duration: '16 hours',
      level: 'All Levels'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Drone Training Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Led by certified instructors with backgrounds in aviation, engineering, and data analysis,
            we provide a holistic learning experience that bridges theory with real-world, hands-on practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src={program.image}
                alt={program.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Duration: {program.duration}</span>
                    <span>Level: {program.level}</span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
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
                  className="inline-block w-full bg-blue-900 text-white text-center py-3 px-4 rounded-md font-semibold hover:bg-blue-800 transition-colors"
                >
                  Book Training
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which program is right for you?
          </p>
          <Link
            to="/"
            className="text-blue-900 font-semibold hover:text-blue-700 transition-colors"
          >
            Contact us for personalized guidance
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Training;
