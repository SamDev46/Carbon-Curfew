import React, { useState } from "react";

export default function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [routeInfo, setRouteInfo] = useState(null);

  const fetchRoute = () => {
    const dummyResponse = {
      bestRoute:
        "Take Bus 21 from College to Main Junction, then Bus 7 to Campus Plaza",
      time: "35 mins",
      cost: "₹15",
      carbonSaved: "220g CO₂",
    };
    setRouteInfo(dummyResponse);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Carbon Curfew</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4">
        <input
          className="w-full border rounded p-2"
          placeholder="Enter Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          className="w-full border rounded p-2"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          onClick={fetchRoute}
        >
          Get Optimized Route
        </button>

        {routeInfo && (
          <div className="bg-green-100 p-4 rounded text-sm text-gray-700 mt-4">
            <p>
              <strong>Route:</strong> {routeInfo.bestRoute}
            </p>
            <p>
              <strong>Time:</strong> {routeInfo.time}
            </p>
            <p>
              <strong>Cost:</strong> {routeInfo.cost}
            </p>
            <p>
              <strong>Carbon Saved:</strong> {routeInfo.carbonSaved}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
