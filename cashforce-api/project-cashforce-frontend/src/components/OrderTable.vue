<template>
  <div class="order-table">
    <div class="table-header">
      <div class="header-cell">Nota Fiscal</div>
      <div class="header-cell">Sacado</div>
      <div class="header-cell">Cedente</div>
      <div class="header-cell">Emissão</div>
      <div class="header-cell">Valor</div>
      <div class="header-cell">Status</div>
    </div>
    <div v-if="orders.length === 0" class="no-data">Nenhum dado disponível</div>
    <div v-else>
      <div v-for="order in orders" :key="order.id" class="table-row">
        <div class="row-cell">{{ order.invoiceNumber }}</div>
        <div class="row-cell">{{ order.buyer.name }}</div>
        <div class="row-cell">{{ order.provider.name }}</div>
        <div class="row-cell">{{ formatDate(order.issueDate) }}</div>
        <div class="row-cell">{{ formatCurrency(order.amount) }}</div>
        <div class="row-cell">{{ getStatus(order.orderStatusBuyer) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderTable',
  data() {
    return {
      orders: []
    };
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await fetch('http://localhost:3000/orders'); // URL da sua API
        const data = await response.json();
        this.orders = data;
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    },
    getStatus(status) {
      const statuses = [
        'Pendente', 'Aprovado', 'Rejeitado', 'Cancelado', 'Pago', 'Em Processamento',
        'Devolvido', 'Em Análise', 'Finalizado'
      ];
      return statuses[status] || 'Desconhecido';
    }
  },
  created() {
    this.fetchOrders();
  }
};
</script>

<style scoped>
.order-table {
  width: 100%;
  border-collapse: collapse;
}
.table-header {
  display: flex;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}
.header-cell {
  width: 16.666%; /* 100% dividido por 6 colunas */
  padding: 10px;
  text-align: center;
  border-right: 1px solid #ddd;
}
.header-cell:last-child {
  border-right: none;
}
.table-row {
  display: flex;
}
.row-cell {
  width: 16.666%;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.row-cell:nth-child(even) {
  background-color: #f9f9f9;
}
.no-data {
  padding: 10px;
  text-align: center;
  color: #999;
}
</style>
