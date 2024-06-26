import React, { useState } from 'react';
import '../styles/BMI.css'; // Import CSS for BMI styles

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    if (height && weight) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI
      setBmi(bmiValue);
      determineBMICategory(bmiValue);
    }
  };

  const determineBMICategory = (bmi) => {
    if (bmi < 18.5) {
      setCategory('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setCategory('Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  return (
    <div className="bmi-page">
      <h2 className="bmi-header">BMI Calculator</h2>
      <form onSubmit={calculateBMI} className="bmi-form">
        <div className="input-group">
          <label className="input-label">
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="input-field"
              placeholder="Enter height in cm"
            />
          </label>
        </div>
        <div className="input-group">
          <label className="input-label">
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="input-field"
              placeholder="Enter weight in kg"
            />
          </label>
        </div>
        <button type="submit" className="calculate-btn">Calculate BMI</button>
      </form>
      {bmi && (
        <div className="result-container">
          <h2 className="result-header">Your BMI: {bmi}</h2>
          <h3 className="result-category">Category: {category}</h3>
        </div>
      )}
    </div>
  );
};

export default BMI;
