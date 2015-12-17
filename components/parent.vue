<template>
  <child :someprop="someprop"></child>
</template>

<script>
  import child from './child.vue'

  export default {
    components: {
      child,
    },
    data() {
      return {
        someprop: {}
      }
    },
    ready() {
      setTimeout(() => {
        this.someprop = {
          a: 1,
          b: 2
        }
      }, 2000)
    }
  }
</script>