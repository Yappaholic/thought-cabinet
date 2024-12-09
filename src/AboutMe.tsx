import PavelPhoto from './pavel.jpg';
const AboutMe = () => {
  return (
    <div id="About_me">
      <h2 className="text-6xl text-center text-green-900">О себе</h2>
      <div className="flex flex-row justify-center gap-48 ml-32 mr-52 my-14">
        <p className="text-xl w-96 text-emerald-950">
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
        <img src={PavelPhoto} width="450px" height="550px" alt="Павел" />
      </div>
    </div>
  );
};

export default AboutMe;
