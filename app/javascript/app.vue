<template lang="pug">
.main
  .main_page
    router-view
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.main_page {
  color: blue;
}
</style>
