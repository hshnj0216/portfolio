<template>
    <section id="personal-projects">
        <h2>Projects</h2>
        <div id="project-list">
            <PersonalProject v-for="(project) in personalProjects" :key="project.id" :project="project" />       
        </div>
    </section>
</template>
<script>
import PersonalProject from './PersonalProject.vue';
export default {
    components: {
        PersonalProject,
    },
    data() {
        return {
            personalProjects: [
                {
                    title: 'Kanji Kaizen',
                    technologies: ['nextjs', 'react', 'tailwind', 'nodejs', 'express', 'typescript', 'html5', 'css3', 'javascript'],
                    description: 'An interactive kanji learning application that allows users to study, practice, or test their Kanji knowledge. It uses the Kanji Character Classification Web API for advanced drawing features. ',
                    github: 'https://github.com/hshnj0216/kanji_kaisen',
                    youtube: 'https://www.youtube.com/watch?v=sBxLi-FJUBQ',
                },
                {
                    title: 'Kanji Classification Web API',
                    technologies: ['csharp', 'dotnetcore', 'python'],
                    description: 'An interactive kanji learning application that allows users to study, practice, or test their Kanji knowledge. It uses the Kanji Character Classification Web API for advanced drawing features. ',
                    github: 'https://github.com/hshnj0216/KanjiClassificationWebAPI',
                    youtube: 'https://www.youtube.com/watch?v=C7A-EFfuRRc',
                },
                {
                    title: 'Djangonics',
                    technologies: ['django', 'python', 'jquery', 'bootstrap', 'sass', 'html5', 'css3', 'javascript', 'postgresql'],
                    description: 'An e-commerce application built with Django that features IBM Cloud, Google Sign In, and PayPal payment integration.',
                    github: 'https://github.com/hshnj0216/djangonics-ecommerce-app',
                },
            ],
        }
    }
}
</script>
<style scoped>
#personal-projects {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
#project-list{
    display: flex;
    gap: 1rem;
    flex-direction: column;
 }
 h2{
    margin-top: 0;
    font-size: 1.5rem;
 }

/* For large screen sizes */
@media only screen and (min-width: 1100px) {
    #personal-projects{
        padding: 3rem;
        height: 100dvh;
        max-height: 100dvh;
    }
    #project-list{
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
    }
    h2{
        font-size: 3rem;
    }
}
</style>