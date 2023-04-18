<template>
    <div>
        <v-img
            cover
            v-if="componum == 0"
            src="@/assets/background/Background4.jpg"
        >
      <v-container>
        <v-responsive >
          <v-row class="justify-center">
            <v-col cols="10">
                <div v-if="textstory == 0">
                    <v-img
                    class="ml-5 mr-5"   
                        max-height="500"
                        cover
                        src="@/assets/other/Untitled-1.png"
                    >
                   
                    </v-img>
                </div>
                <div v-if="textstory >= 1 && textstory <= 5">
                    <v-img 
                        class="ml-5 mr-5"
                                src="@/assets/other/bgwebboard1.jpg"
                                
                                max-height="500"
                                cover
                            >
 
                    <v-row class="justify-center">
                            <v-col cols="8" v-if="this.post == 0">
                                <v-card   width="680" max-height="447" class="mt-8 mb-1" color="grey-lighten-5">
                                    <v-card-text>
                                        <v-list-item
                                            v-for="folder in folders"
                                            :key="folder.title"
                                            :title="folder.title"
                                            :subtitle="folder.subtitle"  
                                            :type = "divider"
                                            class="mt-n1"
                                        >
                                            <template v-slot:prepend>
                                                <v-avatar size="30" class="mt-n3" :color = "folder.color">
                                                </v-avatar>
                                            </template>

                                            <template v-slot:append>
                                                <v-btn
                                                    @click = "reportfuntion(folder)"
                                                    class="mt-n3"
                                                    :color="folder.report"
                                                    icon="mdi-information-outline"
                                                    variant="text"
                                                    size="small"
                                                ></v-btn>
                                            </template>
                                            <v-btn
                                                class=""
                                                v-if="folder.like == 1"
                                                :color="folder.report"
                                                icon="mdi-heart"
                                                size="small"
                                                variant="text"
                                            ></v-btn>
                                            <v-btn
                                                @click = "likefuntion(folder)"
                                                v-if="folder.like == 0"
                                                :color="folder.report"
                                                icon="mdi-heart-outline"
                                                size="small"
                                                variant="text"
                                            ></v-btn>
                                            <v-btn
                                                :color="folder.report"
                                                icon="mdi-message-outline"
                                                size="small"
                                                variant="text"
                                            ></v-btn>
                                    
                                        </v-list-item>
                                    </v-card-text>
                                </v-card>
                            </v-col>

                            <v-col cols="8" v-if="this.post == 1">
                                <v-card width="680" min-height="447" class="mt-8 mb-1" color="grey-lighten-5">
                                    <v-card-text>
                                        <v-col cols="12" class="mt-12"></v-col>
                                        <v-col cols="12" class=""></v-col>
                                        <v-row class="justify-center">
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(1)" color="secondary" block rounded="xl" size="x-large">
                                            สตรีมเมื่อคืนสนุกมากเลย อยากติดตามอีกคน <br/>ขึ้นมาด้วยเลย หวังว่าจะเล่นด้วยกันอีกนะ
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(2)" color="secondary" block rounded="xl" size="x-large">
                                            ขอบคุณที่มาเล่นกับเธอนะ สนุกมากเลย
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(3)" color="secondary" block rounded="xl" size="x-large">
                                            แอบผิดหวังขึ้นมานิดหน่อย แต่ถ้าสนุกก็พอแล้ว
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                
                                        
                                    </v-card-text>
                                </v-card>
                                
                            </v-col>
                        <v-col cols="1" class="ml-12 mr-n12">
                            <v-col cols="12" class="nt-12"></v-col>
                            
                            <v-row class="justify-end mr-n8">  
                                <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-6"></v-col>                       
                                <v-btn
                                    color="white"
                                    icon="mdi-bell"
                                    variant="text"
                                    size="x-large"
                                >
                                    
                                        <v-icon size="x-large">mdi-bell</v-icon>
            
                                </v-btn>
                            </v-row>
                            <v-row class="justify-end mr-n8">
                        
                                <v-btn
                                        color="white"
                                        icon="mdi-border-color"
                                        variant="text"
                                        size="x-large"
                                        v-if="this.postbutton == true"
                                        @click = "this.post = 1"
                                    >
                                    <v-icon size="x-large">mdi-border-color</v-icon>
                                </v-btn>
                                    <v-btn
                                        color="white"
                                        icon="mdi-border-color"
                                        variant="text"
                                        size="x-large"
                                        v-if="this.postbutton == false"
                                    >
                                    <v-icon size="x-large">mdi-border-color</v-icon>
                                </v-btn>
                            </v-row>
                        </v-col>
                        
                    </v-row>
                    </v-img>

                </div>
                
                <div v-if="textstory >= 6 || textstory >= 8">
                    <v-img
                    class="ml-5 mr-5"   
                        max-height="500"
                        cover
                        src="@/assets/cutsence/CG04.jpg"
                    >
                        <v-row class="justify-center" >
                            <v-col cols="12"></v-col>
                            <v-col cols="12"></v-col>
                            <v-col cols="12"></v-col>
                            <v-col cols="12"></v-col>
                            <v-col cols="12"></v-col>
                            <v-col cols="12"></v-col>
                            <v-col cols="8"  v-if="textstory == 7">
                                <v-btn variant="outlined" @click = "selectchoice(1)" block background-color="white" color="primary" rounded="xl" size="x-large">
                                    เขียนจดหมายขอบคุณ
                                </v-btn>
                            </v-col>
                            <v-col cols="8" v-if="textstory == 7">
                                <v-btn variant="outlined" @click = "selectchoice(2)" block background-color="white" color="primary" rounded="xl" size="x-large">
                                    จดหมายแสดงความรักมากๆ
                                </v-btn>
                            </v-col>
                            <v-col cols="8" v-if="textstory == 7">
                                <v-btn variant="outlined" @click = "selectchoice(3)" block background-color="white" color="primary" rounded="xl" size="x-large">
                                    จดหมายต่อว่าเรื่องสนใจแฟนคลับคนอื่นมากกว่า
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-img>
                </div>
            </v-col>
          </v-row>
          <v-row class="justify-center">
                <v-col cols="6" class="">
                    <v-img
                            height="200"
                            src="@/assets/other/Textbox01.png"
                    >
                    <v-row>
                        <v-col cols="12" class="ml-5 mt-1">
                            <div>
                                <h2 class="text-white" v-if="textstory == 0 || textstory == 4 || textstory == 5 || textstory == 7 || textstory == 8 ">
                                    {{ mc_name }}
                                </h2>
                                <h2 class="text-white" v-if="textstory == 1 || textstory == 2 || textstory == 3 || textstory == 6">
                                        (คำบรรยาย)
                                </h2>
                            </div>  
                        </v-col>
                    </v-row>
                    <v-row class="justify-center">
                        <v-col cols="11">
                            <div v-if="textstory == 0">
                                <p class="text-secondary idfont font-weight-bold">
                                    15.39 ...ให้ตาย เพราะสตรีมเมื่อคืนทำเอาตื่นสาย ไม่สิ เย็นขนาดนี้แล้วหรอเนี่ย.. งั้นก็เช็คเว็บบอร์ดสักหน่อย..
                                </p>
                            </div>    
                            <div v-if="textstory == 1">
                                <p class="text-secondary idfont font-weight-bold"> 
                                    [เช็คเว็บบอร์ด รีแอค] <br/> <br/>
                                </p>
                            </div>    
                            <div v-if="textstory == 2">
                                <p class="text-secondary idfont font-weight-bold">
                                    [เช็คเว็บบอร์ด โพสต์]<br/><br/>
                                </p>
                            </div> 
                            <div v-if="textstory == 3">
                                <p class="text-secondary idfont font-weight-bold">
                                    [มีโพสต์มาจากสตรีมเมอร์สาว เป็นเกี่ยวกับเรื่องการส่งของขวัญ และจดหมาย และจะพักไลฟ์ช่วงวันธรรมดา]<br/><br/>
                                </p>
                            </div>
                            <div v-if="textstory == 4">
                                <p class="text-secondary idfont font-weight-bold">
                                    ถึงจะพึ่งติดตามได้ไม่นาน แต่อยากลองส่งดูสักครั้ง<br/><br/>
                                </p>
                            </div>  
                            <div v-if="textstory == 5">
                                <p class="text-secondary idfont font-weight-bold">
                                    ถ้าอย่างนั้นก็ต้อง…<br/><br/>
                                </p>
                            </div> 
                            <div v-if="textstory == 6">
                                <p class="text-secondary idfont font-weight-bold">
                                    [MCเดินไปหยิบปากกากับกระดาษมานั่งเขียนจดหมายอย่างตั้งใจ]<br/><br/>
                                </p>
                            </div>   
                            <div v-if="textstory == 7">
                                <p class="text-secondary idfont font-weight-bold">
                                    จะเขียนแบบไหนดีนะ?<br/><br/>
                                </p>
                            </div>  
                            <div v-if="textstory == 8">
                                <p class="text-secondary idfont font-weight-bold">
                                    หวังว่าเธอจะได้อ่านแล้วชอบจดหมายที่ส่งไปนะ<br/><br/>
                                </p>
                            </div>
                    
                        </v-col>
                    </v-row>
                    <v-row class="justify-end">
                        <v-col cols="12"></v-col>
                        <v-btn
                            class="mt-n3 mr-5"
                            variant="text"
                            icon="mdi-chevron-right"
                            color="primary"
                            @click = "story()"
                        >
                        </v-btn>
                    </v-row>
                    
                    </v-img>
                        
                    </v-col>
                <v-col cols="3" class="">
                    <v-img
                    height="200"
                    src="@/assets/other/Spritebox_Small.png"
                    >
                        <div v-if="textstory == 0 || textstory == 1 || textstory >= 5 || textstory <= 10 || textstory >= 14 || textstory <= 16">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC00.png"
                            />
                        </div>
                        <div v-if="textstory == 8">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC01.png"
                            />
                        </div>
                        <div v-if="textstory == 2 || textstory == 3 || textstory == 4 || textstory == 7 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC05.png"
                            />
                        </div>
                        <div v-if="textstory == 5 || textstory == 6">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC02.png"
                            />
                        </div>
                    </v-img>
                </v-col>
              </v-row>
          
    
          
        </v-responsive>
      </v-container>
    </v-img>
    <compo5c :mc_name="mcname" v-if="componum == 1" />
    </div>
    </template>
    
    <script>
    import { useRouter } from 'vue-router';
    // import compo5a from '@/components/Chapter5happycompo.vue'
    // import compo5b from '@/components/Chapter5normalcompo.vue'
    import compo5c from '@/components/Chapter5badcompo.vue'
    export default {
        name : "Chapter4compo",
        props: { mc_name: String },
        components:{
            compo5c,
        },
        
        data() {
            return {
                textstory : 0,
                choice : 0,
                router : useRouter(),
                post : 0,
                postbutton: false,
                componum: 0,
                mcname : "",
                folders: [
                {
                    subtitle: 'สตรีมวันนี้ก็สนุกดีนะ แต่ตอนที่เอียงตัวเข้าไปซบกันนี่มันจะไม่เกินไปหน่อยหรอ?',
                    title: 'ต้นหอมย่าง',
                    color: 'pink-accent-1',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'วันนี้สนุกมาก ๆ เลย ! อยากเห็นตอนเธอกรี๊ดอีกเลยอะ',
                    title: 'tsisonfire',
                    color: 'deep-purple-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'คู่นี้อยู่ด้วยกันก็ตลกชะมัด จะรอคราวหน้าที่มาเล่นด้วยกันอีกเลย !',
                    title: 'tongkatsulover',
                    color: 'indigo-darken-1',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'สองคนนั้นจะต้องมีอะไรกันแน่ ๆ สุดท้ายที่เสียเงินไปก็เพื่อให้เธอเอาไปใช้กับผู้ชายที่ไหนก็ไม่รู้อย่างนั้นน่ะหรอ',
                    title: 'puropuchi',
                    color: 'blue-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'ฝั่งผู้ชายวางแผนเอาไว้แล้วใช่ไหมล่ะ ว่าเธอจะตกใจจนเอียงตัวเข้าหา มองจากนอกโลกก็รู้',
                    title: 'babyblue',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
    
                ],
                folder1: {
                    subtitle: 'สตรีมเมื่อคืนสนุกมากเลย อยากติดตามอีกคนขึ้นมาด้วยเลย หวังว่าจะเล่นด้วยกันอีกนะ',
                    title: 'MC',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
                folder2: {
                    subtitle: 'ขอบคุณที่มาเล่นกับเธอนะ สนุกมากเลย',
                    title: 'MC',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
                folder3: {
                    subtitle: 'แอบผิดหวังขึ้นมานิดหน่อย แต่ถ้าสนุกก็พอแล้ว',
                    title: 'MC',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
                
            }
        },
        methods: {
            story(){
                this.textstory = this.textstory + 1
                if(this.textstory == 9 && this.choice == 1){
                    this.$router.push('/chapter5c')
                }
                else if(this.textstory == 9 && this.choice == 2){
                    this.$router.push('/chapter5b')
                }
                else if(this.textstory == 2 ){
                    this.postbutton = true
                }
                else if(this.textstory == 9 && this.choice == 3){
                    this.mcname = this.mc_name
                    this.componum = 1
                }
            },
            selectchoice(num){
                this.textstory = this.textstory + 1
                this.choice = num
            },
            likefuntion(like){
                console.log(like);

                let i = []
                for (i = 0; i < this.folders.length; i++) {
                    if (this.folders[i].title == like.title) {

                    console.log(this.folders[i].like)
                    this.folders[i].like = 1
                    
                    }
                }
            },
            reportfuntion(like){
                console.log(like);

                let i = []
                for (i = 0; i < this.folders.length; i++) {
                    if (this.folders[i].title == like.title) {

                    console.log(this.folders[i].color)
                    this.folders[i].color = 'grey-darken-2'
                    this.folders[i].report = 'grey-darken-2'
                    
                    }
                }
            },
            postfuntion(num){
                this.textstory = this.textstory + 1
                if(num == 1){
                
                let i = []
                let y = []
                let c= []
                let d= []
                let b = this.folders.length - 1
                this.folders.push(this.folders[b])
                for (i = 0; i < this.folders.length; i++) {
                y = i+1
                if (i == 0) {
                    let a = this.folders[i]
                    c = this.folders[y]
                    this.folders[i] = this.folder1
                    this.folders[y] = a
                console.log(this.folders[y])
                
                
                }
                else if(i >= 2 && y < this.folders.length){
                    console.log(this.folders[y])
                    d = this.folders[i]
                    this.folders[i] = c
                    c  = d
                    console.log(this.folders[i])
                    
                }  
                this.textstory = 5
                this.post = 0
            }
            }
            else if(num == 2){
                let i = []
                let y = []
                let c= []
                let d= []
                let b = this.folders.length - 1
                this.folders.push(this.folders[b])
                for (i = 0; i < this.folders.length; i++) {
                y = i+1
                if (i == 0) {
                    let a = this.folders[i]
                    c = this.folders[y]
                    this.folders[i] = this.folder2
                    this.folders[y] = a
                console.log(this.folders[y])
                
                
                }
                else if(i >= 2 && y < this.folders.length){
                    console.log(this.folders[y])
                    d = this.folders[i]
                    this.folders[i] = c
                    c  = d
                    console.log(this.folders[i])
                    
                }  
                this.textstory = 5
                this.post = 0
            }
            }
            else if(num == 3){
                let i = []
                let y = []
                let c= []
                let d= []
                let b = this.folders.length - 1
                this.folders.push(this.folders[b])
                for (i = 0; i < this.folders.length; i++) {
                y = i+1
                if (i == 0) {
                    let a = this.folders[i]
                    c = this.folders[y]
                    this.folders[i] = this.folder3
                    this.folders[y] = a
                console.log(this.folders[y])
                
                
                }
                else if(i >= 2 && y < this.folders.length){
                    console.log(this.folders[y])
                    d = this.folders[i]
                    this.folders[i] = c
                    c  = d
                    console.log(this.folders[i])
                    
                }  
                this.textstory = 5
                this.post = 0
            }
            }
            },
        }
    }


    </script>
    <style>
    
    </style>