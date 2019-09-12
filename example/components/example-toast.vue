<template>
  <div class="example-toast">
    <my-button @click="clickFunc">
      这是一个Toast
    </my-button>
  </div>
</template>

<script>
export default {
  name: 'example-button',
  methods: {
    clickFunc () {
      this.$myui.toast.show({
        text: '这是一个Toast'
      })
    }
  }
}
</script>

<style scoped>

</style>
