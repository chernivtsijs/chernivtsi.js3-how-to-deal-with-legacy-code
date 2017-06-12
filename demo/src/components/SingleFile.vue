<template>
    <div>
        <h1>Clicked {{ count }} time(s)</h1>
        <button @click="onClick">Click me</button>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      onClick () {
        this.count++
      }
    }
  }
</script>

<style scoped>
    h1 {
        color: blue;
    }
</style>
