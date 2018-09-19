<template>
  <main>
    <div id="app">
    <img src="./assets/infusionsoft.jpeg">
    <router-link to="/test1">Go to Hello World 1</router-link>
    <router-link to="/test2">Go to Hello World 2</router-link>
    <router-link to="/">Go to Main</router-link>
    <router-link to="/sample">Sample</router-link>
    <h2>Project ID: {{ appName }}</h2>
    <router-view/>
    </div>
  </main>
</template>>

<script>
import axios from 'axios'
import firebase from 'firebase'
export default {
  name: 'App',
  data () {
    return {
      info: [],
      appName: firebase.app().options.projectId
    }
  },
  mounted () {
    axios
      .get('https://swapi.co/api/people/?format=json&page=')
      .then(response => (this.info = response.data.results))
      .catch(error => console.log(error))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
