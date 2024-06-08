<template>
    <nav>
      <ul id="nav-list">
        <li class="introduction" title="Introduction">
          <a href="#introduction">
            <i class="fa fa-user"></i>
            <span>Introduction</span>
          </a>
        </li>
        <li class="personal-projects" title="Projects">
          <a href="#personal-projects">
            <i class="fa fa-briefcase"></i>
            <span>Projects</span>
          </a>
        </li>
        <li class="certificates-badges" title="Certificates & Badges">
          <a href="#certificates-badges">
            <i class="fa fa-certificate"></i>
            <span>Certificates & Badges</span>
          </a>
        </li>
        <li class="contact" title="Contact">
          <a href="#contact">
            <i class="fa fa-envelope"></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  <script>
  export default {
    name: 'NavigationPanel',
    mounted() {
      this.addSmoothScrolling();
    },
    methods: {
      addSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
          });
        });
      },
    },
  }
  </script>
  
<style scoped>
nav {
    background-color: var(--medium-blue);
    box-sizing: border-box;
    position: sticky;
    top: 0;
    height: 100dvh;
    grid-column: 1/3;
    z-index: 1000;
    padding: 1rem 0;
}

#nav-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 1rem;
    padding-block: 2rem;
    padding-left: 0.5rem;
    font-size: 0.8rem;
    width: 100%;
    max-width: 100%;
}

#nav-list li {
    box-sizing: border-box;
    border-radius: 100vh 0 0 100vh;
}

#nav-list li:not(.active):hover {
    background-color: var(--ultramarine);
    opacity: 0.6;
    transition: background-color 0.25s ease-in;
}

#nav-list li.active {
    background-color: var(--ultramarine);
    position: relative;
    transition: background-color 0.25s ease-in;
}

#nav-list li.active::before,
#nav-list li.active::after {
    --border-radius: 1rem;
    content: '';
    position: absolute;
    width: var(--border-radius);
    height: var(--border-radius);
    right: 0;
    background-color: var(--medium-blue);
}

#nav-list li.active::before {
    box-shadow: 5px 5px 0 5px var(--ultramarine);
    top: calc(var(--border-radius) * -1);
    border-radius: 0 0 100vw 0;
}

#nav-list li.active::after {
    box-shadow: 5px -5px 0 5px var(--ultramarine);
    bottom: calc(var(--border-radius) * -1);
    border-radius: 0 100vw 0 0;
}

#nav-list a {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    height: 100%;
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding: 1rem 1rem;
}

#nav-list a span{
    display: none;
}

@media only screen and (min-width: 768px) {
  a > i {
    font-size: 1.5rem;
  }
}

@media only screen and (min-width: 1100px) {
    nav {
        background-color: var(--medium-blue);
        position: sticky;
        top: 0;
        max-height: 100vh;
        grid-column: 1/3;
        width: 100%;
    }

    #nav-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-rows: 1fr;
        box-sizing: border-box;
        gap: 2rem;
        padding-block: 2rem;
        font-size: 1rem;
        padding-left: 1rem;
        width: 100%;
    }

    #menu-toggle,
    #nav-list li a i {
        display: none;
    }

    #nav-list li a span {
        display: inline-block;
    }

    #nav-list li {
        box-sizing: border-box;
        border-radius: 100vh 0 0 100vh;
        /* padding: 2rem 2rem; */
    }

    #nav-list li:not(.active):hover {
        background-color: var(--ultramarine);
        opacity: 0.6;
        transition: background-color 0.25s ease-in;
    }

    #nav-list li.active {
        background-color: var(--ultramarine);
        position: relative;
        transition: background-color 0.25s ease-in;
    }

    #nav-list li.active::before,
    #nav-list li.active::after {
        --border-radius: 1rem;
        content: '';
        position: absolute;
        width: var(--border-radius);
        height: var(--border-radius);
        right: 0;
        background-color: var(--medium-blue);
    }

    #nav-list li.active::before {
        box-shadow: 5px 5px 0 5px var(--ultramarine);
        top: calc(var(--border-radius) * -1);
        border-radius: 0 0 100vw 0;
    }

    #nav-list li.active::after {
        box-shadow: 5px -5px 0 5px var(--ultramarine);
        bottom: calc(var(--border-radius) * -1);
        border-radius: 0 100vw 0 0;
    }

    #nav-list a {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: white;
        text-decoration: none;
        font-weight: 600;
        padding: 2rem 2rem;
    }
}
</style>