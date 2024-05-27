<template>
  <div id="app-grid">
    <NavigationPanel /> 
    <div id="content">
      <IntroductionSection v-scrollanimation data-animation="animate-introduction" />
      <TechnologiesSkills v-scrollanimation data-animation="animate-technologies" />  
      <PersonalProjects v-scrollanimation data-animation="animate-projects" />
      <CertificatesBadges v-scrollanimation data-animation="animate-certificates" />
    </div>
  </div>
</template>

<script>
import IntroductionSection from './components/IntroductionSection.vue';
import NavigationPanel from './components/NavigationPanel.vue';
import TechnologiesSkills from './components/TechnologiesSkills.vue';
import PersonalProjects from './components/PersonalProjects.vue';
import CertificatesBadges from './components/CertificatesBadges.vue';
export default {
  name: 'App',
  components: {
    IntroductionSection,
    NavigationPanel,
    TechnologiesSkills,
    PersonalProjects,
    CertificatesBadges,
  }
}
</script>

<style>
:root{
  --medium-blue: #3F0FB7;
  --indigo: #45089D;
  --midnight-blue: #4B0082;
  --ultramarine: #18196D;
  --dark-blue: #2C1492;
  --off-white: #F8F8F8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:var(--off-white);
}
#app-grid{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
#app-grid nav{
  position: sticky;
  min-height: 100vh;
}
#content{
  height: 100vh;
  display: flex;
  flex-direction: column;
  grid-column: 3/13;
  align-items: center;
  padding: 0 5rem;
  font-size: 1.5rem;
  background-color: var(--ultramarine);
  overflow: scroll;
  scroll-snap-type: y mandatory;

}
section{
  scroll-snap-align: start;
  min-height: 100vh;
}
</style>./components/TechnologiesSkills.vue
