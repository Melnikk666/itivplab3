import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    image: 'image/people1.jpg',
    name: 'Даниил Смирнов',
    comment: `Работали с IDEA SOFT на протяжении 5 лет, и могу с уверенностью сказать, что они превосходят наши ожидания на каждом этапе. Благодарим за надежное сотрудничество!`
  },
  {
    image: 'image/people2.jpg',
    name: 'Александр Кот',
    comment: `Помогли нам автоматизировать ключевые бизнес-процессы и значительно повысить эффективность работы. Их команда профессионалов всегда готова предложить лучшие решения.`
  },
  {
    image: 'image/people3.jpg',
    name: 'Полина Прокофьева',
    comment: `Они всегда на шаг впереди, предлагая инновационные решения и обеспечивая превосходный уровень сервиса. Рекомендую эту компанию всем, кто ищет надежного IT-партнёра.`
  },
];

function Testimonials() {
  return (
    <section>
      <h2>Отзывы наших клиентов</h2>
      <div className="comments-section">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            comment={testimonial.comment}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
