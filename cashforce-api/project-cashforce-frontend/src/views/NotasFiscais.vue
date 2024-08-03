<template>
  <div class="notas-fiscais">
    <SidebarMenu />
    <div class="content">
      <div class="title-content">
        <h3>Notas Fiscais</h3>
        <p>Visualize as notas fiscais que você tem.</p>
      </div>
      <div class="grid-content">
        <div class="wrapper header row">
          <div>Nota Fiscal</div>
          <div>Sacado</div>
          <div>Cedente</div>
          <div>Emissão</div>
          <div>Valor</div>
          <div>Status</div>
          <div></div> <!-- Coluna para o botão -->
        </div>
        <div v-for="order in orders" :key="order.id" class="wrapper content-item row">
          <div>{{ order.orderNumber }}</div>
          <div>{{ order.buyer.name }}</div>
          <div>{{ order.provider.name }}</div>
          <div>{{ formatDate(order.emissionDate) }}</div>
          <div>{{ formatCurrency(order.value) }}</div>
          <div>{{ statusText(order.orderStatusBuyer) }}</div>
          <div><button class="view-customer-btn" @click="viewCustomer(order.providerId)">Dados do Cedente</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';
import axios from 'axios';

export default {
  name: 'NotasFiscais',
  components: {
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
        const response = await axios.get('http://localhost:3000/api/orders');
        console.log('Orders fetched:', response.data);
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
      return statusList[statusCode] || 'Desconhecido';
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString('pt-BR', options);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    },
    viewCustomer(providerId) {
      const order = this.orders.find(o => o.providerId === providerId);
      if (order) {
        console.log(order.provider);
      } else {
        console.error('Provider not found in orders.');
      }
    }
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

.title-content {
  margin-top: 40px;
}

.title-content h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--p-dark-blue-5);
}

.title-content p {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: var(--n-dark-4);
  line-height: 20px;
}

.grid-content {
  margin-top: 19px;
  width: 90%;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.header {
  align-items: center;
  font-size: 12px;
  height: 22px;
  font-weight: 700;
  color: var(--n-mif-1);
  margin-bottom: 19px;
}

.header div:first-child {
  margin-left: 24px;
}

.content-item {
  align-items: center;
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ndark-3);
  border: solid 1px var(--n-mid-4);
  border-radius: 6px;
  margin-bottom: 16px;
}

.content-item div:first-child {
  margin-left: 24px;
}

.content-item div:nth-child(5) {
  color: var(--p-green-5);
}

.content-item div:nth-child(6) {
  color: var(--p-green-5);
  font-size: 12px;
}

.view-customer-btn {
  width: 165px;
  height: 32px;
  border: solid 1px var(--p-blue-2);
  border-radius: 24px;
  background-color: transparent;
  color: var(--n-dark-4);
  font-size: 12px;
  font-weight: 700;
  margin-left: 24px;
}

.view-customer-btn:hover {
  border: solid 1px var(--p-green-5);
}
</style>
