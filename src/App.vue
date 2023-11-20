<script>
import axios from 'axios';


export default {
  props: {

  },
  name: 'App',

  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      project_api: '/api/projects',
      projects: [],
    };
  },


  mounted() {
    axios
      .get(this.base_url + this.project_api)
      .then(response => {
        console.log(response);
        this.projects = response.data.result;
      })
      .catch(err => {
        console.error(err);
      });
  },

};
</script>
<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects.data" :key="project.id">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <img :src="project.thumb" alt="Project Thumbnail" style="max-width: 100%; height: auto;">
        <!-- Add more project information as needed -->
        <p>Type: {{ project.type.name }}</p>
        <p>Technologies:
          <span v-for="technology in project.technologies" :key="technology.id">{{ technology.name }} </span>
        </p>
        <p>Link:
          <a :href="project.link_project" target="_blank">Project</a>
          <a v-if="project.link_github" :href="project.link_github" target="_blank">GitHub</a>
        </p>
        <p>Created At: {{ project.created_at }}</p>
      </li>
    </ul>
  </div>
</template>


<style lang="scss"></style>
