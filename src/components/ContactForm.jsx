import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+375");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    let value = e.target.value;

    // Удалить начальные пробелы
    value = value.replace(/^\s+/, "");

    // Ограничить длину
    value = value.slice(0, 30);

    // Подсчитать количество пробелов
    const spaceCount = (value.match(/ /g) || []).length;

    // Блокировать ввод третьего пробела
    if (spaceCount > 2 && value.endsWith(" ")) {
      value = value.slice(0, -1);
    }

    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim() || name.length > 40) {
      newErrors.name = "ФИО не должно быть пустым и не более 40 символов.";
    }

    if (!/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = "Введите корректный e-mail.";
    }

    if (!/^\+375\d{9}$/.test(phone)) {
      newErrors.phone = "Введите номер в формате: +375XXXXXXXXX";
    }

    if (!message.trim() || message.length > 150) {
      newErrors.message = "Описание проекта обязательно и не должно превышать 150 символов.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Форма успешно отправлена!");
    }
  };

  return (
    <section id="contact-form" className="contact-form">
      <div className="form-container">
        <div className="contact-left">
          <h1 className="form-title">
            Свяжитесь<br />с нами
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Введите своё ФИО"
              value={name}
              onChange={handleNameChange}
              style={{ borderBottom: errors.name ? "2px solid red" : "" }}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}

            <input
              type="email"
              placeholder="Введите свой e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value.replace(/[а-яёА-ЯЁ]/g, ""))}
              style={{ borderBottom: errors.email ? "2px solid red" : "" }}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}

            <input
              type="tel"
              placeholder="Введите свой номер телефона"
              value={phone}
              onChange={(e) => {
                let val = e.target.value.replace(/[^0-9+]/g, "").slice(0, 13);
                if (!val.startsWith("+375")) val = "+375";
                setPhone(val);
              }}
              style={{ borderBottom: errors.phone ? "2px solid red" : "" }}
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}

            <button type="submit" className="submit-button">Подать заявку ⭢</button>
          </form>
        </div>

        <div className="contact-right">
          <p className="text-form">
            Просто введите свой адрес электронной почты в форме<br />
            или свяжитесь с нами по почте – <a href="mailto:ideasoft@gmail.com">ideasoft@gmail.com</a> –<br />
            и один из наших специалистов свяжется с вами.<br />
            Это может стать началом прекрасного сотрудничества<br />
            и самым простым способом обрести высокоопытную команду.
          </p>
          <textarea
            placeholder="Опишите свой проект"
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 150))}
            style={{ borderBottom: errors.message ? "2px solid red" : "" }}
          ></textarea>
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
