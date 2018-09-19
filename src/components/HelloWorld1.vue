<template>
  <div class="hello1">
    <h1>{{ msg }}</h1>
    <ul>
      <li>First Name</li>
      <li>Second name</li>
      <li>Third Name</li>
    </ul>
    <div v-for="star in info" :key="star" class="star">
      <div align="center">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <div >
              Name: {{ star.name }} Project ID: {{ appName }}
            </div>
          </h5>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" >
              <div class="card-body">
                <div>
                Gender: {{ star.gender }} <br/>
                Mass: {{ star.mass }} <br/>
                Hair Color: {{ star.hair_color }} <br/>
                Eye Color: {{ star.eye_color }} <br/>
                Birth Year: {{ star.birth_year }} <br/>
              </div>
            </div>
          </div>
        </div>
  </div>
  </div>
</template>
<!--
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Hello World 1'
    }
  }
}
</script>
-->
<script>
import axios from 'axios'
import firebase from 'firebase'
export default {
  name: 'HelloWorld1',
  data () {
    return {
      info: [],
      msg: 'You are in hello world 1',
      appName: firebase.app().options.projectId
    }
  },
  created () {
    this.info = null
    this.msg = 'You are in hello world 1'
    this.appName = firebase.app().options.projectId
  },
  mounted () {
    axios
      .get('https://swapi.co/api/people/?format=json&page=5')
      .then(response => (this.info = response.data.results))
      .catch(error => console.log(error))
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
