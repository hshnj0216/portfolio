<template>
    <section id="personal-projects">
        <h2>Projects</h2>
        <div id="project-list">
            <PersonalProject v-for="(project, index) in personalProjects" :key="project.id" :project="project"
                :index="index" @playerReady="addPlayer"
                :style="{ transition: 'left 0.5s ease', left: getProjectPosition(index) }" />
        </div>
        <div id="carousel-controls">
            <button class="prev" @click="rotateCarousel('prev')">Prev</button>
            <button class="next" @click="rotateCarousel('next')">Next</button>
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
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem 0;
    max-height: 100vh;
    width: 100%;
    overflow: hidden;
}

h2 {
    grid-row: 1/2;
    margin-top: 0;
}

#project-list {
    grid-column: 1/13;
    grid-row: 2/12;
    display: flex;
    justify-content: center;
    position: relative;
    max-width: 100%;
    max-height: 600px;
}

#carousel-controls {
    grid-column: 1/13;
    grid-row: 12/13;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}

#carousel-controls button {
    background-color: var(--indigo);
    padding: 0.1rem;
    color: var(--off-white);
}

#carousel-controls .prev {
    grid-column: 6/7;
}

#carousel-controls .next {
    grid-column: 7/8;
}

.project.left {
    z-index: 1;
    pointer-events: none;
}

.project.center {
    box-shadow: 0px 5px 26px 3px rgb(0, 0, 0, 30);
    transform: scale(1.1);
    z-index: 2;
}

.project.right {
    z-index: 1;
    pointer-events: none;
}
</style>