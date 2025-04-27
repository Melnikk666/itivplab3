import React, { useState } from 'react';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([
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
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      let newValue = value.replace(/[^а-яА-Я\s]/g, ''); // Только русские буквы и пробел
      newValue = newValue.replace(/\s{2,}/g, ' '); // Только один пробел подряд
      newValue = newValue.trimStart(); // Без пробела в начале
      newValue = newValue.slice(0, 30); // До 30 символов
      setNewTestimonial(prev => ({ ...prev, [name]: newValue }));
    } else if (name === 'comment') {
      let newValue = value.trimStart(); // Без пробела в начале
      newValue = newValue.slice(0, 150); // До 150 символов
      setNewTestimonial(prev => ({ ...prev, [name]: newValue }));
    }
  };

  const handleAddTestimonial = () => {
    const defaultImage = '/image/about.jpg'; // Замените на вашу общую фотку

    if (newTestimonial.name && newTestimonial.comment) {
      const newEntry = {
        image: defaultImage,
        name: newTestimonial.name,
        comment: newTestimonial.comment
      };

      setTestimonials(prev => [...prev, newEntry]);
      setNewTestimonial({ name: '', comment: '' });
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  };

  return (
    <section>
      <h2>Отзывы наших клиентов</h2>
      <div className="comments-section">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            comment={testimonial.comment}
          />
        ))}
      </div>

      <div className="add-testimonial-form">
        <input
          className="contact-form input"
          type="text"
          name="name"
          placeholder="Имя"
          value={newTestimonial.name}
          onChange={handleChange}
        />
        <textarea
          className="contact-form input"
          name="comment"
          placeholder="Отзыв"
          value={newTestimonial.comment}
          onChange={handleChange}
        />
        <button className="contact-button" onClick={handleAddTestimonial}>
          Добавить отзыв
        </button>
      </div>
    </section>
  );
}

function TestimonialCard({ image, name, comment }) {
  return (
    <div className="comment">
      <img src={image} className="img-people" alt={name} />
      <h4 className="people-name">{name}</h4>
      <p className="people-comment">{comment}</p>
    </div>
  );
}

export default Testimonials;
