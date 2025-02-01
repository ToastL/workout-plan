<script setup lang="ts">
const register = ref(false)

const form = reactive({
  username: '',
  email: '',
  password: ''
})

const errors: {
  username: { [index: number]: string },
  email: { [index: number]: string }
  password: { [index: number]: string }
} = reactive({
  username: {},
  email: {},
  password: {}
})

let fetchTimer = 0
let timer = ref(false)
watch(timer, () => fetchTimer = timer.value ? .5 : 0)
let prev = 0
const loop = async (now: number) => {
  const dt = now-prev
  prev = now

  if (timer.value == true) {
    fetchTimer -= dt/1000
    if (fetchTimer <= 0) {
      timer.value = false

      const username = await $fetch('/api/account/exists', { method: 'POST', body: { type: 'username', value: form.username }})
      const email = await $fetch('/api/account/exists', { method: 'POST', body: { type: 'email', value: form.email }})

      if (username.exists) errors.username[1] = "Username is already in use"
      else delete errors.username[1]
      if (email.exists) errors.email[1] = "Email is already in use"
      else delete errors.email[1]
    }
  }

  requestAnimationFrame(loop)
}
onMounted(() => requestAnimationFrame(loop))

const validate = () => {
  if (!register.value) return

  // username
  if (form.username.length == 0) errors.username[0] = "Please fill in your username"
  else {
    delete errors.username[0]

    timer.value = true
  }
  
  // emai;
  if (form.email.length == 0) errors.email[0] = "Please fill in your email"
  else {
    delete errors.email[0]

    timer.value = true
  }

  
  // password
  if (form.password.length < 8) errors.password[0] = 'It has to be at least 8 characters'
  else delete errors.password[0]
  if (form.password.search(/[a-z]/) < 0) errors.password[1] = 'Must have at least 1 letter'
  else delete errors.password[1]
  if (form.password.search(/[A-Z]/) < 0) errors.password[2] = 'Must have at least 1 capital letter'
  else delete errors.password[2]
  if (form.password.search(/[0-9]/) < 0) errors.password[3] = 'Must have at least 1 number'
  else delete errors.password[3]
  if (form.password.search(/[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/) < 0)errors.password[4] = ('Must have at least 1 special character')
  else delete errors.password[4]
}

watch(form, validate)
watch(register, () => {
  errors.username = {}
  errors.email = {}
  errors.password = {}

  validate()
})

validate()

async function onSubmit(event: SubmitEvent) {
  if (Object.keys(errors.username).length > 0 || (register.value && Object.keys(errors.email).length > 0) || Object.keys(errors.password).length > 0)
    return

  if (register.value) {
    const registered = await $fetch('/api/account/register', { method: 'POST', body: form })
    const logged = registered.success ? await $fetch('/api/account/login', {
      method: 'POST',
      body: form
    }) : { success: false }

    if (logged.success) await navigateTo('/workout')
    else alert('Something went wrong')
  } else {
    const logged = await $fetch('/api/account/login', {
      method: 'POST',
      body: form
    })
    
    if (logged.success) await navigateTo('/workout')
    else errors.password[0] = "Password is wrong"
  }
}

//@ts-ignore
const noSpace = (e: KeyboardEvent) => e.key == ' ' ? e.preventDefault() : e.target.value = e.target.value.toLocaleLowerCase()
</script>

<template>
  <section class="flex justify-center items-center w-full h-screen max-h-screen bg-primary-light dark:bg-primary-dark">
    <TransitionGroup name="register" tag="form" class="flex flex-col items-center justify-center space-y-5" @submit.prevent="onSubmit">
      <h1 :key="'header'" class="text-xl text-primary-light dark:text-primary-dark">Do you want to create an account or log in?</h1>
      <label :key="'register'" for="register" class="min-w-[15rem] group select-none">
        <input v-model="register" type="checkbox" name="register" id="register" class="absolute opacity-0">
        <div class="relative bg-secondary-light dark:bg-primary-dark border-2 border-primary-light dark:border-primary-dark rounded-md">
          <div class="z-0 absolute p-1 w-1/2 h-full top-0 left-0 group-has-[:checked]:left-1/2 transition-all duration-200">
            <div class="w-full h-full rounded bg-primary-light dark:bg-secondary-dark border-2 border-primary-light dark:border-primary-dark"></div>
          </div>

          <div class="z-10 relative flex space-x-5 px-2 py-2">
            <div class="flex justify-center w-full text-primary-light dark:text-primary-dark"><span>Log in</span></div>
            <div class="flex justify-center w-full text-primary-light dark:text-primary-dark"><span>Sign up</span></div>
          </div>
        </div>
      </label>

      <div :class="{'space-y-2': Object.keys(errors.username).length > 0 }" :key="'username'">
        <input @keyup="noSpace" v-model="form.username" class="z-10 px-4 py-2 bg-secondary-light dark:bg-secondary-dark border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-md outline-none w-[20rem]" type="text" name="username" id="test1" :placeholder="register ? 'Username' : 'Username or Email'">
        <TransitionGroup name="err" tag="ul" class="px-2 list-disc list-inside">
          <li v-for="err in errors.username" :key="err" class=" text-red">{{ err }}</li>
        </TransitionGroup>
      </div>
      <div v-if="register" :class="{'space-y-2': Object.keys(errors.email).length > 0 }" :key="'email'">
        <input @keyup="noSpace" v-model="form.email" class="z-0 px-4 py-2 bg-secondary-light dark:bg-secondary-dark border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-md outline-none w-[20rem] " type="email" name="email" id="test2" placeholder="Email">
        <TransitionGroup name="err" tag="ul" class="px-2 list-disc list-inside">
          <li v-for="err in errors.email" :key="err" class=" text-red">{{ err }}</li>
        </TransitionGroup>
      </div>
      <div :class="{'space-y-2': Object.keys(errors.password).length > 0 }" :key="'password'">
        <input v-model="form.password" class="z-10 px-4 py-2 bg-secondary-light dark:bg-secondary-dark border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-md outline-none w-[20rem]" type="password" name="password" id="test3" placeholder="Password">
        <TransitionGroup name="err" tag="ul" class="px-2 list-disc list-inside">
          <li v-for="err in errors.password" :key="err" class=" text-red">{{ err }}</li>
        </TransitionGroup>
      </div>

      <span :key="'remember'" class="flex justify-center items-center space-x-2">
        <input type="checkbox" name="" id="">
        <h1 class="text-primary-light dark:text-primary-dark">Remember me</h1>
      </span>
        
      <input :key="'submit'" class="bg-green border-2 border-green-light dark:border-green-dark dark:bg-green-dark px-4 py-2 rounded-md text-secondary" type="submit" value="Submit">
    </TransitionGroup>
  </section>
</template>

<style>
.register-move,
.register-enter-active,
.register-leave-active {
  transition: all 0.2s ease;
}
.register-enter-from,
.register-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.register-leave-active {
  position: absolute;
}

.err-move,
.err-enter-active,
.err-leave-active {
  transition: all 0.2s ease;
}
.err-enter-from,
.err-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.err-leave-active {
  position: absolute;
}
</style>