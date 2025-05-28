import { PieChart } from "@mui/x-charts/PieChart";
import { useSelector } from "react-redux";
export default function PieChartOrder(){
    const orders=useSelector(state=>state.order.items);
    const pending = (orders.filter((order)=>order.delivered==false)).length;
    const completed = orders.length- pending;
    return <PieChart
                        width={200}
                        height={300}
                        series={[
                            {
                                data: [
                                    {
                                        id: 0,
                                        value: pending,
                                        label: "Pending",
                                        color: "#03A89E",
                                    },
                                    {
                                        id: 1,
                                        value: completed,
                                        label: "Completed",
                                        color: "#FF69B4",
                                    },
                                    {
                                        id: 2,
                                        value: 3,
                                        label: "Canceled",
                                        color: "black",
                                    },
                                ],
                                innerRadius: 52,
                                outerRadius: 100,
                                paddingAngle: 4,
                                cornerRadius: 5,
                                startAngle: -46,
                                endAngle: 225,
                            },
                        ]}
                    />
}