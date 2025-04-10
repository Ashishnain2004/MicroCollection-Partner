import React from 'react';
import TransactionsList from '../components/TransactionsList';
import { useStore } from '../store/useStore';
import { Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Wallet() {
  const { addTransaction, stats } = useStore();

  const handleAddFunds = () => {
    const newTransaction = {
      id: Date.now().toString(),
      type: 'credit' as const,
      amount: 1000,
      description: 'Added funds',
      timestamp: new Date().toISOString(),
      status: 'success' as const,
    };
    addTransaction(newTransaction);
  };

  const handleWithdraw = () => {
    const newTransaction = {
      id: Date.now().toString(),
      type: 'debit' as const,
      amount: 500,
      description: 'Withdrawal',
      timestamp: new Date().toISOString(),
      status: 'success' as const,
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Wallet</h1>
          <p className="text-lg text-gray-600">
            Current Balance: ₹{stats.totalBalance.toLocaleString()}
          </p>
        </div>
        <div className="space-x-4">
          <button
            onClick={handleAddFunds}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <ArrowUpRight className="h-5 w-5 mr-2" />
            Add Funds
          </button>
          <button
            onClick={handleWithdraw}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
          >
            <ArrowDownRight className="h-5 w-5 mr-2" />
            Withdraw
          </button>
        </div>
      </div>
      <TransactionsList />
    </div>
  );
}