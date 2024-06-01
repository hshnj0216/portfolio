<template>
  <div id="app-grid">
    <NavigationPanel />
    <main id="content">
      <IntroductionSection v-scrollanimation data-animation="animate-introduction" data-nav="introduction" />
      <PersonalProjects v-scrollanimation data-animation="animate-projects" data-nav="personal-projects" />
      <CertificatesBadges v-scrollanimation data-animation="animate-certificates" data-nav="certificates-badges" />
      <ContactSection v-scrollanimation data-animation="animate-contact" data-nav="contact" />
    </main>
  </div>
</template>

<script>
import IntroductionSection from './components/IntroductionSection.vue';
import NavigationPanel from './components/NavigationPanel.vue';
import PersonalProjects from './components/PersonalProjects.vue';
import CertificatesBadges from './components/CertificatesBadges.vue';
import ContactSection from './components/ContactSection.vue';
export default {
  name: 'App',
  components: {
    IntroductionSection,
    NavigationPanel,
    PersonalProjects,
    CertificatesBadges,
    ContactSection,
  }
}
</script>

<style>
:root {
  --medium-blue: #3F0FB7;
  --indigo: #45089D;
  --midnight-blue: #4B0082;
  --ultramarine: #18196D;
  --dark-blue: #2C1492;
  --off-white: #F8F8F8;
  --text-alt: #a499e8;
  --pastel-purple: #BDA0CB;
  --light-lavender: #E6E6FA;
  --navy-blue: #000080;
  --deep-indigo: #4B0082;
  --blackish-purple: #242145;
  --primary-color: var(--midnight-blue);
  --secondary-color: var(--blackish-purple);
  --accent-color: var(--medium-blue);
  --text-color: var(--off-white);
  --text-alt-color: var(--text-alt);
  --border-radius: 8px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--off-white);
}

#app-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

#app-grid nav {
  position: sticky;
  min-height: 100vh;
}

main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  grid-column: 3/13;
  align-items: center;
  padding: 0 5rem;
  font-size: 1.5rem;
  background-color: var(--ultramarine);
  overflow: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;

}

section {
  scroll-snap-align: start;
  min-height: 100vh;
}
</style>./components/TechnologiesSkills.vue
