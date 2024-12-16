import PavelPhoto from './pavel.jpg';
const AboutMe = () => {
  return (
    <div id="About_me">
      <h2 className="text-6xl text-center font-main text-green-900">О себе</h2>
      <div className="flex justify-center gap-24 md:max-xl:gap-24 mx-32 my-14">
        <div>
          <p className="text-2xl font-secondary pb-8 md:max-xl:text-lg w-96 text-emerald-950">
            Меня зовут Павел Витко, я изучаю и практикую Когнитивно-Поведенческую терапию (КПТ).
          </p>
          <section className="grid grid-cols-[repeat(2,15vw)] gap-4 grid-rows-2">
            <article>
              <h2 className="text-3xl font-main text-green-900">1.Образование</h2>
              <p className="font-secondary">Российский Государственный Социальный Университет 2021-2025гг.</p>
            </article>
            <article>
              <h2 className="text-3xl font-main text-green-900">2.Опыт работы</h2>
              <p className="font-secondary">Провожу персональные консультации с 2024 года</p>
            </article>
            <article className="col-start-1 col-end-3 justify-self-center">
              <h2 className="text-3xl font-main text-green-900">3.Этапы работы</h2>
              <ul className="list-disc list-inside font-secondary">
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
