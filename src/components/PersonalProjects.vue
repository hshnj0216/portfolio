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
                    technologies: ['nextjs', 'nodejs', 'express', 'typescript', 'docker', 'git', 'github'],
                    description: 'An interactive kanji learning application that allows users to study, practice, or test their Kanji knowledge. It uses the Kanji Character Classification Web API for advanced drawing features. ',
                    github: 'https://github.com/hshnj0216/kanji_kaisen',
                },
                {
                    title: 'Kanji Classification Web API',
                    technologies: ['csharp', 'dotnetcore', 'python', 'git', 'docker', 'github'],
                    description: 'An interactive kanji learning application that allows users to study, practice, or test their Kanji knowledge. It uses the Kanji Character Classification Web API for advanced drawing features. ',
                    github: 'https://github.com/hshnj0216/KanjiClassificationWebAPI',
                },
                {
                    title: 'Laravel Job Appication Tracker',
                    technologies: ['php', 'laravel', 'git', 'github', 'docker', 'html5', 'css3'],
                    description: 'A Laravel application for tracking job applications. fafdfdafadfsdfsdfas',
                    github: 'https://github.com/hshnj0216/KanjiClassificationWebAPI',
                }
            ],
        }
    }
}
</script>
<style scoped>
#personal-projects {
    display: flex;
    flex-direction: column;
}
#project-list{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}
/* For medium screen sizes */
@media only screen and (min-width: 600px) {
    #project-list{
        grid-template-columns: 1fr 1fr;
    }
}

/* For large screen sizes */
@media only screen and (min-width: 992px) {
    #project-list{
        grid-template-columns: 1fr 1fr;
    }
}

h2 {
    grid-row: 1/2;
    margin-top: 0;
}
</style>