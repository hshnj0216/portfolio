import { createStore } from "vuex";

const store = createStore({
	state: {
		technologies: new Map([
			['html5', 'HTML5'],
            ['css3', 'CSS3'],
			['javascript', 'JavaScript'],
            ['typescript', 'TypeScript'],
            ['python', 'Python'],
            ['csharp', 'C#'],
            ['php', 'PHP'],
            ['sass', 'SASS'],
            ['dotnetcore', '.NET Core'],
            ['django', 'Django'],
            ['react', 'React'],
            ['angular', 'Angular'],
            ['vue', 'Vue'],
            ['nextjs', 'Next.js'],
            ['nodejs', 'Node.js'],
            ['express', 'Express'],
            ['git', 'Git'],
            ['github', 'GitHub'],
            ['docker', 'Docker'],
            ['mysql', 'MySQL'],
            ['postgresql', 'PostgreSQL'],
			['jquery', 'jQuery'],
            ['laravel', 'Laravel'],
            ['codeigniter', 'CodeIgniter'],
		]),
	},
    getters: {
        getTechnologies: state => state.technologies,
    },
});

export default store;