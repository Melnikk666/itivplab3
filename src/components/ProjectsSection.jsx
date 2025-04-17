import React from 'react';

const ProjectsSection = () => (
  <section>
    <h2>Наши проекты</h2>
    <p className="about-project">
      Компания IDEA SOFT гордится тем, что успешно реализует проекты в различных отраслях, предоставляя передовые IT-решения для своих клиентов. Мы специализируемся на разработке инновационных программных продуктов, которые помогают оптимизировать бизнес-процессы, повышать эффективность и улучшать взаимодействие с клиентами.
    </p>

    <section className="projects-container">
      <div className="project-wrapper" data-bg="image/project1.jpg">
        <div className="project">
          <div className="overlay">
            <p className="project-text">
              Проект "SmartRetail" — это инновационное<br />
              решение для автоматизации розничной торговли.<br />
              Оно включает в себя систему управления<br />
              запасами, аналитику продаж<br />
              и интеграцию с онлайн-кассами.
            </p>
          </div>
        </div>
        <h3 className="project-title">[ SmartRetail ]</h3>
      </div>

      <div className="project-wrapper" data-bg="image/project2.jpg">
        <div className="project">
          <div className="overlay">
            <p className="project-text">
              Проект "HealthMonitor" предназначен для<br />
              медицинских учреждений и частных клиник.<br />
              Это комплексное программное обеспечение для мониторинга здоровья пациентов, которое<br />
              включает в себя электронные<br />
              медицинские карты, систему напоминаний о приеме лекарств.
            </p>
          </div>
        </div>
        <h3 className="project-title">[ HealthMonitor ]</h3>
      </div>

      <div className="project-wrapper" data-bg="image/project3.jpg">
        <div className="project">
          <div className="overlay">
            <p className="project-text">
              Проект "EduCloud" — это облачная платформа для образовательных учреждений, которая позволяет школам и университетам эффективно управлять учебным процессом.
            </p>
          </div>
        </div>
        <h3 className="project-title">[ EduCloud ]</h3>
      </div>
    </section>
  </section>
);

export default ProjectsSection;
