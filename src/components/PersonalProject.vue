<template>
    <div class="project">
        <div class="project-details">
            <div class="project-title">
                <h3>{{ project.title }}</h3>
                <a :href="project.github">
                    <i class="devicon-github-original"></i> 
                </a>
            </div>
            <ProjectTechnologies :technologies="project.technologies"/>
            <p class="description">{{ project.description }}</p>
        </div>
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
.project{
    border: solid 1px var(--off-white);
    border-radius: 0.4rem;
    padding: 0.8rem;

}
a:visited {
    color: var(--off-white);
    text-decoration: none;
}
.project .description{
    font-size: 1.1rem;
}
</style>