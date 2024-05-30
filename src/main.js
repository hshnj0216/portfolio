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
                    el.classList.add(animationClass);

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
