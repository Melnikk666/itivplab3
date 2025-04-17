import React from 'react';

function Principles() {
  return (
    <section>
      <h2>Принципы нашей работы</h2>
      <img src="image/about.jpg" className="img-about" alt="Принципы" />
      <section className="concept-section">
        <div>
          <img src="image/concept.png" className="img-concept" alt="Инновационность" />
          <h3 className="concept">Инновационность</h3>
          <p>
            Мы стремимся к внедрению<br />
            новейших технологий и<br />
            инновационных решений, чтобы<br />
            предоставлять клиентам<br />
            передовые и эффективные<br />
            IT-продукты.
          </p>
        </div>
        <div>
          <img src="image/concept.png" className="img-concept" alt="Профессионализм" />
          <h3 className="concept">Профессионализм</h3>
          <p>
            Мы гарантируем высокий уровень<br />
            профессионализма и качества во<br />
            всех наших проектах, обеспечивая<br />
            точное выполнение поставленных<br />
            задач и соблюдение сроков.
          </p>
        </div>
        <div>
          <img src="image/concept.png" className="img-concept" alt="Прозрачность" />
          <h3 className="concept">Прозрачность</h3>
          <p>
            Мы придерживаемся принципов<br />
            честности и открытости во всех<br />
            аспектах нашей работы,<br />
            создавая доверительные и<br />
            долговременные отношения с<br />
            нашими клиентами и партнёрами.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Principles;
