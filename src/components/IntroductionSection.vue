<template>
    <section id="introduction">
        <h1>Hi! I'm Leonard Decena</h1>
        <p>
            As a passionate web developer, I bring ideas to life through code. My journey began with a
            curiosity for how things work and evolved into a love for creating intuitive and dynamic web applications.
            From the intricacies of mechanical engineering to the fluidity of front-end frameworks, my path has been
            anything but conventional.
        </p>
        <p>
            You can check out my
            <a href="https://drive.google.com/file/d/1WHS92LIo8RFCKTiIB5bFEKpf8FRC23e0/view?usp=drive_link" target="_blank" title="View resume">
                <strong>resume</strong>
            </a> for more details about me.
        </p>
        
    </section>
</template>
<script>
export default{

}
</script>
<style scoped>
@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
#introduction{
    box-sizing: border-box;
    min-height: 100vh;
    scroll-snap-align: start;
    padding: 5rem;
}
h1, p{
    text-align: left;
}
h1{
    animation: slideIn 0.5s backwards ease-out;
}
p{
    animation: slideIn 0.8s backwards ease-out;
    animation-delay: 0.2s;
}
strong{
    text-decoration: underline;
}
</style>