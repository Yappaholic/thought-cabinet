import AboutCBT from './AboutCBT';
import AboutMe from './AboutMe';
import { Dots } from './Util';
import mainImage from './main.png';
function handleClick(id: string) {
  document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
};
const Header = () => {
  return (
    <header id="header" className="w-full">
      <div className="flex flex-row pt-2 justify-between justify-items-center self-center 2xl:w-[60vw]">
        <h2 className="pl-[5vw] 2xl:text-2xl place-self-start text-green-900">
          Кабинет мыслей
        </h2>
        <div className="flex flex-row gap-4 justify-items-center">
          <button type="button" className="2xl:text-md" onClick={() => handleClick("Main")}>Главная</button>
          <button type="button" className="2xl:text-md" onClick={() => handleClick("Therapy")}>Терапия</button>
          <button type="button" className="2xl:text-md" onClick={() => handleClick("About_me")}>Обо мне</button>
          <button type="button" className="2xl:text-md">Контакты</button>
        </div>
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <div className="bg-white min-h-svh flex flex-col gap-20">
      <Header />
      <div id="Main"className="pl-[5vw] grid grid-cols-[40vw_1fr] grid-rows-3 mr-[10vw]">
        <Dots />
        <div className="row-start-2 row-end-4 self-start">
          <h1 className="text-green-900 2xl:text-6xl self-center col-start-1">
            Кабинет мыслей
          </h1>
          <p className="text-2xl py-12 row-start-3">
            Помогаю справляться с тревогой, <br />
            стрессом и негативными мыслями.
          </p>
        </div>
        <img
          src={mainImage}
          width="900px"
          height="700px"
          className="col-start-2 row-start-1 row-end-4"
        ></img>
      </div>
      <button type="button" className="bg-green-900 w-[35vw] py-4 mb-10 text-3xl rounded-2xl self-center text-white">
        Записаться на консультацию
      </button>
      <AboutCBT />
      <AboutMe />
    </div>
  );
};

export default Main;
