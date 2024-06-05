<template>
    <div class="project-technologies">
        <TechnologyBadge v-for="techKey in technologies" :key="techKey" :label="getTechnologies.get(techKey)" />
    </div>
</template>
<script>
import TechnologyBadge from './TechnologyBadge.vue'
import { mapGetters } from 'vuex';
export default {
    props: ['technologies'],
    components: { TechnologyBadge },
    computed: {
        ...mapGetters({
            getTechnologies: 'getTechnologies',
        }),
    },
}
</script>
<style scoped>
.project-technologies{
    grid-row: 2/3;
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;
    align-items: flex-start;
}
.project-technologies .technology-badge{
    flex:0 1 auto;
}
</style>