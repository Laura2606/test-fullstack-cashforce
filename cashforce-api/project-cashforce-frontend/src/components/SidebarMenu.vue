<template>
  <div class="sidebar">
    <div class="logo-container">
      <img src="@/assets/cashforce-logo.png" alt="Logo" class="logo" />
    </div>
     <router-link to="/notas-fiscais" class="sidebar-item">Notas Fiscais</router-link>
    <!-- Adicione mais elementos de menu aqui -->
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  width: 288px;
  height: 900px;
  left: 0px;
  top: 0px;
  background-color: #ffffff; /* Fundo branco */
  border-right: 1px solid #e0e0e0; /* Borda direita */
}

.logo-container {
  width: 288px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
}

.logo {
  max-width: 100%;
  max-height: 100%;
}

.sidebar-item {
  display: block;
  padding: 16px;
  text-decoration: none;
  color: rgb(35, 214, 156); /* Verde água */
  font-size: 18px;
  text-align: center;
}

.sidebar-item:hover {
  background-color: #e0f7f5;
}
</style>
