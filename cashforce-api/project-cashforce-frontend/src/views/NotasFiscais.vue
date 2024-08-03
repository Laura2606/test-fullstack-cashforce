<template>
  <div class="notas-fiscais">
    <HeaderDetail />
    <SidebarMenu />
    <div class="table">
      <div class="table-header">
        <div class="table-cell">Nota Fiscal</div>
        <div class="table-cell">Sacado</div>
        <div class="table-cell">Cedente</div>
        <div class="table-cell">Emissão</div>
        <div class="table-cell">Valor</div>
        <div class="table-cell">Status</div>
      </div>
      <div class="table-row" v-for="order in orders" :key="order.id">
        <div class="table-cell">{{ order.invoice }}</div>
        <div class="table-cell">{{ order.buyer.name }}</div>
        <div class="table-cell">{{ order.provider.name }}</div>
        <div class="table-cell">{{ order.emissionDate }}</div>
        <div class="table-cell">{{ order.value }}</div>
        <div class="table-cell">{{ statusText(order.orderStatusBuyer) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDetail from '@/components/HeaderDetail.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import axios from 'axios';

export default {
  name: 'NotasFiscais',
  components: {
    HeaderDetail,
    SidebarMenu
  },
  data() {
    return {
      orders: [],
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await axios.get('http://localhost:3000/api/orders'); // Ajuste a URL conforme necessário
        this.orders = response.data;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
    statusText(statusCode) {
      const statusList = [
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
      return statusList[statusCode];
    },
  },
};
</script>

<style scoped>
.notas-fiscais {
  margin: 0 auto;
  padding: 20px;
  width: 1200px;
  background-color: white;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table-header, .table-row {
  display: flex;
  width: 1177px;
  height: 48px;
  border-bottom: 1px solid #ddd;
}

.table-header {
  height: 22px;
  font-weight: bold;
  background-color: #f9f9f9;
}

.table-cell {
  flex: 1;
  padding: 8px;
}
</style>
