<!--main.vue-->
<template>
  <button class="my-button"
          :class="['my-button-size-'+size]"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    size: {
      type: String,
      default: 'big'
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .my-button {
    display: inline-block;
    line-height: 1;
    cursor: pointer;
    background: #fff;
    border: 1px solid #ddd;
    color: #000;
    text-align: center;
    outline: none;
    font-size: 14px;
    border-radius: 4px;
  }

  .my-button.my-button-size-big {
    padding: 12px 20px;
  }

  .my-button.my-button-size-mid {
    padding: 10px 20px;
  }

  .my-button.my-button-size-small {
    padding: 10px 10px;
  }
</style>
