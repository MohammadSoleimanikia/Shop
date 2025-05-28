import { LineChart } from "@mui/x-charts/LineChart";
import { useSelector } from "react-redux";

// 🔧 This helper gets "March", "July", etc.
function getMonthNameFromYYYYMM(yyyymm) {
    const year = yyyymm.toString().slice(0, 4);
    const month = yyyymm.toString().slice(4, 6);
    const date = new Date(`${year}-${month}-01`);
    return date.toLocaleString("default", { month: "long" }); // "March", "July"
}

export default function LineChartOrders() {
    const data=useSelector(state=>state.dashboard)
// 📅 Sort the keys numerically (like 202503 < 202507)
const sortedKeys = Object.keys(data).map(Number).sort((a, b) => a - b);

// 📊 Create the x and y arrays
const xData = sortedKeys.map(key => getMonthNameFromYYYYMM(key));
const yData = sortedKeys.map(key => data[key].orderNumbers);
    useSelector(state=>state.order)
    return (
        <LineChart
            xAxis={[
                {
                    data: xData,
                    scaleType: "point",
                    label: "Month",
                },
            ]}
            yAxis={[{ label: "Number of Orders" }]}
            series={[
                {
                    data: yData,
                    showMark: false,
                    area: true,
                    connectNulls: true,
                },
            ]}
            height={200}
            margin={{ right: 24 }}
        />
    );
}
