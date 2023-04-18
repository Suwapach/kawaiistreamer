<template>
<div>
    <v-img
      v-if="componum == 0"
        cover
        height="max"
        src="@/assets/background/Background3.jpg"
    >
  <v-container  fluid>
    <v-responsive class="mt-12">
      <v-row class="justify-center"  v-if="componum == 0">
        <v-col cols="5" xl6 class="mt-10">
          <v-img
            
            src="@/assets/LogoFinal.png"
          />
          <v-row class="justify-center mt-12">
            <v-col class="mt-12" cols="12"></v-col>
            <v-col cols="10">
              <v-text-field
              placeholder="Your name here..."
              v-model="user_name"
              variant="underlined"
              color="secondary"
              height="200"
              
              >

              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-center mt-5">
            <v-col cols="auto">
              <v-btn
              v-model="startbutton"
              class="text-h4 text-white startbutton"
              rounded="pill"
              height="200"
              width="800"
              variant="flat"   
              @click="mcname()"
              >
                <h1>Start</h1>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5" class="">
          <v-img
            src="@/assets/other/Visual_Art_21.png"
          />
        </v-col>
      </v-row>
      
      
    </v-responsive>
  </v-container>
</v-img>
<Transition name="fade">
     <compo :mc_name="mc_name" v-if="componum == 1" />
 </Transition>


</div>
</template>

<script >
import { useRouter } from 'vue-router';
import compo from '@/components/Chapter1compo.vue'
import sound1 from '@/assets/song/Labyrinth_In_The_Head.mp3'
export default {
        name : "Chapter1compo",
        components:{
          compo
        },
        data() {
            return {
                textstory : 0,
                router : useRouter(),
                mc_name : "",
                componum: 0,
                player1 : new Audio(sound1),
                // store : useStore(),
            }
    
        },
        // computed : {
        //   ...mapState(['mcname'])
        // },
        methods: {
          // ...mapMutations(['ADDmcname']),
          mcname(){
            // ADDmcname("aaaa")
            this.mc_name = this.user_name 
            this.componum = 1
            // this.$router.push('/chapter1')
            }
        }
    }


</script>
<style>
.startbutton{
  background: linear-gradient(0deg, rgba(149,73,223,1) 0%, rgba(174,105,222,1) 100%);
}
.textfeild{
      text-align: center
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}

.fade-enter-active{
  transition: all 2s ease;
}
</style>
