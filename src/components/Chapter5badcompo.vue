<template>
    <div>
        <v-img
            cover
            src="@/assets/background/Background4.jpg"
        >
      <v-container>
        <v-responsive v-if="this.textstory <= 18" >
          <v-row class="justify-center">
            <v-col cols="10">
               
                <div v-if="textstory >= 1 && textstory <= 3">
                    <v-img 
                        class="ml-5 mr-5"
                                src="@/assets/other/bgwebboard1.jpg"
                                
                                max-height="500"
                                cover
                            >
 
                    <v-row class="justify-center">
                       
                            <v-col cols="8" v-if="this.post == 0">
                                <v-card  width="680" max-height="447" class="mt-8 mb-n1" color="grey-lighten-5">
                                    <v-card-text>
                                        <v-list-item
                                            v-for="folder in folders"
                                            :key="folder.title"
                                            :title="folder.title"
                                            :subtitle="folder.subtitle"  
                                            :type = "divider"
                                            class="mt-n2"
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
                                <v-card  width="680" min-height="447" class="mt-8 mb-1" color="grey-lighten-5">
                                    <v-card-text>
                                        <v-col cols="12" class="mt-12"></v-col>
                                        <v-col cols="12" class=""></v-col>
                                        <v-row class="justify-center">
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(1)" color="secondary" block rounded="xl" size="x-large">
                                            หวังว่าเธอจะได้รับกำลังใจจากจดหมายของทุกคนนะ！
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(2)" color="secondary" block rounded="xl" size="x-large">
                                            อุตส่าห์ตั้งใจเขียนให้ขนาดนั้น <br/> ถ้ารีแอคไม่ดีจะโกรธจริง ๆ ด้วย
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(3)" color="secondary" block rounded="xl" size="x-large">
                                            ยังไงเธอก็ต้องชอบจดหมายเราอยู่แล้ว<br/> แต่ถ้าไม่ชอบก็น่าจะรู้นะว่าจะโดนอะไร
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
                                    v-if="textstory >= 3"
                                    @click = "story()"
                                >
                                    <v-badge  size="x-large" color="red">
                                        <v-icon size="x-large">mdi-bell</v-icon>
                                    </v-badge>
                                </v-btn>
                                <v-btn
                                    color="white"
                                    icon="mdi-bell"
                                    variant="text"
                                    size="x-large"
                                    v-if="textstory < 3"
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
                    max-height="500"
                        class="ml-5 mr-5"   
                        cover
                        src="@/assets/other/Untitled-1.png"
                    >

                    </v-img>
                    </div>

                
            
                <div v-if="textstory >= 4 && textstory <= 10 || textstory >= 12 && textstory<=18">
                    <v-img
                        class="ml-5 mr-5"   
                        cover
                        src="@/assets/background/BG01_Streamerroom1.jpg"
                    >
                    <v-col cols="12" class="mt-7"></v-col>

                        <v-img
                            v-if="this.textstory == 4"
                            height="470"
                            src="@/assets/kwaii/KS09.gif"
                        >
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-row class="justify-center">
                                <v-col cols="11">
                                    <v-img
                                        src="@/assets/other/Textbox_A.png"
                                    >
                                        <v-row>
                                            <v-col cols="12" class="ml-5">
                                                <div>
                                                    <h3 class="text-white mt-1 mb-n3">
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 4">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        Hi Hiii～Kawaii Streamerเองค่า วันนี้ก็เจอกันอีกแล้วน้า <br/><br/>
                                                    </p>
                                                </div>
                                        
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
                                            class="mt-n10 mr-5"
                                            variant="text"
                                            icon="mdi-chevron-right"
                                            color="primary"
                                            @click = "story()"
                                        >
                                        </v-btn>
                                        </v-row>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-img>
            
                
                        <v-img
                        v-if="this.textstory == 5 || this.textstory == 8"
                            height="470"
                            src="@/assets/kwaii/KS01.gif"
                        >
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                    
                            <v-row class="justify-center">
                                <v-col cols="11">
                                    <v-img
                                        src="@/assets/other/Textbox_A.png"
                                    >
                                        <v-row>
                                            <v-col cols="12" class="ml-5">
                                                <div>
                                                    <h3 class="text-white mt-1 mb-n3">
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                
                                                <div v-if="textstory == 5">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ฮิฮิ เอาเถอะ ตอนนี้ของขวัญกับจดหมายก็พร้อมที่จะถูกเปิดแล้วล่ะ <br/><br/>
                                                    </p>
                                                </div> 
                                                <div v-if="textstory == 8">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        โอ๊ะ เหมือนจะเป็นน้ำหอมล่ะ สุดยอดเลย กลิ่นถูกใจมากเลยค่ะ ข้อความในการ์ดมีแค่...<br/><br/>
                                                    </p>
                                                </div> 
                                            
                                     
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
                                            class="mt-n10 mr-5"
                                            variant="text"
                                            icon="mdi-chevron-right"
                                            color="primary"
                                            @click = "story()"
                                        >
                                        </v-btn>
                                        </v-row>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-img>
                        <v-img
                            v-if="this.textstory == 6"
                            height="470"
                            src="@/assets/kwaii/KS02.gif"
                        >
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                           
                            <v-row class="justify-center">
                                <v-col cols="11">
                                    <v-img
                                        src="@/assets/other/Textbox_A.png"
                                    >
                                        <v-row>
                                            <v-col cols="12" class="ml-5">
                                                <div>
                                                    <h3 class="text-white mt-1 mb-n3">
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 6">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ถ้างั้นมาเริ่มกันเลย！เป็นของคุณต้นหอมย่าง ดูเหมือนว่าจะเป็นของขวัญพร้อมการ์ดอวยพรล่ะ คุณต้นหอมย่างอยู่หรือเปล่า จะเปิดละนะ?
                                                    </p>
                                                </div>  
                              
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
                                            class="mt-n10 mr-5"
                                            variant="text"
                                            icon="mdi-chevron-right"
                                            color="primary"
                                            @click = "story()"
                                        >
                                        </v-btn>
                                        </v-row>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-img>
                        <v-img
                        v-if="this.textstory == 7 || this.textstory == 10"
                            height="470"
                            src="@/assets/kwaii/KS00.gif"
                        >
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                           
                            <v-row class="justify-center">
                                <v-col cols="11">
                                    <v-img
                                        src="@/assets/other/Textbox_A.png"
                                    >
                                        <v-row>
                                            <v-col cols="12" class="ml-5">
                                                <div>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 10 ">
                                                        Kawaii Streamer
                                                    </h3>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 7">
                                                        (คำบรรยาย)
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 7">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        [สตรีมเมอร์สาวถือกล่องของขวัญสีชมพูและค่อยๆเปิดมัน] <br/><br/>
                                                    </p>
                                                </div> 
                                                <div v-if="textstory == 10">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        จดหมายอีกฉบับจากผู้ไม่ประสงค์ออกนาม..<br/><br/>
                                                    </p>
                                                </div> 
                                                
                                                
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
                                            class="mt-n10 mr-5"
                                            variant="text"
                                            icon="mdi-chevron-right"
                                            color="primary"
                                            @click = "story()"
                                        >
                                        </v-btn>
                                    </v-row>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-img>
                        <v-img
                        v-if="this.textstory == 9 || this.textstory == 13 || this.textstory == 14 || this.textstory == 15 || this.textstory == 16"
                            height="470"
                            src="@/assets/kwaii/KS08.gif"
                        >
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                       
                            <v-row class="justify-center">
                                <v-col cols="11">
                                    <v-img
                                    v-if="this.textstory == 9 || this.textstory == 13"
                                        src="@/assets/other/Textbox_A.png"
                                    >
                                        <v-row>
                                            <v-col cols="12" class="ml-5">
                                                <div>
                                                    <h3 class="text-white mt-1 mb-n3" >
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 9">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ข้อความในการ์ดมีแค่... อื้ม ยังไงก็ขอบคุณมากนะ <br/><br/>
                                                    </p>
                                                </div> 
                                                <div v-if="textstory == 13">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ต่อไปสุดท้ายแล้ว เป็นของคุณMCล่ะ หวังว่าจะเป็นจดหมายน่ารักๆนะ<br/><br/>
                                                    </p>
                                                </div>
                                                
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end" v-if="this.textstory == 9 || this.textstory == 13">
                                        <v-col cols="12"></v-col>
                                        <v-btn
                                            class="mt-n10 mr-5"
                                            variant="text"
                                            icon="mdi-chevron-right"
                                            color="primary"
                                            @click = "story()"
                                        >
                                        </v-btn>
                                    </v-row>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-img>
                      
                        <v-img
                        v-if="this.textstory == 17 || this.textstory == 12"
                            height="470"
                            src="@/assets/kwaii/KS06.gif"
                        >
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                           
                            <v-row class="justify-center">
                                <v-col cols="11">
                                    <v-img
                                        src="@/assets/other/Textbox_A.png"
                                    >
                                        <v-row>
                                            <v-col cols="12" class="ml-5">
                                                <div>
                                                    <h3 class="text-white mt-1 mb-n3">
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 17 || this.textstory == 12">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        … <br/><br/>
                                                    </p>
                                                </div> 
                                                
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
                                            class="mt-n10 mr-5"
                                            variant="text"
                                            icon="mdi-chevron-right"
                                            color="primary"
                                            @click = "story()"
                                        >
                                        </v-btn>
                                    </v-row>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-img>
                        
                       
                    </v-img> 
                </div>
                     

                <div v-if="textstory == 11">
                    <v-img
                        v-if="this.textstory == 11"
                        max-height="500"
                                cover
                                class="ml-5 mr-5"
                            src="@/assets/cutsence/CG05.jpg"
                        >
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-5"></v-col>
                            <v-row class="justify-center">
                                <v-col cols="11">
                                    <v-img
                                        src="@/assets/other/Textbox_A.png"
                                    >
                                        <v-row>
                                            <v-col cols="12" class="ml-5">
                                                <div>
                                                    <h3 class="text-white mt-1 mb-n3">
                                                        (คำบรรยาย)
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 11">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        [พอเธออ่านจดหมายนั้นก็เงียบไปสักพัก และทำหน้าตาเหมือนกับว่ากำลังเจอเรื่องน่ากลัว] <br/><br/>
                                                    </p>
                                                </div> 
                                                
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
                                            class="mt-n10 mr-5"
                                            variant="text"
                                            icon="mdi-chevron-right"
                                            color="primary"
                                            @click = "story()"
                                        >
                                        </v-btn>
                                    </v-row>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-img>
                </div>
            </v-col>
          </v-row>
          <v-row class="justify-center">
                <v-col cols="6" class="mt-2">
                    <v-img
                            height="200"
                            src="@/assets/other/Textbox01.png"
                    >
                    <v-row>
                        <v-col cols="12" class="ml-5">
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
                                    สัปดาห์นึงผ่านไปไวกว่าที่คิด ในที่สุดวันนี้ก็จะได้ดูไลฟ์ของสตรีมเมอร์สาวคนนั้นแล้วหลังจากเหนื่อยมาตลอด ก่อนหน้านั้นเช็คเว็บบอร์ดหน่อยดีกว่า

                                </p>
                            </div>    
                            <div v-if="textstory == 1">
                                <p class="text-secondary idfont font-weight-bold">
                                    [เช็คเว็บบอร์ด รีแอค]
                                </p>
                            </div>    
                            <div v-if="textstory == 2 || textstory == 3">
                                <p class="text-secondary idfont font-weight-bold">
                                    [เช็คเว็บบอร์ด โพสต์]
                                </p>
                            </div>                   
                            <div v-if="textstory == 18">
                                <p class="text-secondary idfont font-weight-bold">
                                    [สตรีมเมอร์สาวไม่ได้พูดอะไรต่อ หน้าจอสตรีมมิ่งกลายเป็นสีดำปล่อยให้แชทงุนงงกับสิ่งที่เกิดขึ้น ผ่านไปไม่นาน ไลฟ์สตรีมก็ถูกปิดลง]
                                </p>
                            </div>
                            <div v-if="textstory == 14">
                                <p class="text-secondary idfont font-weight-bold">
                                    ‘ถึงคาสุจัง สวัสดีครับคาสุจัง ผมเป็นผู้ติดตามหน้าใหม่ที่เพิ่งมาติดตามได้ไม่นานแต่ผมรู้สึกชอบคาสุจังมากๆเลย ขอบคุณที่คอยมาสร้างสีสันให้ชีวิตในแต่ละวันของผมนะครับ
                                </p>
                            </div>
                            <div v-if="textstory == 15">
                                <p class="text-secondary idfont font-weight-bold">
                                    ผมชอบคาสุจังมากๆเลย ทั้งๆที่ชอบเธอแค่คนเดียวแท้ๆ แต่เธอก็ยังสนใจคนอื่นนอกจากตัวผมอยู่ดี…
                                </p>
                            </div>
                            <div v-if="textstory == 16">
                                <p class="text-secondary idfont font-weight-bold">
                                    ช่วยบอกทีสิ ว่าผมต้องทำยังไงคาสุจังถึงจะเลิกมองคนอื่นแล้วมาสนใจแค่ผม ผมไม่ชอบเลย ผมรักคาสุจังมากๆเลยนะ สนใจแค่ผมได้ไหม คนอื่นจะเป็นยังไงก็ไม่ต้องสนใจหรอก จะให้จ่ายเท่าไหร่ผมก็ยอม เพราะงั้นช่วยมองแค่ผมได้ไหม’ 
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
                            v-if="this.postbutton == false"
                        >
                        </v-btn>
                    </v-row>
                    
                    </v-img>
                        
                    </v-col>
                <v-col cols="3" class="mt-2">
                    <v-img
                    height="200"
                    src="@/assets/other/Spritebox_Small.png"
                    >
                        <div v-if="textstory == 0 || textstory == 1 || textstory == 7 || textstory == 8 || textstory == 9 || textstory == 10 || textstory == 13">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC00.png"
                            />
                        </div>
                        <div v-if="textstory == 5 || textstory == 6 || textstory == 13">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC01.png"
                            />
                        </div>
                        <div v-if="textstory == 3 || textstory == 2">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC05.png"
                            />
                        </div>
                        <div v-if="textstory == 11 || textstory == 12 || textstory == 17 || textstory == 18">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC08.png"
                            />
                        </div>
                        <div v-if="textstory == 4 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC02.png"
                            />
                        </div>
                        <div v-if="textstory == 14 || textstory == 15 || textstory == 16">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC03.png"
                            />
                        </div>
                       
                    </v-img>
                </v-col>
              </v-row>
          
    
          
        </v-responsive>
        <v-responsive  v-if="this.textstory >= 19">
            <v-row class="justify-center">
                <v-col cols="10">
                    <v-row class="justify-center mt-3">
                        <v-img
                        max-height="500"
                        class="ml-5 mr-5" 
                        src="@/assets/cutsence/CG06.jpg"
                        />
                    </v-row>
                </v-col>
                <v-col cols="6" class="mt-5">
                    <v-row class="justify-center">
                        <p>
                        [หลังจากปิดไลฟ์ สตรีมเมอร์สาวโดนสตอล์กเกอร์ตามถึงบ้าน 
                        </p>
                    </v-row>
                    <v-row class="justify-center">
                        <p>
                            และเกิดเรื่องที่ทำให้สตรีมเมอร์สาวได้หายไปจากช่องของเธอเป็นเวลานาน]
                        </p>
                    </v-row>
                    
                    <v-row class="justify-center">
                        <p>
                            [หลังจากนั้นหลายเดือนก็ยังหาตัวเธอไม่พบ..]
                        </p>
                    </v-row>
                    <v-row class="justify-center">
                        <h2>
                            END
                        </h2>
                    </v-row>
                    
                    
            
                </v-col>
            </v-row>
        </v-responsive>
      </v-container>
    </v-img>
    </div>
    </template>
    
    <script>
    export default {
        name : "Chapter5badcompo",

        data() {
            return {
                textstory : 0,
                post : 0,
                postbutton: false,
                folders: [
                {
                    subtitle: 'วันนี้สตรีมเปิดของขวัญกับอ่านจดหมายปะ ถ้าถึงของเราต้องเขินมากแน่ ๆ เลย ฮือ',
                    title: 'ต้นหอมย่าง',
                    color: 'pink-accent-1',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'เขียนจดหมายให้เสร็จแล้วแต่ลืมส่ง อ้ากกกก เสียดายอะ T T',
                    title: 'tsisonfire',
                    color: 'deep-purple-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'ส่งของขวัญให้ไปแล้ววว เธอจะชอบไหม จะชอบหรือเปล่า ต้องชอบแน่ ๆ อยากเห็นรีแอคละอะ',
                    title: 'tongkatsulover',
                    color: 'indigo-darken-1',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'วันนี้ลางานเพื่อมาดูเธอโดยเฉพาะเลยนะ～',
                    title: 'puropuchi',
                    color: 'blue-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'แบบนั้นไม่ระวังมากเกินไปแล้ว ที่อยู่เด่นหราขนาดนั้นแปลว่าเธอกำลังเชิญชวนให้ไปหาอยู่ไม่ใช่หรือไงกัน www',
                    title: 'babyblue',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
    
      ],
                folder1: {
                    subtitle: 'หวังว่าเธอจะได้รับกำลังใจจากจดหมายของทุกคนนะ！',
                    title: 'MC',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
                folder2: {
                    subtitle: 'อุตส่าห์ตั้งใจเขียนให้ขนาดนั้น ถ้ารีแอคไม่ดีจะโกรธจริง ๆ ด้วย',
                    title: 'MC',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
                folder3: {
                    subtitle: 'ยังไงเธอก็ต้องชอบจดหมายเราอยู่แล้ว แต่ถ้าไม่ชอบก็น่าจะรู้นะว่าจะโดนอะไร',
                    title: 'MC',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
            }
        },
        methods: {
            story(){
                console.log(this.textstory);
                this.textstory = this.textstory + 1
                if(this.textstory == 2 ){
                    this.postbutton = true
                }
                else if(this.textstory == 14 ){
                    this.postbutton = false
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
                this.textstory = 3
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
                this.textstory = 3
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
                this.textstory = 3
                this.post = 0
            }
            }
            },
        }
    }


    </script>
    <style>
    
    </style>