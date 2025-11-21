import { useParams, Link } from 'react-router-dom';
import { drones } from '../data/drones';

const Booking = () => {
  const { droneId } = useParams();
  const drone = drones.find(d => d.id === droneId);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted! We will contact you soon to confirm your training session.');
  };

  if (!drone) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Drone Not Found</h1>
          <Link
            to="/training"
            className="text-sky-600 font-normal hover:text-sky-400 transition-colors"
          >
            Back to Training
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={drone.image}
                alt={drone.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-8">
              <h1 className="text-2xl font-medium text-gray-900 mb-4">
                Book Training: {drone.name}
              </h1>
              <p className="font-normal text-gray-600 mb-6">
                {drone.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Features:</h3>
                <ul className="font-light text-sm text-gray-600 space-y-1">
                  {drone.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-normal text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-normal text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-normal text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-normal text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-sky-600 text-white py-3 px-4 rounded-full font-medium hover:bg-sky-400 transition-colors"
                  >
                    Submit Booking
                  </button>
                  <Link
                    to="/training"
                    className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-full font-medium hover:bg-gray-400 transition-colors text-center"
                  >
                    Back to Training
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

