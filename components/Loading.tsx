import Image from 'next/image'

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <Image
          src="/loading.png" 
          alt="Loading icon"
          width={100}
          height={100}
        />
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span className="text-green-600">✔️</span>
            <span>Searching 400+ flights</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-600">✔️</span>
            <span>Attaching company rules</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
            <span>Serving best results</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoadingPage;


export const LoadingBar = () => {
    return (
      <div className="fixed top-20 left-0 w-full h-1 bg-gray-200 overflow-hidden z-50">
        <div
          className="absolute h-full bg-blue-500"
          style={{
            animation: 'slideLoading 2s infinite ease-in-out',
          }}
        ></div>
      </div>
    );
  };
  