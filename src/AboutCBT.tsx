import { Icon } from './Util';

type Position = {
  row: number;
  column: number;
};

interface GridItemProps {
  header: string,
  text: string,
  pos: Position,
  icon?: React.FC
}

const CBTGridItem = ({
  header,
  text,
  pos,
  icon = Icon,
}: GridItemProps ) => {
  const IconNode = icon;
  return (
    <div
      className="flex flex-col gap-4 align-center justify-self-center"
      style={{
        gridColumn: `${pos.column}/${pos.column + 1}`,
        gridRow: `${pos.row}/${pos.row + 1}`,
      }}
    >
      <IconNode />
      <h2 className="text-xl font-bold">{header}</h2>
      <p className="text-md">{text}</p>
    </div>
  );
};

const AboutCBT = () => {
  return (
    <div
      id="Therapy"
      className="grid grid-cols-[25vw_repeat(3,1fr)] bg-[#f4f6f6] gap-y-32 gap-x-11 grid-rows-2 px-28 py-48 justify-content-center"
    >
      <div>
        <h2 className=" md:text-5xl place-self-start text-green-900">
          Что такое КПТ?
        </h2>
        <p className="pt-4 text-xl">
          Когнитивно-поведенческая терапия основана на научно доказанных методах
          и помогает изменять негативные мысли, которые влияют на эмоции и
          поведение
        </p>
      </div>
      <div className="row-start-2 row-end-3">
        <h2 className=" md:text-5xl place-self-start text-green-900">
          Что решает КПТ?
        </h2>
        <p className="pt-4 text-xl">
          КПТ помогает справляться с эмоциональными трудностями, улучшать
          психологическое состояние и менять деструктивные шаблоны мышления и
          поведения
        </p>
      </div>
      <CBTGridItem
        header="Фокус на решениях"
        text="Вместо анализа прошлого терапия сосредоточена на текущих проблемах и поиске практических решений"
        pos={{ row: 1, column: 2 }}
        icon={Icon}
      />
      <CBTGridItem
        header="Навыки на всю жизнь"
        text="Вы приобретете техники, которые помогают справляться с трудностями самостоятельно и после завершения терапии"
        pos={{ row: 1, column: 3 }}
        icon={Icon}
      />
      <CBTGridItem
        header="Эффективность"
        text="КПТ обычно занимает меньше времени, чем другие методы, принося видимые результаты уже через несколько сессий"
        pos={{ row: 1, column: 4 }}
        icon={Icon}
      />
      <CBTGridItem
        header="Тревога и стресс"
        text="КПТ учит управлять тревожными мыслями, снижать уровень стресса и развивать чувство контроля над ситуацией"
        pos={{ row: 2, column: 2 }}
        icon={Icon}
      />
      <CBTGridItem
        header="Депрессия"
        text="Помогает изменить негативное мышление и привычки, которые усиливают подавленное состояние"
        pos={{ row: 2, column: 3 }}
        icon={Icon}
      />
      <CBTGridItem
        header="Низкая самооценка"
        text=" Улучшает самооценку, формирует здоровые убеждения о себе и окружающем мире"
        pos={{ row: 2, column: 4 }}
        icon={Icon}
      />
    </div>
  );
};
export default AboutCBT;
