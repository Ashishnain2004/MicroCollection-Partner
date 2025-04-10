import React from 'react';
import PartnersList from '../components/PartnersList';
import { useStore } from '../store/useStore';
import { UserPlus } from 'lucide-react';

export default function Partners() {
  const { addPartner } = useStore();

  const handleAddPartner = () => {
    const newPartner = {
      id: Date.now().toString(),
      name: `Partner ${Date.now()}`,
      status: 'active' as const,
      earnings: 0,
      completedOrders: 0,
      commission: 10,
    };
    addPartner(newPartner);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Partner Management</h1>
        <button
          onClick={handleAddPartner}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <UserPlus className="h-5 w-5 mr-2" />
          Add New Partner
        </button>
      </div>
      <PartnersList />
    </div>
  );
}