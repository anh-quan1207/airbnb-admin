<template>
  <div id="wrapper">
    <the-header v-if="showHeaderFooter"></the-header>
    <div id="dashboard">
      <the-side-bar v-if="showHeaderFooter"></the-side-bar>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">

</style>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheSideBar from '@/components/TheSideBar.vue';

const route = useRoute();
const showHeaderFooter = computed(() => !route.meta.noHeaderFooter);
</script>