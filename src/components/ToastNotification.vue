<template>
    <transition name="fade">
        <div class="toast" v-if="showToast">
            <p>{{ message }}</p>
            <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
            <button @click="closeToast">Close</button>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    showToast: Boolean,
    message: String,
});

const emit = defineEmits(['update:showToast']);

const localShowToast = ref(props.showToast);
const progressWidth = ref(100);

watch(() => props.showToast, (newValue) => {
    localShowToast.value = newValue;
    if (newValue) {
        startTimer();
    }
});

const startTimer = () => {
    progressWidth.value = 100;
    const interval = setInterval(() => {
        if (progressWidth.value > 0) {
            progressWidth.value -= 2;
        } else {
            closeToast();
            clearInterval(interval);
        }
    }, 40);
};

const closeToast = () => {
    localShowToast.value = false;
    emit('update:showToast', false);
};

onMounted(() => {
    if (props.showToast) {
        startTimer();
    }
});
</script>

<style scoped>
.toast {
    /* Example styles */
    padding: 10px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    position: relative;
}

.progress-bar {
    height: 5px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.4s linear;
}
</style>
