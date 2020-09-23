<template>
  <button type="button" class="button" :style="buttonStyles" :class="`button__${position}`">
    <slot></slot>
  </button>
</template>

<script type="text/javascript">
  const defaultStyles = {
    left: 0,
    right: 0,
  };
  export default {
    props: {
      position: {
        type: String,
        default: 'top',
        validator(position) {
          return ['top', 'bottom'].indexOf(position) > -1;
        },
      },
      styles: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        buttonStyles: {
          ...defaultStyles,
          ...this.styles,
        },
      };
    },
  };
</script>

<style scoped lang="scss">
  .button {
    padding: 12px;
    background-color: #fcf6cd;
    color: #f6a623;
    text-align: left;
    position: fixed;
    z-index: 2;
  }
  .button__top {
    top: 0;
  }
  .button__bottom {
    bottom: 0;
  }
</style>