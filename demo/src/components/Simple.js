export default {
  template: '<div>' +
  '<h1>Clicked {{ count }} time(s)</h1>' +
  '<button v-on:click="onClick">Click me</button>' +
  '</div>',

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
