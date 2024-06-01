<template>
    <section id="contact">
        <h2>Contact</h2>
        <form @submit="handleSubmit" @submit.prevent="submitForm">
            <div class="input-group" id="name-group">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" v-model="name" @input="v$.name.$touch()" tabindex="1" />
                <small v-if="v$.name.$error">Name is required and must be at least 2 characters long.</small>
            </div>
            <div class="input-group" id="email-group">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" v-model="userEmail" @input="v$.userEmail.$touch()" tabindex="1" />
                <small v-if="v$.userEmail.$error">A valid email is required.</small>
            </div>
            <div class="input-group" id="textarea-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="100" rows="10" v-model="message" @input="v$.message.$touch()" tabindex="1"></textarea>
                <small v-if="v$.message.$error">Message is required and must be at least 50 characters long.</small>
            </div>
            <div id="button-container">
                <button tabindex="1">Send Message</button>
            </div>
        </form>
    </section>
</template>

<script>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, alpha, email } from '@vuelidate/validators';
export default {
    name: 'ContactSection',
    setup() {
        const name = ref('');
        const userEmail = ref(''); // renamed to userEmail
        const message = ref('');

        const rules = {
            name: { required, alpha, minLength: minLength(2) },
            userEmail: { required, email }, // renamed to userEmail
            message: { required, minLength: minLength(50) },
        };

        const v$ = useVuelidate(rules, { name, userEmail, message });

        async function handleSubmit() {
            const isFormValid = await v$.value.$validate();
            if(isFormValid) {
                alert('Form is valid');
            } else {
                alert('Form is not valid');
            }
        }

        return {
            name,
            userEmail, 
            message,
            handleSubmit,
            v$
        }
    }
}
</script>
<style scoped>
#contact {
    height: 100dvh;
    box-sizing: border-box;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    text-align: center;
}

form {
    background-color: var(--blackish-purple);
    border-radius: var(--border-radius);
    border: solid 1px var(--off-white);
    padding: 2rem;
    max-width: 80%;
    max-height: 75%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: repeat(6, minmax(0, 1fr));
    gap: 1rem;
}

.input-group {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
}

.input-group small {
    font-size: 0.7rem;
    margin-top: 0.2rem;
}

.input-group label {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: var(--light-lavender);
    text-align: left;
}

.input-group input,
.input-group textarea {
    padding: 0.75rem;
    border: 1px solid #444;
    border-radius: var(--border-radius);
    background-color: var(--dark-blue);
    color: var(--off-white);
    font-size: 1rem;
    transition: border-color 0.3s;
}

.input-group input:focus,
.input-group textarea:focus {
    border-color: var(--medium-blue);
    outline: none;
}

#textarea-group {
    grid-column: 1 / 3;
    grid-row: 2 / 6;
    margin-top: 1.5rem;
    margin-bottom: 0;
}

#textarea-group>textarea {
    resize: none;
    height: 75%;
    max-width: 100%;
    max-height: 80%;
} 

#button-container {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
    text-align: center;
    margin-top: 1.5rem;
}

button {
    background-color: var(--medium-blue);
    color: var(--off-white);
    padding: 0.75rem 2rem;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

button:hover {
    background-color: var(--indigo);
}

button:active {
    transform: scale(0.95);
}
</style>