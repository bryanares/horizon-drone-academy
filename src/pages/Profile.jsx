import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Profile
            </h1>
            <p className="text-gray-600">
              Access your account or create a new one
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/login"
              className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors block text-center"
            >
              Login
            </Link>
            
            <Link
              to="/signup"
              className="w-full bg-white text-blue-900 py-4 px-6 rounded-lg font-semibold text-lg border-2 border-blue-900 hover:bg-blue-50 transition-colors block text-center"
            >
              Sign Up
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              New to Horizon Drone Academy? Create an account to get started with your training journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
