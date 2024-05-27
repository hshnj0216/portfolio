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
    display: flex;
    gap: 0.3rem;
}
</style>