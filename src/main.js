import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);

app.directive('scrollanimation', {
    mounted(el) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    const animationClass = el.dataset.animation;
                    el.classList.Add(animationClass);
                } else {
                    const animationClass = el.dataset.animation;
                    el.classList.remove(animationClass);
                }
            },
            {
                threshold: 0.1
            }
        );
        observer.observe(el);
    }
});

app.use(store);

app.mount('#app');
