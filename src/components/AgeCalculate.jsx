import { useState } from 'react';
import './AgeCalculate-style.css'



const AgeCalculate = () => {
  
    const [birthDate, setBirthDate] = useState('');
    const [result, setResult] = useState('');
  
    const calculateAge = () => {
      let inputDate = new Date(birthDate);
  
      let d1 = inputDate.getDate();
      let m1 = inputDate.getMonth() + 1;
      let y1 = inputDate.getFullYear();
  
      let today = new Date();
  
      let d2 = today.getDate();
      let m2 = today.getMonth() + 1;
      let y2 = today.getFullYear();
  
      let d3, m3, y3;
  
      y3 = y2 - y1;
  
      if (m2 >= m1) {
        m3 = m2 - m1;
      } else {
        y3--;
        m3 = 12 + m2 - m1;
      }
  
      if (d2 >= d1) {
        d3 = d2 - d1;
      } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
      }
  
      if (m3 < 0) {
        m3 = 11;
        y3--;
      }
  
      setResult(
        `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`
      );
    };
  
    const getDaysInMonth = (year, month) => {
      return new Date(year, month, 0).getDate();
    };
  
  return (
    <>
      <div className="container">
        <div className="calculator">
          <h1>React Js<br /><span> Age Calculator</span></h1>
          
          <div className="input-box">
            <input
              type="date"
              id="date"
              max={new Date().toISOString().split('T')[0]}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <button onClick={calculateAge}>Calculate</button>
          </div>

          <p id="result" dangerouslySetInnerHTML={{ __html: result }}/>
        </div>
      </div>
    </>
  )
}

export default AgeCalculate