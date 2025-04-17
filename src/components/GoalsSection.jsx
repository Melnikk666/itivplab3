import React from "react";

const goals = [
  {
    number: "01",
    title: "Повышение эффективности бизнес-процессов",
    description: `Разработка ПО и IT-решений, которые автоматизируют рутинные задачи, упрощают управление и оптимизируют операционные процессы, помогая клиентам сократить время и затраты.`,
    image: "/image/goal1.jpg"
  },
  {
    number: "02",
    title: "Увеличение клиентского опыта",
    description: `Создание пользовательских интерфейсов и взаимодействий, которые делают услуги и продукты компании более доступными, удобными и приятными для конечных пользователей.`,
    image: "/image/goal2.jpg"
  },
  {
    number: "03",
    title: "Обеспечение безопасности данных",
    description: `Разработка и внедрение решений для защиты конфиденциальной информации и данных клиентов. Это включает в себя меры по предотвращению кибератак, защиту от несанкционированного доступа и соответствие нормативным требованиям.`,
    image: "/image/goal3.jpg"
  }
];

const GoalsSection = () => {
  return (
    <section>
      <h2>Каковы наши цели?</h2>
      {goals.map((goal, index) => (
        <div className="container-goals" key={index}>
          <div className="goal">
            <h3>{goal.number}</h3>
            <p>{goal.title}</p>
            <p>{goal.description}</p>
          </div>
          <img src={goal.image} className="img-goal" alt={`goal${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default GoalsSection;
