export interface PickupPartner {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  earnings: number;
  completedOrders: number;
  commission: number;
}

export interface Order {
  id: string;
  status: 'pending' | 'in_progress' | 'completed';
  partnerId?: string;
  amount: number;
  location: string;
  timestamp: string;
}

export interface Transaction {
  id: string;
  type: 'credit' | 'debit' | 'transfer';
  amount: number;
  description: string;
  timestamp: string;
  status: 'success' | 'pending' | 'failed';
}

export interface MCPStats {
  totalBalance: number;
  activePartners: number;
  totalPartners: number;
  pendingOrders: number;
  completedOrders: number;
  inProgressOrders: number;
}
