import { useEffect, useState } from 'react';
import BmiStats from './bmi_stats';
import './App.css';

function App() {
  const [height, setHt] = useState(0);
  const [weight, setWt] = useState(0);
  const [bmi, setBmi] = useState(0); 

  useEffect(() => {
    if (height > 0 && weight > 0) { 
      setBmi(parseFloat(weight / (height * height)).toFixed(2));
    } else {
      setBmi(0);
    }
  }, [height, weight]);

  return (
    <>
      <div className='Page'>
        <div className='Intro'>
          Health is an important aspect of our lives
        </div>
        <div className='title'>Presenting to you BMI calculator</div>
      </div>

      <div className='Inputs'>
        <p>Enter Height (m)</p>
        <input
          type='number'
          className='ht_in'
          placeholder='Enter value'
          value={height}
          onChange={(event) => setHt(parseFloat(event.target.value))}
        />
        <p>Enter Weight (kg)</p>
        <input
          type='number'
          className='wt_in'
          placeholder='Enter value'
          value={weight}
          onChange={(event) => setWt(parseFloat(event.target.value))}
        />
        <img src="https://images.template.net/106051/obesity-male-bmi-chart-g9ib0.jpg" alt='BMI Table'/>
      </div>
      {/* ✅ Fix component name & prop */}
      <BmiStats bmis={bmi} />
    </>
  );
}

export default App;
