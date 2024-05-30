<template>
    <section id="contact">
        <h2>Contact</h2>
        <form action="POST">
            <div class="input-group">
                <label for="email">Your email:</label>
                <input id="email"  type="email" name="email" />

            </div>
            <div class="input-group">
                <label for="message">Your message:</label>
                <textarea name="message" id="message" cols="100" rows="10"></textarea>
            </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2{
    text-align: center;
}
form{
    background-color: var(--midnight-blue);
    border: solid 1px var(--off-white);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
}
form .input-group{
    display: flex;
    flex-direction: column;
}
.input-group input, .input-group textarea{
    border-radius: 0.2rem;
    background-color: var(--blackish-purple);
    color: var(--text-alt);
    padding: 0.3rem;
    font-size: 0.8rem;
}
.input-group label{
    text-align: left;
}
.input-group textarea{
    max-width: 100%;
    max-height: 60%;
}
input[type='submit']{
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 0.4rem;
    font-size: 0.7rem;
}
</style>