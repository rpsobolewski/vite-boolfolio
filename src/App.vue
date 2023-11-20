<!-- App.vue -->
<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects.data" :key="project.id">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue'; // Adjust the path based on your project structure

export default {
  components: {
    ProjectCard,
  },
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

<style>
/* Add your component-specific styles here */
</style>
