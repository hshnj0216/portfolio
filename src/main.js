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
                    const hasAnimated = el.classList.contains('has-animated');
                    if (!hasAnimated) {
                        el.classList.add(animationClass);
                        el.classList.add('has-animated');
                    }
                    const navId = el.dataset.nav;
                    if(navId) {
                        const navItem = document.querySelector(`#nav-list .${navId}`);
                        if(navItem) {
                            document.querySelectorAll('#nav-list li').forEach(li => {
                                li.classList.remove('active');
                            });
                            navItem.classList.add('active');
                        }
                    }
                } else if (!el.classList.contains('has-animated')) {
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
