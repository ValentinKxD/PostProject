import { useState } from 'react';
import '../css/invoice.css';

export default function Invoice() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [cityA, setCityA] = useState('');
  const [cityB, setCityB] = useState('');
  const [phone, setPhone] = useState('');
  
  const [ttn, setTtn] = useState<string | null>(null);

  const generateTTN = (e: React.FormEvent) => {
    e.preventDefault(); 
    

    const randomNum = Math.floor(10000000000000 + Math.random() * 90000000000000).toString();
    setTtn(randomNum);
  };

  return (
    <div className="simple-generator">
      <form onSubmit={generateTTN} className="invoice-form" style={{ width: '100%' }}>
        
        <div className="input-group">
          <label htmlFor="lastName">Прізвище:</label>
          <input 
            id="lastName"
            type="text" 
            required 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="tracking-input" 
          />
        </div>

        <div className="input-group">
          <label htmlFor="firstName">Ім'я:</label>
          <input 
            id="firstName"
            type="text" 
            required 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="tracking-input" 
          />
        </div>

        <div className="input-group">
          <label htmlFor="cityA">Місто відправлення:</label>
          <input 
            id="cityA"
            type="text" 
            required 
            value={cityA}
            onChange={(e) => setCityA(e.target.value)}
            className="tracking-input" 
          />
        </div>

        <div className="input-group">
          <label htmlFor="cityB">Місто отримання:</label>
          <input 
            id="cityB"
            type="text" 
            required 
            value={cityB}
            onChange={(e) => setCityB(e.target.value)}
            className="tracking-input" 
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Номер телефону:</label>
          <input 
            id="phone"
            type="tel" 
            required 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="tracking-input" 
          />
        </div>

    <div className="button-container">
        <button type="submit" className="tracking-btn">
            Згенерувати номер накладної
        </button>
    </div>
      </form>

      {ttn && (
        <div className="generator-result">
          <p>Ваш новий трек-номер для <strong>{lastName} {firstName}</strong>:</p>
          <strong>{ttn}</strong>
          <p>
            Маршрут: {cityA} ➔ {cityB} <br/>
            Контакт: {phone}
          </p>
        </div>
      )}
    </div>
  );
}