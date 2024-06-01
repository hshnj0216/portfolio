<template>
    <div class="project">
        <div class="project-title">
            <h3>{{ project.title }}</h3>
            <a :href="project.github" target="_blank" class="repository" title="Go to GitHub repository">
                <i class="devicon-github-original"></i>
            </a>
            <a v-if="project.youtube" :href="project.youtube" target="_blank" class="demo" title="Watch YouTube demo">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
        <ProjectTechnologies :technologies="project.technologies" />
        <p class="description">{{ project.description }}</p>
    </div>
</template>
<script>
import ProjectTechnologies from './ProjectTechnologies.vue';
export default {
    props: ['project'],
    components: {
        ProjectTechnologies,
    },
}
</script>
<style>
.project {
    border: solid 1px var(--off-white);
    border-radius: 0.4rem;
    padding: 0.8rem;
    display: grid;
    grid-template-rows: repeat(6, minmax(0, 1fr));
    background-color: var(--blackish-purple);
    opacity: 0.9;
    color: var(--light-lavender);
}
a:visited,
a {
    color: var(--off-white);
    text-decoration: none;
}

.project .project-title {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    grid-row: 1 / 2;
}

.project-title>h3 {
    margin: 0.3rem 0;
}

.project-title>h3,
.project-title .repository {
    margin-right: 0.5rem;
}

.project-technologies {
    grid-row: 2 / 4;
}

.project .description {
    font-size: 1.1rem;
    text-align: justify;
    grid-row-start: 4;
    grid-row-end: 7;
}
</style>