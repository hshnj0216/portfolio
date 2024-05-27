<template>
    <section id="technologies-skills">
        <h2>Technologies/Skills</h2>
        <div id="tech-list">
            <TechnologyBadge v-for="([key, value], index) in getTechnologies" :key="key" :label="value" :style="{animationDelay: `${index *  0.1}s`}"/>             
        </div>
    </section>
</template>
<script>
import TechnologyBadge from './TechnologyBadge.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        TechnologyBadge,
    },
    computed: {
        ...mapGetters({
            getTechnologies: 'getTechnologies',
        })
    }
}
</script>
<style scoped>
#technologies-skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 4rem 0;
  scroll-snap-align: start;
  outline: solid 1px #fff;

}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--off-white);
  text-align: center;
}

#tech-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.technology-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid var(--off-white);
  font-size: 1rem;
  transition: background-color 0.2s, transform 0.2s;
  animation: slideIn 0.2s forwards;
  animation-fill-mode: backwards;
}

.technology-badge:hover {
  background-color: var(--indigo);
  color: #fff;
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  #tech-list {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>
