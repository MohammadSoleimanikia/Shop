import DashboardTopItem from "@/components/admin/DashboardTopItem";
import { Box, Container } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TimelineIcon from "@mui/icons-material/Timeline";
import CancelIcon from "@mui/icons-material/Cancel";

import PendingOrders from "@/components/admin/PendingOrders";
import { useSelector } from "react-redux";
import LineChartOrders from "@/components/admin/LineChartOrders";
import PieChartOrder from "@/components/admin/PieChartOrder";
import TopSelling from "@/components/admin/TopSelling";

export default function Dashboard() {
    const data = useSelector((state) => state.dashboard);
    const latestMonthKey = Object.keys(data).sort().pop();
    const latestMonth = data[latestMonthKey];
    return (
        <section className="w-full bg-slate-200 pt-24 px-5 h-auto">
            {/* top cards */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                <DashboardTopItem
                    icon={
                        <FavoriteIcon
                            sx={{ width: 50, height: 50, color: "red" }}
                        />
                    }
                    value={250}
                    title={"Total visitors"}
                    info={{ number: 55, text: "of last month's visitors" }}
                />
                <DashboardTopItem
                    icon={
                        <ShoppingBagIcon
                            sx={{ width: 50, height: 50, color: "#03A89E" }}
                        />
                    }
                    value={latestMonth.orderNumbers}
                    title={"Order"}
                    info={{ number: 45, text: "of last month's order" }}
                />
                <DashboardTopItem
                    icon={
                        <TimelineIcon
                            sx={{ width: 50, height: 50, color: "#ff6cb5" }}
                        />
                    }
                    value={latestMonth.totalSale}
                    title={"Sale"}
                    info={{ number: -12, text: "of last month's sales" }}
                />
                <DashboardTopItem
                    icon={
                        <CancelIcon
                            sx={{ width: 50, height: 50, color: "grey" }}
                        />
                    }
                    value={250}
                    title={"Order Canceled"}
                    info={{ number: -8, text: "of last month's orders" }}
                />
            </div>

            {/* chart container */}
            <div className="flex gap-5 justify-between">
                <div className="w-6/12 bg-white my-5 p-5 rounded-md">
                    <h2>Reports</h2>
                    <LineChartOrders />
                </div>
                <div className="w-5/12 bg-white my-5 p-5 rounded-md">
                    <PieChartOrder />
                </div>
            </div>
            <div className="flex gap-5 justify-between">
                <div className="w-6/12 p-5 bg-white rounded-md mb-5">
                    <h2>Pending Orders</h2>
                    <PendingOrders />
                </div>
                <div className="w-5/12 p-5 bg-white rounded-md mb-5">
                <h2>Best Selling</h2>
                    <TopSelling latestMonth={latestMonth} />
                </div>
            </div>
        </section>
    );
}
