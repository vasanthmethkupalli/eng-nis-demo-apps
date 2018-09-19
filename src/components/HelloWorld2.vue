<template>
  <div class="hello">
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
              Name: {{ star.name }}
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
<script>
import axios from 'axios'
export default {
  name: 'HelloWorld2',
  data () {
    return {
      info: [],
      msg: 'Hello World'
    }
  },
  created () {
    this.msg = 'Hello World2'
    this.info = null
  },
  mounted () {
    axios
      .get('https://swapi.co/api/people/?format=json&page=')
      .then(response => (this.info = response.data.results))
      .catch(error => console.log(error))
  }
  /*
  mounted () {
    this.$http.get('https://swapi.co/api/people/?format=json&page=').then(result => { this.info = result.data.results })
  }
  */
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
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
