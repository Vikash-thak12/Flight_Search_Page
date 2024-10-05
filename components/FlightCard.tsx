interface flightProps {
    departure: string, 
    arrival: string, 
    flight: string, 
    time: string,
    layover: string

}

// FlightDetailCard component (as before)
const FlightDetailCard = ({ departure, arrival, flight, time, layover }: flightProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-start">
        {/* <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          {!layover && <div className="h-full border-l-2 border-gray-400"></div>}
        </div> */}
        <div className="ml-4">
          <p className="text-blue-500 text-xs">{departure}</p>
          <p className="font-medium text-xs">{arrival}</p>
        </div>
        
      </div>
      {!layover && (
        <div className="flex items-end justify-end ml-8">
          <div className="ml-4 border">
            <p className="text-xs">{flight}</p>
            <p className="text-gray-500 text-xs">{time}</p>
          </div>
        </div>  
      )}
      {layover && (
        <div className="flex items-center ml-8">
          <p className="text-gray-500">Layover {layover}</p>
        </div>
      )}
    </div>
  );
};


export default FlightDetailCard