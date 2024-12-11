import AboutCBT from './AboutCBT';
import AboutMe from './AboutMe';
import ContactMe from './Contacts';
import { Dots } from './Util';
import mainImage from './main.png';

function navigate(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const Header = () => {
  return (
    <header id="header" className="w-full">
      <div className="flex flex-row pt-2 justify-center justify-items-center self-center xl:w-full">
        <div className="flex flex-row gap-4 justify-items-center">
          <button
            type="button"
            className="text-md"
            onClick={() => navigate('Main')}
          >
            Главная
          </button>
          <button
            type="button"
            className="text-md"
            onClick={() => navigate('Therapy')}
          >
            Терапия
          </button>
          <button
            type="button"
            className="text-md"
            onClick={() => navigate('About_me')}
          >
            Обо мне
          </button>
          <button
            type="button"
            className="text-md"
            onClick={() => navigate('Contacts')}
          >
            Контакты
          </button>
        </div>
      </div>
    </header>
  );
};

const MainCover = () => {
  return (
    <>
      <div
        id="Main"
        className="pl-[5vw] grid pt-4 grid-cols-[40vw_1fr] grid-rows-3 mr-[10vw]"
      >
        <Dots />
        <div className="row-start-2 row-end-4 self-start">
          <h1 className="text-green-900 lg:text-6xl self-center col-start-1">
            Кабинет мыслей
          </h1>
          <p className="text-2xl py-12 row-start-3">
            Помогаю справляться с тревогой, <br />
            стрессом и негативными мыслями.
          </p>
        </div>
        <img
          src={mainImage}
          alt="Павел Витко"
          width="900px"
          height="700px"
          className="col-start-2 row-start-1 row-end-4"
        />
      </div>
      <button
        type="button"
        className="bg-green-900 w-[35vw] py-4 mb-10 text-3xl rounded-2xl self-center text-white"
        onClick={() => navigate('Contacts')}
      >
        Записаться на консультацию
      </button>
      </>

  )

}
const Main = () => {
  return (
    <>
    <title>Кабинет Мыслей</title>
    <div className="bg-white min-h-svh flex flex-col gap-24">
      <Header />
      <MainCover />
      <AboutCBT />
      <AboutMe />
      <ContactMe />
    </div>
    </>
  );
};

export default Main;
