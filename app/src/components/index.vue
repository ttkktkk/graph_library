<template lang="pug">
.header-component
.footer-component
</template>

<script>
import HeaderComponent from '@/components/layout/Header.vue';
import FooterComponent from '@/components/layout/Footer.vue';

export default {
  name: 'Index',
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style scoped>
main {
  padding: 20px;
}
</style>
