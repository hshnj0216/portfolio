<template>
    <div class="technology-badge">
        {{ label }}
    </div>
</template>
<script>
export default{
    props: ['label'],
}
</script>
<style>
.technology-badge{
    text-align: center;
    border: solid 1px var(--off-white);
    padding: 0.3rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    user-select: none;
}
</style>