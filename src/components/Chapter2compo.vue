<template>
     <div class="text-center">
            <v-dialog
            v-model="dialog"
            width="auto"
            >
            <v-card>
                <v-card-text>
                    รีพอร์ต หรือ กดถูกใจเห็นด้วย จะอัปเดทวันละ 5 โพส
                </v-card-text>
                <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">ปิด</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </div>
    <div>
        <v-img
        v-if="componum == 0"
            cover
            src="@/assets/background/Background4.jpg"
        >
       
      <v-container>
        <v-responsive >
          <v-row class="justify-center">
            <v-col cols="10">
                <div v-if="textstory >= 1 && textstory <= 5">
 
            
                        <v-img 
                        class="ml-5 mr-5"
                                src="@/assets/other/bgwebboard1.jpg"
                                
                                max-height="500"
                                cover
                            >
                            <v-row class="justify-center">
                                <v-col cols="8" v-if="this.post == 0">
                                    <v-card width="680" max-height="447" class="mt-8 mb-n1"
                                    color="grey-lighten-5">
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
                                                    
                                                    v-if="folder.like == 1"
                                                    :color="folder.report"
                                                    icon="mdi-heart"
                                                    variant="text"
                                                    size="small"
                                                ></v-btn>
                                                <v-btn
                                                    @click = "likefuntion(folder)"
                                                    v-if="folder.like == 0"
                                                    :color="folder.report"
                                                    icon="mdi-heart-outline"
                                                    variant="text"
                                                    size="small"
                                                   
                                                ></v-btn>
                                                <v-btn
                                                    :color="folder.report"
                                                    icon="mdi-message-outline"
                                                    variant="text"
                                                    size="small"
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
                                        <v-btn variant="outlined"  @click = "postfuntion(1)" color="secondary" block rounded="xl" size="x-large">
                                            ขอบคุณสำหรับสตรีมนะ สนุกมากเลย！
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(2)" color="secondary" block rounded="xl" size="x-large">
                                            เธอดูโปรจัง แถมยังสวยด้วย 
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(3)" color="secondary" block rounded="xl" size="x-large">
                                            ดูแล้วเพลินตาดีจัง คงต้องตามต่อซะแล้ว
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                        
                                    </v-card-text>
                                </v-card>
                                
                            </v-col>
                         <v-col cols="1" class="ml-12 mr-n12">
                           
                            
                            <v-row class="justify-end mr-n8" >
                                
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                

                                <v-btn
                                    class="ml-8"
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
                <div v-if="textstory == 0">
                    <v-img
                    class="ml-5 mr-5"
                    max-height="500"
                    cover

                        src="@/assets/other/Untitled-1.png"
                    >
                   
                    </v-img>
                </div>
               
                <div v-if="textstory == 21">
                    <v-img
                    class="ml-5 mr-5"
                    max-height="500"
                    cover
                        src="@/assets/cutsence/CG02.jpg"
                    >
                   
                    </v-img>
                </div>
            </v-col>
          </v-row>
          <v-row class="justify-center">
                <v-col cols="6" class="">
                    <v-img
                   
                    cover
                            src="@/assets/other/Textbox01.png"
                    >
                    <v-row>
                        <v-col cols="12" class="ml-5 mt-1">
                            <div>
                                <h2 class="text-white" v-if="textstory == 0 || textstory == 1 || textstory == 5 ">
                                    {{ mc_name }}
                                </h2>
                                <h2 class="text-white" v-if="textstory == 2 || textstory == 3 || textstory == 4">
                                        (คำบรรยาย)
                                </h2>
                            </div>  
                        </v-col>
                    </v-row>
                    <v-row class="justify-center">
                        <v-col cols="11">
                            <div v-if="textstory == 0">
                                <p class="text-secondary idfont font-weight-bold">
                                    13.04 โชคดีที่วันนี้เป็นวันเสาร์ ไม่ต้องไปโรงเรียนหรือออกไปเจอเรื่องวุ่นวาย...
                                </p>
                            </div>    
                            <div v-if="textstory == 1">
                                <p class="text-secondary idfont font-weight-bold">
                                    [MCเช็คเว็บบอร์ดแฟนคลับของสตรีมเมอร์ที่สร้างไว้ให้แฟนๆมาพูดคุยกัน] <br/> <br/>
                                </p>
                            </div>    
                            <div v-if="textstory == 2 || textstory == 3">
                                <p class="text-secondary idfont font-weight-bold">
                                    [เจอความคิดเห็นแปลกๆของแฟนคลับที่มีต่อสตรีมเมอร์สาว]<br/> <br/>

                                </p>
                            </div>
                        
                            <div v-if="textstory == 4">
                                <p class="text-secondary idfont font-weight-bold">
                                    [ สามารถกดโพสต์อะไรบางอย่างลงเว็บบอร์ดได้ 3 ตัวเลือก ] <br/> <br/>
                                </p>
                            </div>                        
                            <div v-if="textstory == 5">
                                <p class="text-secondary idfont font-weight-bold">
                                    วันนี้พอแค่นี้ก่อนละกัน... <br/> <br/>
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
                        <div v-if="textstory == 0 || textstory == 1 || textstory == 3 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC00.png"
                            />
                        </div>
                        <div v-if="textstory == 5">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC01.png"
                            />
                        </div>
                        <div v-if="textstory == 2 || textstory == 3">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC08.png"
                            />
                        </div>
                        <div v-if="textstory == 4 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC05.png"
                            />
                        </div>
                    </v-img>
                </v-col>
              </v-row>
          
    
          
        </v-responsive>
      </v-container>
    </v-img>
    <compo :mc_name="mcname" v-if="componum == 1" />
    </div>
    </template>
    
    <script>
    import { useRouter } from 'vue-router';
    import compo from '@/components/Chapter3compo.vue'
    export default {
        name : "Chapter2compo",
        props: { mc_name: String },
        components:{
          compo
        },
        
        data() {
            return {
                textstory : 0,
                post : 0,
                router : useRouter(),
                dialog: false,
                postbutton: false,
                componum: 0,
                mcname : "",
                folders: [
                {
                    subtitle: 'วันนี้ก็ยังน่ารักเหมือนเดิมจนอยากจะนอนมองทั้งวันเลย＞＜',
                    title: 'ต้นหอมย่าง',
                    color: 'pink-accent-1',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'อยากเห็นเธอใส่ชุดน่ารักๆอีกจังเลยนะ',
                    title: 'tsisonfire',
                    color: 'deep-purple-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'แต่ผมอยากเห็นเธอใส่ชุดเซ็กซี่มากกว่านี้อีก',
                    title: 'tongkatsulover',
                    color: 'indigo-darken-1',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'จะว่าไปหน้าตาเธอคุ้นๆเหมือนเคยเห็นจากไหนมาก่อน หรือเพราะแต่งหน้ามากเกินเลยดูคุ้นเหมือนกันหมดก็ได้?',
                    title: 'puropuchi',
                    color: 'blue-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'ทำไมทุกคนถึงชอบเธอขนาดนั้นล่ะ เธอเป็นของผมแค่คนเดียวนะ^^',
                    title: 'babyblue',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
    
      ],
                folder1: {
                    subtitle: 'ขอบคุณสำหรับสตรีมนะ สนุกมากเลย！',
                    title: this.mc_name,
                    color: 'cyan-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                folder2: {
                    subtitle: 'เธอดูโปรจัง แถมยังสวยด้วย ',
                    title: this.mc_name,
                    color: 'cyan-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                folder3: {
                    subtitle: 'ดูแล้วเพลินตาดีจัง คงต้องตามต่อซะแล้ว',
                    title: this.mc_name,
                    color: 'cyan-lighten-2',
                    like: 0,
                    report : 'primary'
                },
            }
    
        },
        methods: {
            story(){
                this.textstory = this.textstory + 1
                if(this.textstory == 6){
                    this.mcname = this.mc_name
                    this.componum = 1
                }
                if(this.textstory == 3){
                    this.dialog = true
                }
                if(this.textstory == 4){
                    this.postbutton = true
                }
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
     .idfont {
    font-size: 17px;
} 
.longtextfont {
    font-size: 16px;
} 
    </style>