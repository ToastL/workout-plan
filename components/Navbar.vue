<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const notificationCenter = useState('notificationCenter')
function toggleNotificationCenter() {
    notificationCenter.value = !notificationCenter.value
}

const darkMode = ref(false)

function toggleTheme() {
    darkMode.value = !darkMode.value

    localStorage.currentTheme = darkMode.value ? 'dark' : 'light'

    document.documentElement.classList.toggle('dark', darkMode.value)
}

onMounted(() => {
    const darkMode = localStorage.currentTheme ? localStorage.currentTheme === "dark" :
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)

    if (darkMode) toggleTheme()
})
</script>

<template>
    <header class="fixed flex justify-center px-10 w-full h-20 backdrop-blur-xl z-20">
        <div class="flex justify-between items-center h-full max-w-[50rem] w-full">
            <NuxtLink to="/" class="text-primary dark:text-primary-dark font-bold">Workout Plan</NuxtLink>
            <div class="flex space-x-5">
                <button class="relative w-10 h-10 bg-secondary-light dark:bg-secondary-dark border-2 border-primary-light dark:border-primary-dark rounded-md p-2" v-on:click="toggleNotificationCenter">
                    <FontAwesomeIcon class="text-primary-light dark:text-primary-dark w-full h-full" :icon="faEnvelope"/>
                    <div class="absolute w-4 h-4 bg-red rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
                </button>

                <button class="w-10 h-10 bg-secondary-light dark:bg-secondary-dark border-2 border-primary-light dark:border-primary-dark rounded-full overflow-hidden" @click="toggleTheme">
                    <div class="flex h-full w-[200%] transition-transform duration-200" :class="darkMode ? '-translate-x-1/2' : 'translate-x-0'">
                        <div class="h-full w-full p-2"><FontAwesomeIcon class="text-primary-light dark:text-primary-dark w-full h-full" :icon="faSun" /></div>
                        <div class="h-full w-full p-2"><FontAwesomeIcon class="text-primary-light dark:text-primary-dark w-full h-full" :icon="faMoon" /></div>
                    </div>
                </button>
            </div>
        </div>
    </header>
</template>