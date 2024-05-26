<template>
    <div class="project" v-bind:class="project.position">
        <div class="demo-video">
            <iframe :src="'https://www.youtube.com/embed/' + project.id + '?enablejsapi=1'" frameborder="0" class="yt-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        <div class="project-details">
            <div class="project-title">
                <h3>{{ project.title }}</h3>
                <a :href="project.github">
                    <i class="devicon-github-original"></i> 
                </a>
            </div>
            <div class="technologies">
                <TechnologyBadge v-for="techKey in project. technologies" :key="techKey" :label="getTechnologies.get(techKey)" />
            </div>
            <p class="description">{{ project.description }}</p>
        </div>
    </div>
</template>
<script>
import TechnologyBadge from './TechnologyBadge.vue';
import { mapGetters } from 'vuex';
export default {
    props: ['project'],
    components: {
        TechnologyBadge,
    },
    computed: {
        ...mapGetters({
            getTechnologies: 'getTechnologies',
        }),
    },
    methods: {
        onPlayerReady(event) {
            this.$emit('playerReady', event.target);
        }
    }
}
</script>
<style>
.project {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    border: solid 1px var(--off-white);
    background-color: var(--midnight-blue);
    border-radius: 1rem;
    padding: 1rem;
    position: absolute;
    max-width: 600px;
    height: 550px;
    gap: 0.5rem;
}

.demo-video {
    width: 100%;
    position: relative;
    grid-column: 1/13;
    grid-row: 1/8;
}

.demo-video iframe {    
    width: 100%;
    height: 100%;
}

.project-details{
    grid-column: 1/13;
    grid-row: 8/13;
}

.project-details h3, .project-details p {
    text-align: left;
}

.project-details h3{
    margin: 0;
}

.project-details p{
    font-size: 1rem;
}

.project-title{
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}
.project-title a{
    text-decoration: none;
    color: var(--off-white);
}
.project-title h3{
    margin-right: 0.5rem;
}
.technologies {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
    font-size: 1rem;
}

</style>