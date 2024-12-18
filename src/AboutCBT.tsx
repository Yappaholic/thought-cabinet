import { Icon } from './Util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faGears, faBrain, faHeadSideVirus, faFaceFrown, faPersonHarassing } from '@fortawesome/free-solid-svg-icons';

type Position = {
  row: number;
  column: number;
};

interface GridItemProps {
  header: string,
  text: string,
  pos: Position,
  icon?: React.ReactElement
}

const CBTGridItem = ({
  header,
  text,
  pos,
  icon = <Icon/>,
}: GridItemProps ) => {
  return (
    <div
      className="grid grid-rows-[2rem,3.5rem,1fr] font-main flex-col gap-4 justify-start"
      style={{
        gridColumn: `${pos.column}/${pos.column + 1}`,
        gridRow: `${pos.row}/${pos.row + 1}`,
      }}
    >
      {icon}
      <h2 className="text-xl font-main font-bold text-grey-secondary-title">{header}</h2>
      <p className="text-md font-secondary text-grey-secondary">{text}</p>
    </div>
  );
};

const AboutCBT = () => {
  return (
    <>
    <div
      id="Therapy"
      className="grid grid-cols-[25vw_repeat(3,1fr)] font-main bg-[#f4f6f6] gap-y-32 gap-x-11 grid-rows-2 px-14 py-48 justify-content-center"
    >
      <div>
        <h2 className="md:text-5xl place-self-start text-special">
          Что такое КПТ?
        </h2>
        <p className="pt-4 text-xl text-[#2B2B2D]">
          Когнитивно-поведенческая терапия основана на научно доказанных методах
          и помогает изменять негативные мысли, которые влияют на эмоции и
          поведение
        </p>
      </div>
      <CBTGridItem
        header="Фокус на решениях"
        text="Вместо анализа прошлого терапия сосредоточена на текущих проблемах и поиске практических решений"
        pos={{ row: 1, column: 2 }}
        icon={<FontAwesomeIcon icon={faThumbsUp} size="2xl" className="self-start"/>}
      />
      <CBTGridItem
        header="Навыки на всю жизнь"
        text="Вы приобретете техники, которые помогают справляться с трудностями самостоятельно и после завершения терапии"
        pos={{ row: 1, column: 3 }}
        icon={<FontAwesomeIcon icon={faGears} size="2xl" className="self-start"/>}
      />
      <CBTGridItem
        header="Эффективность"
        text="КПТ обычно занимает меньше времени, чем другие методы, принося видимые результаты уже через несколько сессий"
        pos={{ row: 1, column: 4 }}
        icon={<FontAwesomeIcon icon={faBrain} size="2xl" className="self-start"/>}
      />
      <CBTGridItem
        header="Тревога и стресс"
        text="КПТ учит управлять тревожными мыслями, снижать уровень стресса и развивать чувство контроля над ситуацией"
        pos={{ row: 2, column: 2 }}
        icon={<FontAwesomeIcon icon={faHeadSideVirus} size="2xl" className="self-start"/>}
      />
      <CBTGridItem
        header="Депрессия"
        text="Помогает изменить негативное мышление и привычки, которые усиливают подавленное состояние"
        pos={{ row: 2, column: 3 }}
        icon={<FontAwesomeIcon icon={faFaceFrown} size="2xl" className="self-start"/>}
      />
      <CBTGridItem
        header="Низкая самооценка"
        text=" Улучшает самооценку, формирует здоровые убеждения о себе и окружающем мире"
        pos={{ row: 2, column: 4 }}
        icon={<FontAwesomeIcon icon={faPersonHarassing} size="2xl" className="self-start"/>}
      />
    </div>
    </>
  );
};
export default AboutCBT;
