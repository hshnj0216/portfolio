<template>
    <section id="contact">
        <h2>Contact</h2>
        <form action="POST">
            <label for="message">Your message:</label>
            <textarea name="message" id="message" cols="50" rows="10"></textarea>
            <input type="submit" value="Send">
        </form>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
#contact{
    height: 100vh;
    box-sizing: border-box;
    padding: 3rem;
}
form{
    background-color: var(--ultramarine);
    border: solid 1px var(--offset-white);
    display: flex;
    flex-direction: column;
}
</style>