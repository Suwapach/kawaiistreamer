<template>
<div>
    <v-img
      v-if="componum == 0"
        cover
        height="max"
        src="@/assets/background/Background3.jpg"
    >
  <v-container>
    <v-responsive class="mt-12">
      <v-row class="justify-start" v-if="componum == 0">
        <v-col cols="6" class="mt-10">
          <v-img
            height="400"
            src="@/assets/LogoFinal.png"
          />
          <v-row class="justify-center mt-1">
            <v-col cols="10">
              <v-text-field
              placeholder="Your name here..."
              v-model="user_name"
              variant="underlined"
              color="secondary"
              class="text-h5"
              >

              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-center mt-n5">
            <v-col cols="auto">
              <v-btn
              v-model="startbutton"
              class="text-h4 text-white startbutton"
              rounded="pill"
              height="80"
              width="250"
              variant="flat"    
              @click="mcname()"
              >
                Start
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-img
            src="@/assets/other/Visual_Art_21.png"
          />
        </v-col>
      </v-row>
      <compo :mc_name="mc_name" v-if="componum == 1" />
      

      
    </v-responsive>
  </v-container>
</v-img>

<compo :mc_name="mc_name" v-if="componum == 1" />
</div>
</template>

<script >
import { useRouter } from 'vue-router';
import compo from '@/components/Chapter1compo.vue'
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
                componum: 0
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
</style>
