<!-- ProjectCard.vue -->
<template>
    <div>
        <div class="card">
            <img :src="project.thumb" class="card-img-top" alt="Project Thumbnail">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <p class="card-text"><small class="text-muted">Created At: {{ project.created_at }}</small></p>
                <p class="card-text">Type: {{ project.type.name }}</p>
                <p class="card-text">Technologies:
                    <span v-for="technology in project.technologies" :key="technology.id">{{ technology.name }} </span>
                </p>
                <p class="card-text">Link:
                    <a :href="project.link_project" target="_blank" class="btn btn-primary">Project</a>
                    <a v-if="project.link_github" :href="project.link_github" target="_blank"
                        class="btn btn-secondary">GitHub</a>
                </p>
            </div>
        </div>
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
