<template>
  <div>
    <h1>Orders List</h1>
    <ul>
      <li v-for="order in orders" :key="order.id" @click="selectOrder(order)">
        {{ order.id }} - {{ getOrderStatus(order.orderStatusBuyer) }}
      </li>
    </ul>
    <OrderDetail v-if="selectedOrder" :order="selectedOrder" />
  </div>
</template>

<script>
import apiClient from '../services/api';
import OrderDetail from './OrderDetail.vue';

export default {
  components: {
    OrderDetail,
  },
  data() {
    return {
      orders: [],
      selectedOrder: null,
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await apiClient.get('/orders');
        this.orders = response.data;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
    selectOrder(order) {
      this.selectedOrder = order;
    },
    getOrderStatus(status) {
      const statuses = [
        'Pendente de confirmação',
        'Pedido confirmado',
        'Não reconhece o pedido',
        'Mercadoria não recebida',
        'Recebida com avaria',
        'Devolvida',
        'Recebida com devolução parcial',
        'Recebida e confirmada',
        'Pagamento Autorizado',
      ];
      return statuses[status] || 'Status desconhecido';
    },
  },
};
</script>
