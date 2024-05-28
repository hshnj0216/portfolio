<template>
<nav>
    <ul id="nav-list">
        <li class="active">
            <a href="#introduction">About Me</a>
        </li>
        <li>
            <a href="#personal-projects">Projects</a>
        </li>
        <li>
            <a href="#certificates-badges">Certificates & Badges</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
    </ul>
</nav>
</template>
<script>
export default{

}
</script>
<style scoped>
nav{
    background-color: var(--medium-blue);
    position: sticky;
    top: 0;
    max-height: 100vh;
    grid-column: 1/3;
}
#nav-list{
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
#nav-list li{
    box-sizing: border-box;
    border-radius: 100vh 0 0 100vh;
    padding: 2rem 2rem;
}
#nav-list li.active{
    background-color: var(--ultramarine);
    position: relative;
}

#nav-list li.active::before,
#nav-list li.active::after{
    --border-radius: 1rem;
    content: '';
    position: absolute;
    width: var(--border-radius);
    height: var(--border-radius);
    right: 0;
    background-color: var(--medium-blue);
}

#nav-list li.active::before{
    box-shadow: 5px 5px 0 5px var(--ultramarine);
    top: calc(var(--border-radius) * -1);
    border-radius: 0 0 100vw 0;

}
#nav-list li.active::after{
    box-shadow: 5px -5px 0 5px var(--ultramarine);
    bottom: calc(var(--border-radius) * -1);
    border-radius: 0 100vw 0 0;
}
#nav-list a{
    color: white;
    text-decoration: none;
}
</style>