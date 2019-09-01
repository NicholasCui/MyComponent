<template>
  <div class="example-button">
    <my-button @click="clickFunc">
      这是一个按钮
    </my-button>
    <my-button size="mid" @click="clickFunc">
      这是一个按钮
    </my-button>
    <my-button size="small" @click="clickFunc">
      这是一个按钮
    </my-button>
  </div>
</template>

<script>
export default {
  name: 'example-button',
  methods: {
    clickFunc () {
      alert('Click')
    }
  }
}
</script>

<style scoped>

</style>
