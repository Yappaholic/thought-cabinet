// 24 margin
import { Brain, EllipseBig, EllipseSmall } from './Util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return (
    <div className="flex flex-col gap-8 max-w-72">
      <button type="button" className="border-2 hover:scale-105 transition py-4 px-2 gap-4 flex">
        <FontAwesomeIcon icon={faTelegram} size="2xl"/>
        <p className="text-3xl">Telegram</p>
      </button>
      <button type="button" className="border-2 hover:scale-105 transition py-4 px-2 gap-4 flex">
        <FontAwesomeIcon icon={faInstagram} size="2xl"/>
        <p className="text-3xl">Instagram</p>
      </button>
      <button type="button" className="border-2 hover:scale-105 transition py-4 px-2 gap-4 flex">
        <FontAwesomeIcon icon={faViber} size="2xl"/>
        <p className="text-3xl">Viber</p>
      </button>
    </div>
  );
};
const ContactMe = () => {
  return (
    <div
      id="Contacts"
      className="bg-[#f4f6f6] w-[70vw] min-h-[70vh] mb-12 self-center mx-24"
    >
      <div id="top" className="flex flex-row">
        <EllipseSmall />
        <EllipseBig />
        <h2 className="md:text-6xl text-green-900 pt-12 self-center font-main text-center md:max-2xl:-translate-x-48">
          Получите <br /> консультацию
        </h2>
      </div>
      <div id="bottom" className="grid grid-cols-[35vw_1fr] items-center">
        <Brain />
        <Contacts />
      </div>
    </div>
  );
};

export default ContactMe;
