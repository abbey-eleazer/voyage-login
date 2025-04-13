<template>
    <div id="congrats" class="pb-24">
        <div class="w-full h-24 py-2 bg-slate-200/70 shadow-md fixed top-0">
             <nav class="container mx-auto  flex justify-between items-center px-5 py-1">
                <div >
                    <img class="w-[5rem] mx-auto" src="../assets/logo.png" alt="logo">
                </div>
                <div>
                    <button type="submit" @click="logout" class="w-[10rem] bg-orange-400 hover:text-white px-2 hover:bg-slate-500 text-white rounded-xl  h-[3rem] font-semibold shadow my-4">
            Log Out
                    </button>  
                </div>
             </nav>
        </div>

        <div class="container mx-auto px-5">
           <div class="pt-32">
            <h1 class="text-4xl md:text-6xl font-bold">Movies</h1>
            <p class="text-xl md:text-2xl w-2/3 my-5">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
           </div>
           
           <div class="mt-24">
            <h2 class="text-2xl md:text-3xl font-semibold my-4 pl-4">Your Next Watch</h2>
            <div class="container mx-auto flex items-center justify-center gap-12 flex-wrap ">
                <div v-for="movie in movies" :key="movie.movie_id" >
                <div class="w-[16rem] h-[23rem] bg-slate-200/80 shadow-md rounded-lg overflow-hidden cursor-pointer">
                 <img :src="movie.poster_path" alt="movie" class="w-full h-[83%]" />
                <p class="text-lg px-2">{{movie.original_title}}</p>
                </div>
            </div>
            </div>
           
           </div>
        </div>
    </div>
</template>

<script setup>
import axiosClient from "@/axiosClient";
import router from "@/router";
import { getAuth, signOut } from "firebase/auth";


import { ref, onMounted } from "vue";

let movies = ref([]);

onMounted(
   async() => {
    const res = await axiosClient.get('https://jsonfakery.com/movies/paginated', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
    movies.value = res.data.data
    // return movies.value
    console.log(movies)
  }  
  )
  

const auth = getAuth();
const logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.

    }).catch((error) => {
        // An error happened.
    });
    router.push("/login");
}
</script>