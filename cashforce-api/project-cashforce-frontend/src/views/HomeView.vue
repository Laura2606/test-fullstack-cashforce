<template>
  <div class="home-view">
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
        <div class="table-cell">{{ order.sacado }}</div>
        <div class="table-cell">{{ order.cedente }}</div>
        <div class="table-cell">{{ order.emissao }}</div>
        <div class="table-cell">{{ order.valor }}</div>
        <div class="table-cell">{{ order.status }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDetail from '@/components/HeaderDetail.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderDetail,
    SidebarMenu
  },
  data() {
    return {
      orders: [], // Placeholder for data from API
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      // Fetch data from your API and assign to `orders`
      // Example:
      // this.$http.get('/api/orders').then(response => {
      //   this.orders = response.data;
      // });
    },
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
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
