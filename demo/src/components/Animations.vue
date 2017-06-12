<template>
    <div>
        <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" :key="item">
                Number: <b>{{ item }}</b>
            </li>
        </transition-group>
        <button @click="shuffle">Shuffle</button>
        <button @click="sort">Sort</button>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import shuffle from '../utils/shuffle'

  @Component({
    components: {},
    props: {}
  })
  export default class Animations extends Vue {
    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    shuffle () {
      this.items = shuffle(this.items)
    }
    sort () {
      this.items.sort((a, b) => a - b)
    }
  }
</script>

<style scoped lang="scss">
    .flip-list-move {
        transition: transform 1s;
    }

    $elements: 10;
    $base: 200;
    $borderBase: $base - 70;
    @function color-gradient($b, $i) {
        @return rgb($i*5 + $b, $b + 50 - $i*5, $i*2 + $b + 10);
    }
    @for $i from 1 to $elements+1 {
        li:nth-child(#{$i}) {
            background: color-gradient($base, $i);
            border-color: color-gradient($borderBase, $i);
        }
    }

    ul {
        padding: 0;
    }

    li {
        list-style-type: none;
        padding: 0.5rem;
        margin: 0.5rem;
        width: 21rem;
        border: 1px solid black;
        box-sizing: border-box;
    }
</style>
