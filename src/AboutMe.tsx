import PavelPhoto from './pavel.jpg';
const AboutMe = () => {
  return (
    <div id="About_me">
      <h2 className="text-6xl text-center font-main text-special">О себе</h2>
      <div className="flex justify-center gap-24 md:max-xl:gap-24 mx-32 my-14">
        <div>
          <p className="text-2xl font-main pb-20 md:max-xl:text-lg w-96 text-grey-list">
            Меня зовут Павел Витко, я изучаю и практикую Когнитивно-Поведенческую терапию (КПТ).
          </p>
          <section className="grid grid-cols-2 gap-16 grid-rows-2 min-w-96 max-w-[30vw]">
            <article>
              <h2 className="text-xl xl:text-3xl font-main text-special">1.Образование</h2>
              <p className="font-secondary text-grey-list">Российский Государственный Социальный Университет 2021-2025гг.</p>
            </article>
            <article>
              <h2 className="text-xl xl:text-3xl font-main text-special">2.Опыт работы</h2>
              <p className="font-secondary text-grey-list">Провожу персональные консультации с 2024 года</p>
            </article>
            <article className="col-start-1 col-end-3 justify-self-center">
              <h2 className="text-xl xl:text-3xl font-main text-special">3.Этапы работы</h2>
              <ul className="list-disc list-inside font-secondary text-grey-list">
                <li>Знакомство и определение запроса</li>
                <li>Постановка целей</li>
                <li>Совместная работа</li>
              </ul>
            </article>
          </section>
        </div>
        <img src={PavelPhoto} alt="Павел" className="max-w-[450px] max-h-[550px] min-w-[225px] min-h-[275px]" />
      </div>
    </div>
  );
};

export default AboutMe;
