import { FC } from "react"
import { GridComponent } from "../GridComponent/GridComponent"
import styles from './BarChart.module.css'
import classNames from "classnames"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { ESize, timeConvert } from "src/utils/ts/timeConvert";

export type Days = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс'
export type Data = { day: Days, time: number }

// const data: Data[] = [
//   { day: "Пн", time: 800000 },
//   { day: "Вт", time: 3800000 },
//   { day: "Ср", time: 6000000 },
//   { day: "Чт", time: 3000000 },
//   { day: "Пт", time: 1500000 },
//   { day: "Сб", time: 1000000 },
//   { day: "Вс", time: 0 },
// ];

const margin: object = {
  top: 45,
  left: 0,
  right: 0,
  bottom: 0,
}

const Xpadding: object = {
  left: 56,
  right: 88
}
const Ypadding: object = {
  top: 0,
  bottom: 0
}

const XTick: boolean | React.SVGProps<SVGTextElement> | React.ReactElement<SVGElement, string> | ((props: unknown) => React.ReactElement<SVGElement>) | undefined = {
  fontSize: 24,
  fill: '#999',
  fontWeight: 400,
  transform: 'translate(0, 10)'
}

const YTick: boolean | React.SVGProps<SVGTextElement> | React.ReactElement<SVGElement, string> | ((props: unknown) => React.ReactElement<SVGElement>) | undefined = {
  fontSize: 12,
  fill: '#333',
  fontWeight: 400,
  transform: 'translate(0, 10)'
}

type Props = {
  data: Data[]
  activeDay: Days | null
  handleChangeDay: (day: Days) => void
}

export const Graph: FC<Props> = ({ data, activeDay, handleChangeDay }) => {
  // const [activeDay, setActiveDay] = useState<Days | null>('Пн');
  const handleClickAxis = (data: { value: Days }) => {
    handleChangeDay(data.value)
  };

  const handleClickBar = (data: { payload: Data }) => {
    handleChangeDay(data.payload.day)
  };
  return (
    <GridComponent gridClass={classNames('widget', styles.bar)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data} margin={margin}>
          <CartesianGrid strokeDasharray="0" vertical={false} color="#999" />
          <XAxis
            dataKey="day"
            height={51}
            padding={Xpadding}
            axisLine={false}
            tickLine={false}
            tick={XTick}
            onClick={handleClickAxis}
          />
          <YAxis
            orientation="right"
            width={109}
            padding={Ypadding}
            axisLine={false}
            tickLine={false}
            tickFormatter={(time: number) => timeConvert(time, ESize.middle)}
            tick={YTick}
          />
          <Bar
            dataKey="time"
            onClick={handleClickBar}
            minPointSize={5}
          >{
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={activeDay === entry.day ? "#DC3E22" : "#EA8A79"} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </GridComponent>
  )
}
