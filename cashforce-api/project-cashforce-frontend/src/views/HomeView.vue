<template>
  <div class="home-view">
    
    <SidebarMenu />
    <OrderList />
    
  </div>
</template>

<script>

import SidebarMenu from '@/components/SidebarMenu.vue';
import OrderList from '@/components/OrderList.vue';

export default {
  name: 'HomeView',
  components: {
   
    SidebarMenu,
    OrderList
  },
};
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>
