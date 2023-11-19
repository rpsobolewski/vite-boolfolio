<script>

import axios from 'axios'

export default {
  name: "App",



  data() {

    return {



      base_url: 'http://127.0.0.1:8000',
      project_api: '/api/projects',

      projects: [],


    }

  },


  mounted() {
    axios
      .get(this.base_url + this.project_api)
      .then(response => {
        console.log(response);
        this.project = response.data.result
      })
      .catch(err => {
        console.error(err);
      })
  }

}

</script>

<template>
  <h1>api</h1>
</template>

<style lang="scss"></style>