
<template>
    <div>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <img :src="project.thumb" alt="Project Thumbnail" style="max-width: 100%; height: auto;">
        <p>Type: {{ project.type.name }}</p>
        <p>Technologies:
            <span v-for="technology in project.technologies" :key="technology.id">{{ technology.name }} </span>
        </p>
        <p>Link:
            <a :href="project.link_project" target="_blank">Project</a>
            <a v-if="project.link_github" :href="project.link_github" target="_blank">GitHub</a>
        </p>
        <p>Created At: {{ project.created_at }}</p>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>
