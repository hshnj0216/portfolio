<template>
    <div class="credly-badge">
        <a :href="publicURL">
            <img :src="src" alt="credly badge">
        </a>
    </div>
</template>
<script>
export default{
    props: ['badgeId', 'src', 'publicURL'],
}
</script>
<style scoped>
.credly-badge{
    /* padding: 1rem;
    overflow: hidden;
    border: solid 1px var(--off-white); */
}
.credly-badge img{
    transition: transform 0.2s ease;
}
.credly-badge img:hover{
   transform: scale(1.5);
}
</style>