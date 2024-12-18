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
      <h1 className="absolute pt-2 pl-[5vw] text-xl font-semibold align-middle font-main text-special">Павел Витко</h1>
      <div className="flex flex-row pt-2 justify-center justify-items-center xl:w-full">
        <div className="flex flex-row gap-20 justify-items-center">
          <button
            type="button"
            className="text-md font-secondary"
            onClick={() => navigate('Main')}
          >
            Главная
          </button>
          <button
            type="button"
            className="font-secondary"
            onClick={() => navigate('Therapy')}
          >
            Терапия
          </button>
          <button
            type="button"
            className="font-secondary"
            onClick={() => navigate('About_me')}
          >
            Обо мне
          </button>
          <button
            type="button"
            className="font-secondary"
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
        className="pl-[5vw] grid pt-4 grid-cols-[40vw_1fr] grid-rows-2 mr-[10vw]"
      >
        <Dots />
        <div 
        className="bg-white/50 backdrop-blur-md row-start-2 row-end-3 absolute z-10 self-center pb-20 pt-32 pr-8 flex flex-col gap-4">
          <h1 className="text-special md:text-6xl pt-8 font-main font-[800] self-center col-start-1">
            КПТ - путь к <br/> осознанной <br/>и здоровой жизни
          </h1>
          <p className="text-2xl text-grey-secondary font-secondary">
            Помогаю справляться с тревогой, <br />
            стрессом и негативными мыслями.
          </p>
        </div>
        <img
          src={mainImage}
          alt="Cognitive-Behavioral therapy"
          className="ml-48 col-start-1 col-end-3 row-start-1 lg:row-start-1 row-end-3 relative justify-self-center max-h-[800px] max-w-[1000px]"
        />
      </div>
      <button
        type="button"
        className="bg-special w-[35vw] py-4 mb-10 text-3xl font-main rounded-2xl self-center text-white"
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
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Serif+JP:wght@200..900&display=swap" rel="stylesheet"/>
    <div className="bg-white min-h-svh flex flex-col gap-16">
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
