import Header from './components/header'
import Calculator from './components/calculator'
import Invoice from './components/invoice'
import TechStack from './components/stack'
import './css/App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <nav className="app-nav">
      </nav>

      <main className="app-main">
        <div className="card-wrapper">
              <section className="app-description">
                <h2>Про застосунок</h2>
                <p className="description">
                  PostProject — кросплатформений застосунок у сфері поштової достави/логістики, який працює у браузері на системах ПК: Windows, Linux, MacOS. На системах мобільних пристроїв: Android, iOS, iPadOS. 
                </p>
              </section>
        </div>
        <div className="card-wrapper">
                <section aria-labelledby="features-title" className="features-section">
                <h2 id="features-title">Основні функції застосунку</h2>
                <ul className="features-list">
                  <li><strong>Створення електронної накладної:</strong> оформлюйте відправлення вдома без черг.</li>
                  <li><strong>Калькулятор вартості доставки:</strong> легко та просто розраховуйте вартість доставки до дверей.</li>
                  <li><strong>Орієнтовані дні доставки:</strong> разом з калькулятором прораховуйте коли буде у вас посилка.</li>
                </ul>
              </section>
        </div>
        <div className="card-wrapper">
          <section className="calculator-section">
            <h2>Калькулятор вартості доставки</h2>
            <Calculator />
          </section>
        </div>
      <div className="card-wrapper">
        <section className="invoice-section">
          <h2>Створення електронної накладної</h2>
            <Invoice /> 
        </section>
      </div>
      <div className="card-wrapper">
        <TechStack />
      </div>

      </main>

      <footer className="app-footer">
        <p>&copy; 2026 PostProject. Кросплатформна розробка</p>
      </footer>
    </div>
  )
}

export default App