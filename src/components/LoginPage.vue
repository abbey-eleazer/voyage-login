<template>
    <div class="w-full min-h-[100vh] flex items-center justify-center " >
        <div class="container mx-auto lg:flex lg:items-center lg:justify-between">
            <!-- Image  -->
            <div>
                <img class="w-2/3 lg:w-[50rem] mx-auto py-5" src="../assets/logo.png" alt="logo">
            </div>

            <!-- LOGIN form  -->
            <div  class="container mx-auto px-5 py-2 md:w-[40rem] md:px-12">
                <h2 class="text-3xl font-semibold text-center mb-8">Welcome back! Log In</h2>
                <form @submit.prevent="login">
                    <input v-model="credentials.email" type="email" placeholder="Email" required
                     class="w-full h-[3rem] px-4 bg-slate-100 rounded-xl mb-6 outline-0">
                    <input v-model="credentials.password" type="password" placeholder="Password" required class="w-full h-[3rem] px-4 bg-slate-100 rounded-xl outline-0">
                    <a href="# ">
                        <p class="text-right py-2">forgot password?</p>
                    </a>
                    <div v-show="error" class="text-red-500 py-2 text-center">{{ errorMessage }}</div>
                    <button type="submit" class="bg-orange-400 hover:bg-slate-900 hover:text-white rounded-xl w-full h-[3rem] font-semibold shadow my-4">
                         Log In
                    </button>
                </form>
               
                <div class="flex gap-3 mb-8">
                    <p>Don't have an account?</p>
                    <router-link to="/signup" class="text-semibold border-b text-white">Sign Up</router-link>
                </div>
            </div>


            
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import router from '@/router'
import { useAuthStore } from '@/authStore'

// user auth 


const credentials = ref({
  email: '',
  password: '',  
})

// const errorMessage = ref('INVALID CREDENTIALS')
// const auth = getAuth();

//  const login = ()=> {
//     try {
//         signInWithEmailAndPassword(auth, email, password)
       
//             // Signed in 
//             router.push({ name: 'congrats'})
        
            
      
//     } catch (error) {
//         switch(error.code) {
//             case 'auth/user-not-found':
//                 errorMessage
//                 break;
//             case 'auth/wrong-password':
//                 errorMessage
//                 break;
//             case 'auth/email-already-in-use':
//                 errorMessage
//                 break;
//             case 'auth/invalid-email':
//                 errorMessage
//                 break;
//             default:
//                 errorMessage.value = 'An error occurred'
//         }
//         return
//     }

//     router.push({ name: 'congrats'})
// }


const error = ref(false)
const errorMessage = ref('INVALID CREDENTIALS')

const login = () => {
const authStore = useAuthStore()
  authStore.loginUser(credentials.value)
    
      router.push({ name: 'congrats' })
   
}

</script>