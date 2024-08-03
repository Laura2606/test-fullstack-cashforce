<template>
  <div class="home-view">
    
    <SidebarMenu />
    
  </div>
</template>

<script>

import SidebarMenu from '@/components/SidebarMenu.vue';

export default {
  name: 'HomeView',
  components: {
   
    SidebarMenu
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
