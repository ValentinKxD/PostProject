import { useState } from 'react';
import '../css/calculator.css';

export default function Calculator() {
  const [weight, setWeight] = useState('');
  const [distance, setDistance] = useState('');
  const [deliveryType, setDeliveryType] = useState('standart');
  const [cost, setCost] = useState<number | null>(null);
  const [days, setDays] = useState<number | null>(null); 

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weightVal = parseFloat(weight);
    const distanceVal = parseFloat(distance);

    if (isNaN(weightVal) || isNaN(distanceVal)) return;

    if (distanceVal <= 0 || weightVal <= 0) {
      setCost(0);
      setDays(0);
      return; 
    }

    let calculatedCost = 50 + (weightVal * 15) + (distanceVal * 2);
    if (deliveryType === 'express') {
      calculatedCost += 150; 
    }

    let calculatedDays = Math.ceil(distanceVal / 300);
    if (deliveryType === 'express') {
      calculatedDays = Math.max(1, calculatedDays - 1); 
    }
    
    setDays(calculatedDays);
    setCost(Math.round(calculatedCost));
  };

  return (
    <form onSubmit={handleCalculate} className="calculator-form">
      <div className="input-group">
        <label htmlFor="weight">Вага посилки (кг):</label>
        <input 
          id="weight"
          type="number" 
          min="0.1" 
          step="0.1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="tracking-input"
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="distance">Відстань доставки (км):</label>
        <input 
          id="distance"
          type="number" 
          min="1" 
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
          className="tracking-input"
        />
      </div>
      
      <div className='input-group'>
        <label htmlFor="type-delivery">Тип доставки:</label>
        <select 
          id="type-delivery" 
          name="type"
          value={deliveryType}
          onChange={(e) => setDeliveryType(e.target.value)}
          className="tracking-input"
        >
          <option value="standart">Стандартна</option>
          <option value="express">Експрес</option>
        </select>
      </div>

    <div className="button-container">
    <button type="submit" className="tracking-btn">
        Розрахувати
    </button>
    </div>

      {cost !== null && days !== null && (
        <div className="calculator-result">
          <div><strong>Орієнтовна вартість:</strong> {cost} ₴</div>
          <div><strong>Орієнтовний час у дорозі:</strong> {days} дн.</div>
        </div>
      )}
    </form>
  );
}