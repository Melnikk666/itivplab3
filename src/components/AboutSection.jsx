import React from 'react';

function AboutSection() {
  return (
    <section>
      <h2>Кто мы?</h2>
      <div className="about-section">
        <div>
          <p className="about-company">
            Компания IDEA SOFT была основана в 2010 году с<br />
            целью предоставления передовых IT-решений для<br />
            бизнеса. На протяжении лет мы успешно<br />
            реализовали более 200 проектов, помогая<br />
            компаниям различного масштаба и отраслей<br />
            достигать своих целей. Важные вехи нашего пути<br />
            включают запуск нашего первого продукта в 2012<br />
            году, открытие международного офиса в 2015 году<br />
            и получение награды за лучший IT-проект в 2023 году.
          </p>
        </div>
        <div className="container-about">
          <div className="about">
            <h3 className="about-h3">15</h3>
            <p className="about-p">лет в производстве</p>
          </div>
          <div className="about">
            <h3 className="about-h3">200+</h3>
            <p className="about-p">клиентов по всему миру</p>
          </div>
          <div className="about-background">
            <h3 className="about-background-h3">2023</h3>
            <p className="about-background-p">лучший IT-проект</p>
          </div>
          <div className="about">
            <h3 className="about-h3">2015</h3>
            <p className="about-p">международный офис</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
