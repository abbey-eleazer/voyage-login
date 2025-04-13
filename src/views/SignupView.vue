    <template>
    <div class="w-full min-h-[100vh] flex items-center justify-center bg-linear-to-tl/oklch from-indigo-500 to-teal-400 " >
        <div class="container mx-auto lg:flex lg:items-center lg:justify-between">
            <!-- Image  -->
            <div>
                <img class="w-2/3 lg:w-[50rem] mx-auto py-5" src="../assets/logo.png" alt="logo">
            </div>

           
            <!-- SIGN UP form  -->
            <div class="container mx-auto px-5 py-2 md:w-[40rem] md:px-12">
                <h2 class="text-3xl font-semibold text-center mb-8">Create an account! Sign Up</h2>

                <form @submit.prevent="register">
                    <input v-model="credentials.username" type="text" placeholder="Username" required
                     class="w-full h-[3rem] px-4 bg-slate-100 rounded-xl mb-6 outline-0">
                    <input v-model="credentials.email" type="email" placeholder="Email" required
                     class="w-full h-[3rem] px-4 bg-slate-100 rounded-xl mb-6 outline-0">
                    <input v-model="credentials.password" type="password" placeholder="Password" required class="w-full h-[3rem] px-4 bg-slate-100 rounded-xl outline-0">
                    
                    <!-- <div v-show="error" class="text-red-500 py-2 text-center">{{ errorMessage }}</div> -->
                    <button class="bg-orange-400 hover:bg-slate-900 hover:text-white rounded-xl w-full h-[3rem] font-semibold shadow my-4">
                         Sign Up
                    </button>
                </form>
               
                <div class="flex gap-3">
                    <p>Already have an account?</p>
                    <router-link to="/login" class="text-semibold border-b text-white ">Log In</router-link>
                </div>
            </div>
        </div>
        
           
               
    </div>
</template>

<script setup>

import {ref} from 'vue'
import router from '@/router'
import { useAuthStore } from '@/authStore'

const credentials = ref({
  email: '',
  password: '',
  username: '',  
}) 

// let error = ref(null)
// let errorMessage = ref('')
 

// const register = async () => {
//   //  check if inputs are empty
//   if (
//     username !== '' &&
//     email !== '' &&
//     password !== '' 
//   ) {
//     error = false
//     errorMessage = ''

//     const createUser = 
//     createUserWithEmailAndPassword(auth, email, password)
//     const result = await createUser
//     const dataBase = collection(db, 'users')
//     await addDoc(dataBase, {
//       username: username.value,
//       email: email.value,
//       password: password.value,
//     })
//     console.log('error')
//     console.log('User created successfully')
    
//       router.push({name: 'congrats'})
//     return
//   }
//     error = error.code
//     errorMessage = 'Please fillout all fields!'
//   return
// }


const register = () => {
  const authStore = useAuthStore()
  authStore.registerUser(credentials.value)
    
      router.push({ name: 'congrats' })
   
}


</script>
