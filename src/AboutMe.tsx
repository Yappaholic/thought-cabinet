import PavelPhoto from './pavel.jpg';
const AboutMe = () => {
  return (
    <div id="About_me">
      <h2 className="text-6xl text-center text-green-900">О себе</h2>
      <div className="flex justify-center gap-48 md:max-xl:gap-24 mx-32 my-14">
        <p className="text-xl md:max-xl:text-lg w-96 text-emerald-950">
          В данный момент углубленно изучаю когнитивно-поведенческую терапию
          (КПТ) и транзактный анализ. Эти подходы позволяют мне лучше понять,
          как взаимодействуют мысли, эмоции и поведение.
          <br />
          <br />
          Давайте развиваться вместе😌.
          <br />
          <br />
          Попробую помочь Вам разобраться в возникшей проблеме и вместе найти
          решение.
        </p>
        <img src={PavelPhoto} alt="Павел" className="max-w-[450px] max-h-[550px] min-w-[225px] min-h-[275px]" />
      </div>
    </div>
  );
};

export default AboutMe;
