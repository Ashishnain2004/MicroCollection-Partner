import React from 'react';
import { MCPStats } from '../types';

interface StatsCardProps {
  title: string;
  value: number;
  type?: string;
}

const StatsCard = ({ title, value, type }: StatsCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <p className="text-sm text-gray-600">{title}</p>
    <p className="text-2xl font-semibold mt-2">
      {type === 'currency' ? `₹${value.toLocaleString()}` : value}
    </p>
  </div>
);

export default function DashboardStats({ stats }: { stats: MCPStats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatsCard title="Wallet Balance" value={stats.totalBalance} type="currency" />
      <StatsCard title="Active Partners" value={stats.activePartners} />
      <StatsCard title="Total Partners" value={stats.totalPartners} />
      <StatsCard title="Pending Orders" value={stats.pendingOrders} />
      <StatsCard title="In Progress Orders" value={stats.inProgressOrders} />
      <StatsCard title="Completed Orders" value={stats.completedOrders} />
    </div>
  );
}