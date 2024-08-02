<template>
  <div class="notas-fiscais">
    <HeaderDetail />
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Nota Fiscal</th>
            <th>Sacado</th>
            <th>Cedente</th>
            <th>Emissão</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="nota in notasFiscais" :key="nota.id">
            <td>{{ nota.notaFiscal }}</td>
            <td>{{ nota.sacado }}</td>
            <td>{{ nota.cedente }}</td>
            <td>{{ new Date(nota.emissao).toLocaleDateString() }}</td>
            <td>{{ nota.valor.toFixed(2) }}</td>
            <td>{{ statusMap[nota.status] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HeaderDetail from '@/components/HeaderDetail.vue';

export default {
  name: 'NotasFiscais',
  components: {
    HeaderDetail,
  },
  data() {
    return {
      notasFiscais: [],
      statusMap: [
        'Status 0', 'Status 1', 'Status 2', 'Status 3', 'Status 4', 
        'Status 5', 'Status 6', 'Status 7', 'Status 8'
      ],
    };
  },
  created() {
    this.fetchNotasFiscais();
  },
  methods: {
    async fetchNotasFiscais() {
      try {
        const response = await fetch('http://localhost:3000'); // Substitua pela URL da sua API
        const data = await response.json();
        this.notasFiscais = data;
      } catch (error) {
        console.error('Erro ao buscar notas fiscais:', error);
      }
    },
  },
};
</script>

<style scoped>
.notas-fiscais {
  margin: 20px;
}

.table-container {
  width: 1177px;
  margin-left: 110px; /* Alinhamento com o header */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
