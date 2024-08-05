<template>
  <div>
    <h2>Order Detail</h2>
    <p><strong>ID:</strong> {{ order.id }}</p>
    <p><strong>Status:</strong> {{ getOrderStatus(order.orderStatusBuyer) }}</p>
    <p><strong>Buyer:</strong> {{ order.buyerId }}</p>
    <p><strong>Provider:</strong> {{ order.providerId }}</p>
    <p><strong>User:</strong> {{ order.userId }}</p>
    <p><strong>CNPJ:</strong> {{ order.cnpjId }}</p>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  methods: {
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
