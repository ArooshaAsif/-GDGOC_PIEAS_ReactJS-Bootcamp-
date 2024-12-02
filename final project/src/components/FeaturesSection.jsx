import React from 'react';  

const FeaturesSection = () => {  
  return (  
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">  
      <div>  
        <h2 className="text-2xl font-bold">Features</h2>  
        <ul className="mt-4 space-y-2">  
          <li>Todo List</li>  
          <li>Calendar</li>  
          <li>Reminders</li>  
          <li>Planning</li>  
        </ul>  
      </div>  
    </section>  
  );  
};  

export default FeaturesSection;  
