<template>
    <div>
        <div class="card m-2">
            <img :src="project.thumb" alt="project.title" class="card-img-top">
            <div class="card-body h-100">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <p class="card-text">Type: {{ project.type.name }}</p>
                <template v-if="project.technologies && project.technologies.length > 0">
                    <p class="card-text">Technologies:
                        <span class="badge bg-success m-1" v-for="technology in project.technologies"
                            :key="technology.id">{{ technology.name }}</span>
                    </p>
                </template>
                <p class="card-text">Link:
                    <a :href="project.link_project" target="_blank" class="btn btn-primary m-1">Project</a>
                    <a :href="project.link_github" target="_blank" class="btn btn-secondary m-1">GitHub</a>
                </p>

                <router-link :to="{ name: 'detail', params: { id: project.id }, }" class="text-decoration-none">
                    Detail
                </router-link>



            </div>
        </div>
    </div>
</template>


<script>
import { state } from '../state.js';

export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            state
        }
    }
};

</script>

<style scoped></style>
