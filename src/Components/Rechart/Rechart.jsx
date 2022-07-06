import './Rechart.css';
import { AreaChart, XAxis,CartesianGrid,Tooltip, Area, ResponsiveContainer } from 'recharts';

const Rechart = ({title, aspect}) => {

    const data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
      ];
      
    return (
        <section className = 'rechart'>
            <h2 className='title'>{title}</h2>
            <ResponsiveContainer width="100%" aspect={aspect}>
            <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
            <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="Total"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#total)"
            />
            </AreaChart>
        </ResponsiveContainer>
        </section>
    )
}
export default Rechart;