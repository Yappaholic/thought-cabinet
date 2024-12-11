// 24 margin
import { useId, useState } from 'react';
import { Brain, EllipseBig, EllipseSmall } from './Util';

const Form = () => {
  const [name, changeName] = useState<string>('');
  const [contact, changeContact] = useState<string>('');
  const [request, changeRequest] = useState<string>('');
  const nameId = useId();
  const contactId = useId();
  const requestId = useId();

  const sendToBot = () => {
    console.log(name, contact, request);
  };

  return (
    <form className="flex flex-col gap-4 overflow-hidden">
      <div>
        <label htmlFor={nameId} className="text-blue-900">
          Имя*
        </label>
        <br />
        <input
          required
          className="bg-transparent border-gray-400 border p-2 text-xl"
          type="text"
          id={nameId}
          alt="Name field"
          onChange={(e) => changeName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={contactId} className="text-blue-900">
          Telegram/Instagram/Viber*
        </label>
        <br />
        <input
          required
          className="bg-transparent border-gray-400 border p-2 text-xl"
          type="text"
          id={contactId}
          alt="Contact field"
          onChange={(e) => changeContact(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={requestId} className="text-blue-900">
          Ваш запрос
        </label>
        <br />
        <textarea
          className="bg-transparent border-gray-400 border min-w-48 max-w-[calc(100%-2rem)] box-border text-md resize-none"
          id={requestId}
          aria-label="Request field"
          onChange={(e) => changeRequest(e.target.value)}
        />
      </div>
      <div className="flex justify-between align-middle">
        <p className="text-xl">* - Обязательное поле</p>
        <button
          type="button"
          onClick={sendToBot}
          className="px-6 py-2 bg-green-900 text-white rounded-md mr-8"
        >
          Отправить
        </button>
      </div>
    </form>
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
        <h2 className="md:text-6xl text-green-900 pt-12 self-center text-center md:max-2xl:-translate-x-48">
          Получите <br /> консультацию
        </h2>
      </div>
      <div id="bottom" className="grid grid-cols-[35vw_1fr]">
        <Brain />
        <Form />
      </div>
    </div>
  );
};

export default ContactMe;
