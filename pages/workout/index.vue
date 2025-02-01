<script setup lang="ts">
const scrollBar = ref()

const plan = {
    0: [
        { element: "Adv Tuck PL Hold",          secs: 4, sets: 5, equipmant: "Pbars" },
        { element: "Lean Into 2s Tuck Hold",    reps: 3, sets: 3, equipmant: "Pbars" },
        { element: "Handstand Bottom Hold",     secs: 8, sets: 4, equipmant: "Floor" },
        { element: "Bent Arm Tuck PL Hold",     secs: 8, sets: 4, equipmant: "Pbars" },
        
        { element: "Handstand Hold",            secs: 12, sets: 4, equipmant: "Pbars" },
        { element: "Piked Pushups",             reps: 8, sets: 3, equipmant: "Floors" },
        { element: "Pseudo Planche Pushups",    reps: 8, sets: 3, equipmant: "Pbars Low" },
        
        { element: "Planche Lean Hold",         secs: 12, sets: 2, equipmant: "Supinated" },
        { element: "Pushups",                   reps: 20, sets: 4, equipmant: "Pbars" },
    ],
    1: [
        { element: "Adv Tuck FL Hold",          secs: 12, sets: 4, equipmant: "FL Bar / Dip Bar" },
        { element: "One-Leg FL Negatives",      reps: 4, sets: 4, equipmant: "FL Bar / Dip Bar" },
        { element: "Negative To Adv Tuck FL 2S Hold", reps: 1, sets: 6, equipmant: "FL Bar / Dip Bar" },
        { element: "Momentum One-Leg FL Raise", reps: 3, sets: 3, equipmant: "High Bar" },
        
        { element: "FL Lean",                   secs: 12, sets: 3, equipmant: "FL Bar / Dip Bar" },
        { element: "Pullups",                   reps: 9, sets: 4, equipmant: "High Bar" },
        { element: "Chinups",                   reps: 9, sets: 4, equipmant: "High Bar" },
        
        { element: "Shrugs",                    reps: 8, sets: 3, equipmant: "High Bar" },
        { element: "Chinups",                   secs: 21, sets: 2, equipmant: "High Bar" },
    ],
    2: null,
    3: [
        { element: "Adv Tuck PL Hold",          secs: 4, sets: 5, equipmant: "Pbars" },
        { element: "Lean Into 2s Tuck Hold",    reps: 3, sets: 3, equipmant: "Pbars" },
        { element: "Handstand Bottom Hold",     secs: 8, sets: 4, equipmant: "Floor" },
        { element: "Bent Arm Tuck PL Hold",     secs: 8, sets: 4, equipmant: "Pbars" },
        
        { element: "Handstand Hold",            secs: 12, sets: 4, equipmant: "Pbars" },
        { element: "Piked Pushups",             reps: 8, sets: 3, equipmant: "Floors" },
        { element: "Pseudo Planche Pushups",    reps: 8, sets: 3, equipmant: "Pbars Low" },
        
        { element: "Planche Lean Hold",         secs: 12, sets: 2, equipmant: "Supinated" },
        { element: "Pushups",                   reps: 20, sets: 4, equipmant: "Pbars" },
    ],
    4: [
        { element: "Muscle Up",                 reps: 1, sets: 5, equipmant: "High Bar" },
        { element: "Explosive Pullups",         reps: 3, sets: 3, equipmant: "High Bar" },
        { element: "Muscle Up Negatives",       reps: 3, sets: 3, equipmant: "High Bar" },
        { element: "Adv Tuck FL Hold",          reps: -1, sets: 3, equipmant: "FL Bars / Dip Bar" },
        
        { element: "Pull Over",                 reps: 2, sets: 5, equipmant: "High Bar" },
        { element: "One-Leg Tucked FL Negatives", reps: 1, sets: 4, equipmant: "FL Bars / Dip Bar" },
        
        { element: "Chinups",                   reps: 3, sets: 5, equipmant: "High Bar" },
        { element: "Pullups",                   reps: 3, sets: 5, equipmant: "High Bar" },
    ],
    5: null,
    6: [
        { element: "L-sit hold",                secs: 8, sets: 4, equipmant: "PBars" },
        { element: "Assisted V-sit hold",       secs: 8, sets: 4, equipmant: "PBars" },
        { element: "Handstand Weightshifts",    reps: 4, sets: 4, equipmant: "Against Wall" },
        { element: "One Arm Handstand Hold",    secs: 12, sets: 3, equipmant: "Against wall" },
        
        { element: "Leg Raises",                reps: 12, sets: 4 },
        { element: "Handstand",                 secs: 20, sets: 3, equipmant: "Floor" },
        
        { element: "Piked Compressions",        reps: 8, sets: 3, equipmant: "Hands Next To Knees" },
        { element: "Straddle Compressions",     reps: 8, sets: 3, equipmant: "Hands Next To Knees" },
    ],

}
</script>

<template>
    <section class="flex sm:flex-row flex-col justify-evenly h-[45rem] pt-20 bg-primary-light dark:bg-primary-dark text-primary-light dark:text-primary-dark">
        <div class="flex flex-col items-center justify-center p-10 w-full space-y-5">
            <h1 class="text-xl font-bold">Your progress</h1>
            <div class="flex flex-col w-full max-w-md gap-2">
                <span>Max push-ups: 50</span>
                <span>Max pull-ups: 50</span>
                <span>Max dips: 50</span>
            </div>
        </div>
        <div class="flex justify-center items-center w-full">
            <div class="flex flex-col items-center space-y-5 w-full max-w-[40rem] bg-secondary-light dark:bg-secondary-dark border-2 border-primary-light dark:border-primary-dark rounded-md p-5">
                <h1 class="text-xl font-bold">Todays workout</h1>
                <table class="w-full">
                    <tbody>
                        <tr>
                            <th>test1</th>
                            <th>test2</th>
                            <th>test3</th>
                        </tr>
                        <tr v-for="i in 5" :key="i">
                            <td>test{{ i * 3 + 1 }}</td>
                            <td>test{{ i * 3 + 2 }}</td>
                            <td>test{{ i * 3 + 3 }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <section class="flex justify-center pb-20 bg-primary-light dark:bg-primary-dark text-primary-light dark:text-primary-dark">
        <div class="flex w-full max-w-5xl px-4 no-scrollbar overflow-x-auto">
            <div class="flex space-x-5" v-for="i in 2">
                <div v-for="workouts, i in plan" class="relative flex flex-col shrink-0 snap-center items-center space-y-5 h-full bg-secondary-light dark:bg-secondary-dark border-2 border-primary-light dark:border-primary-dark rounded-md p-5" :key="i">
                    <h1 class="text-xl font-bold">day {{ Number(i) + 1 }}</h1>
                    <table v-if="workouts">
                        <tbody>
                            <tr>
                                <th class="text-start">Elements</th>
                                <th class="text-start">Reps/Holds</th>
                                <th class="text-start">Sets</th>
                                <th class="text-start">Equipmant</th>
                            </tr>
                            <tr v-for="workout in workouts" :key="i">
                                <td>{{ workout.element }}</td>
                                <td>{{ workout.reps || `${workout.secs}s` }}</td>
                                <td>{{ workout.sets }}</td>
                                <td>{{ workout.equipmant }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else class="flex justify-center items-center w-full h-full min-w-32"><h1 class="font-bold">Rest</h1></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
th, td {
    text-align: start;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>