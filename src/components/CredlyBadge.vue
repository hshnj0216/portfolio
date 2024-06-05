<template>
    <div class="credly-badge">
        <a :href="publicURL" target="_blank">
            <img :src="src" alt="credly badge">
        </a>
    </div>
</template>
<script>
export default {
    props: ['badgeId', 'src', 'publicURL'],
}
</script>
<style scoped>
.credly-badge img {
    width: 6rem;
    height: 6rem;
    transition: transform 0.2s ease;
}

.credly-badge img:hover {
    transform: scale(1.5);
}

@media only screen and (min-width: 768px) {
    .credly-badge img {
        width: 8rem;
        height: 8rem;
    }
}

@media only screen and (min-width: 1100px) {
    .credly-badge img{
        width: 10rem;
        height: 10rem;
    }


}
</style>