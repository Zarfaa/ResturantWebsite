import React, { useEffect, useState } from 'react';

let Counter = () =>{
    const counters = [
        { label: 'Orders Delivered', count: 1500 },
        { label: 'Years of Experience', count: 20 },
        { label: 'HAPPY CUSTOMERS', count: 1300 }
      ];
    
      const [animatedCounters, setAnimatedCounters] = useState([]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setAnimatedCounters(prevCounters => {
            return prevCounters.map(counter => {
              const increment = Math.ceil(counter.count / 100); 
              const newCount = Math.min(counter.count, counter.currentCount + increment);
              return { ...counter, currentCount: newCount };
            });
          });
        }, 20);
    
        return () => clearInterval(interval);
      }, []);
    
      useEffect(() => {
        setAnimatedCounters(counters.map(counter => ({ ...counter, currentCount: 0 })));
      }, []);
    
    return(
        <div className="Counter_grid">
        <div className="counters">
         {animatedCounters.map((counter, index) => (
           <div className="counter" key={index}>
             <div className="number">{counter.currentCount}</div>
             <div className="label">{counter.label}</div>
           </div>
         ))}
       </div>
       </div>
    )
}

export default Counter