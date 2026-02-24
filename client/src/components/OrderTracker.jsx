import React from 'react';

const OrderTracker = ({ steps }) => {
  return (
    <div className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-xl">
      <h3 className="font-bold text-lg text-gray-800">Tracking Transparan</h3>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className={`h-4 w-4 rounded-full ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          <p className="text-sm text-gray-600">{step.time} - {step.message}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderTracker;
                  
