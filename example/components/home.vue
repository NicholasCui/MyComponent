<template>
  <div class="example-home">
    <my-button @click="$router.push('button')">
      Button
    </my-button>
    <my-button @click="$router.push('toast')">
      Toast
    </my-button>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>

</style>
