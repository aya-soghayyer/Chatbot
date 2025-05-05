import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import SideBar from '../../ui/admin/SideBar';
import Header from '../../ui/admin/Header';
import {domainName} from '../../../App';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const COLORS = [
  '#FFBB28',
  '#21ABDB',
  '#FFBB28',
  '#FF8042',
  '#00C49F',
  '#FF8042',
  '#FFBB28',
  '#0088FE',
];


function DashboardHeader() {
  const [data, setData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const token = Cookie.get("token");
        const response = await fetch(`${domainName}admin/charts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await response.json();

        setTotalUsers(json.total_users);

        const chartData = Object.entries(json.message_type_counts).map(
          ([type, count]) => ({
            name: type,
            value: count,
          })
        );

        setData(chartData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <div className="flex gap-5 text-white">
      <SideBar />
      <Header className="border p-4 flex flex-col gap-6">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>

        <div className="flex gap-10 flex-wrap">
          {/* Pie Chart for Message Types */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Message Type Distribution</h3>
            <PieChart width={400} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
                nameKey="name"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          {/* Bar Chart for Total Users */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <BarChart width={300} height={300} data={[{ name: 'Users', total: totalUsers }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="total" fill="#21ABDB" />
            </BarChart>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default DashboardHeader;
