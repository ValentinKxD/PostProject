import "../css/stack.css"

export default function TechStack() {
  return (
    <section className="tech-stack-section">
      <h2 className="tech-stack-title">Обраний стек технологій</h2>
      <p className="tech-stack-description">
        Для розробки застосунку використано сучасні вебтехнології, що забезпечують високу швидкість роботи, типізацію та зручну підтримку коду. Застосунок працює у будь-якому сучасному браузері.
      </p>
<table className="tech-stack-table">
        <thead>
          <tr>
            <th>Компонент</th>
            <th>Технологія</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Фреймворк</td>
            <td>React</td>
          </tr>
          <tr>
            <td>Мова програмування</td>
            <td>TypeScript</td>
          </tr>
          <tr>
            <td>Оформлення</td>
            <td>CSS</td>
          </tr>
          <tr>
            <td>Інструмент збірки</td>
            <td>Vite</td>
          </tr>
          <tr>
            <td>Платформа запуску</td>
            <td>Браузер / WebView</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}