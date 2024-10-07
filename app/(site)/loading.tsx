import React from 'react'

const Loading = () => {

  return (
    <div className="flex items-center justify-center h-screen">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-100">
          Durgesh's Portfolio  
        </h2>

        <div className="flex items-center justify-center mt-4">
          <div className="text-4xl text-blue-500 dark:text-blue-400">
            &lt;/&gt; 
          </div>
        </div>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Loading awesome projects... 
        </p>

        <div className="w-full h-1 bg-gray-300 rounded-full mt-4 mx-auto max-w-md">
          <div 
            className="h-1 bg-blue-500 rounded-full"
            style={{width: "75%"}}>
          </div>
        </div>

      </div>

    </div>
  );

};

export default Loading;
