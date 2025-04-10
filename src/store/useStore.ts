import { create } from 'zustand';
import { PickupPartner, Order, Transaction, MCPStats } from '../types';

interface State {
  stats: MCPStats;
  partners: PickupPartner[];
  orders: Order[];
  transactions: Transaction[];
  notifications: { id: string; message: string; read: boolean }[];
  addPartner: (partner: PickupPartner) => void;
  updatePartnerStatus: (partnerId: string, status: 'active' | 'inactive') => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: 'pending' | 'in_progress' | 'completed') => void;
  addTransaction: (transaction: Transaction) => void;
  addNotification: (message: string) => void;
  markNotificationAsRead: (id: string) => void;
}

export const useStore = create<State>((set) => ({
  stats: {
    totalBalance: 25000,
    activePartners: 12,
    totalPartners: 15,
    pendingOrders: 8,
    completedOrders: 45,
    inProgressOrders: 5,
  },
  partners: [
    {
      id: '1',
      name: 'John Doe',
      status: 'active',
      earnings: 15000,
      completedOrders: 25,
      commission: 10,
    },
    {
      id: '2',
      name: 'Jane Smith',
      status: 'active',
      earnings: 12000,
      completedOrders: 20,
      commission: 12,
    },
  ],
  orders: [
    {
      id: '1',
      status: 'pending',
      amount: 500,
      location: 'Mumbai, Maharashtra',
      timestamp: new Date().toISOString(),
    },
    {
      id: '2',
      status: 'in_progress',
      partnerId: '1',
      amount: 750,
      location: 'Delhi, NCR',
      timestamp: new Date().toISOString(),
    },
  ],
  transactions: [
    {
      id: '1',
      type: 'credit',
      amount: 5000,
      description: 'Wallet topup',
      timestamp: new Date().toISOString(),
      status: 'success',
    },
  ],
  notifications: [
    {
      id: '1',
      message: 'New order assigned',
      read: false,
    },
  ],
  addPartner: (partner) =>
    set((state) => ({
      partners: [...state.partners, partner],
      stats: {
        ...state.stats,
        totalPartners: state.stats.totalPartners + 1,
        activePartners: partner.status === 'active' ? state.stats.activePartners + 1 : state.stats.activePartners,
      },
    })),
  updatePartnerStatus: (partnerId, status) =>
    set((state) => ({
      partners: state.partners.map((partner) =>
        partner.id === partnerId ? { ...partner, status } : partner
      ),
      stats: {
        ...state.stats,
        activePartners:
          status === 'active'
            ? state.stats.activePartners + 1
            : state.stats.activePartners - 1,
      },
    })),
  addOrder: (order) =>
    set((state) => ({
      orders: [...state.orders, order],
      stats: {
        ...state.stats,
        pendingOrders: state.stats.pendingOrders + 1,
      },
    })),
  updateOrderStatus: (orderId, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      ),
      stats: {
        ...state.stats,
        pendingOrders:
          status === 'pending'
            ? state.stats.pendingOrders + 1
            : state.stats.pendingOrders - 1,
        inProgressOrders:
          status === 'in_progress'
            ? state.stats.inProgressOrders + 1
            : state.stats.inProgressOrders - 1,
        completedOrders:
          status === 'completed'
            ? state.stats.completedOrders + 1
            : state.stats.completedOrders,
      },
    })),
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction],
      stats: {
        ...state.stats,
        totalBalance:
          transaction.type === 'credit'
            ? state.stats.totalBalance + transaction.amount
            : state.stats.totalBalance - transaction.amount,
      },
    })),
  addNotification: (message) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: Date.now().toString(), message, read: false },
      ],
    })),
  markNotificationAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      ),
    })),
}));
