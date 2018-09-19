<template>
  <div class="hello">
    <h1>Test Heading</h1>
    <div> {{ count }} <button @click="increment">Increment</button> </div>
  </div>
</template>
<script>

export default {
  name: 'sample',
  data () {
    return {
      count: 0
    }
  },
  created () {
    this.count = null
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
