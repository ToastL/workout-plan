<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons'

const notificationCenter = useState('notificationCenter', () => false)

const notifications = ref([
    'Etien',
    'BalArie',
    'Etien',
    'BalArie',
    'Etien',
    'BalArie',
    'jan',
    'BalArie',
    'Etien',
    'BalArie',
    'Etien',
    'BalArie',
    'jan'
])
</script>

<template>
    <Transition name="center">
        <div v-if="notificationCenter" class="fixed mt-20 p-5 right-0 pointer-events-none">
            <div class="flex flex-col items-center space-y-5 px-2 pb-2 pt-5 bg-primary-light dark:bg-primary-dark border-2 border-primary-light dark:border-primary-dark pointer-events-auto text-primary-light dark:text-primary-dark rounded-md">
                <h1 class="text-xl font-bold">Notifications</h1>
                <TransitionGroup class="relative border-2 border-primary-light dark:border-primary-dark rounded-md list-none overflow-hidden h-96 min-w-72 overflow-y-auto" tag="ul" name="notification">
                    <li v-for="name, i in notifications" :key="name" class="relative z-10 flex items-center justify-between px-3 py-2 space-x-2 bg-secondary-light dark:bg-secondary-dark border-b-2 border-primary-light dark:border-primary-dark">
                        <h1 class="text-md">{{ name }} wants you to be his trainer</h1>
                        <div class="flex space-x-2">
                            <button @click="() => {notifications.splice(i, 1); console.log(notifications)}" class="flex justify-center items-center bg-red w-8 h-8 rounded-md p-2 text-primary-dark"><FontAwesomeIcon class="w-full h-full pointer-events-none" :icon="faX" /></button>
                            <button class="flex justify-center items-center bg-green w-8 h-8 rounded-md p-2 text-primary-dark"><FontAwesomeIcon class="f-full h-full pointer-events-none" :icon="faCheck" /></button>
                        </div>
                    </li>
                    <div class="z-0 absolute top-0 flex justify-center items-center w-full h-full">
                        <h1 class="font-bold text-grey-light dark:text-grey-dark">Inbox</h1>
                    </div>
                </TransitionGroup>
            </div>
        </div>
    </Transition>
</template>

<style>
.center-enter-active,
.center-leave-active {
  transition: all 0.2s ease;
}
.center-enter-from,
.center-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.notification-move,
.notification-enter-active,
.notification-leave-active {
  transition: all 0.2s ease;
}
.notification-enter-from,
.notification-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
.notification-leave-active {
  position: absolute;
}
</style>