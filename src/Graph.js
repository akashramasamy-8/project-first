import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useNavigate } from 'react-router-dom';
export default function Graph() {
  const navigate=useNavigate();
  // Define the dataset directly in the component
  const dataset = [
    { x: 1, y: 30 },
    { x: 2, y: 20 },
    { x: 3, y: 50 },
    { x: 4, y: 40 },
    { x: 5, y: 60 },
  ];
   function gotoHome(){
    navigate('/Home');
   }
  return (
    <div >
        <div className="flex justify-center mb-4">
        <button
          onClick={gotoHome}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Home Page
        </button>
      </div>
       {/* Added flex and margin */}
<div className='flex items-center justify-center min-h-screen'> {/* Center the content */}
  <div className='w-full max-w-3xl p-4'> {/* Container for the chart */}
    <LineChart
      dataset={dataset}
      xAxis={[{ dataKey: 'x' }]}
      series={[{ dataKey: 'y' }]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  </div>
</div>

</div>
  );
}
