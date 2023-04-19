<template>
    <div>
        <Transition name="fade">
        <v-img
        v-if="componum == 0 && typepage == 0" 
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
       
      </v-container>
    </v-img>
    </Transition>

    <Transition name="fade">
        <v-img
        v-if="componum == 0 && typepage == 1" 
            cover
            src="@/assets/background/Background4.jpg"
        >
      <v-container>
        <v-responsive v-if="this.textstory <= 19" >
          <v-row class="justify-center">
            <v-col cols="10">
               

                
            
                <div v-if="textstory >= 4 && textstory <= 10 || textstory >= 12 && textstory<=19">
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
                        v-if="this.textstory == 7 || this.textstory == 10 || this.textstory == 19"
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
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 10 || textstory == 19">
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
                                                <div v-if="textstory == 19">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        วันนี้คงต้องพอแค่นี้ก่อน แต่สัญญาว่าจะอ่านจดหมายทุกฉบับเลย ขอบคุณมากนะทุกคน บ๊ายบาย!<br/><br/>
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
                        v-if="this.textstory == 9 || this.textstory == 13 || this.textstory == 14 || this.textstory == 15 || this.textstory == 16 || this.textstory == 18"
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
                                                
                                                <div v-if="textstory == 14">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ‘ถึงคาสุจัง ผมเพิ่งเริ่มติดตามเธอได้ไม่นาน ผมได้แต่สงสัยว่ามันเป็นเพราะพระเจ้าต้องการให้เรามาพบกันหรือเปล่า แต่นั่นก็ไม่สำคัญเท่าตอนนี้เราได้รู้จักกันหรอกครับ
                                                    </p>
                                                </div>
                                                <div v-if="textstory == 15">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        เพราะมีคาสุจังที่ทั้งสดใสและน่ารักแบบนี้ทำให้ผมยังสามารถมีชีวิตอยู่ในทุกวันนี้ <br/><br/>
                                                    </p>
                                                </div>
                                                <div v-if="textstory == 16">
                                                    <p class="text-secondary longtextfont font-weight-bold">
                                                        ผมชอบเธอมากๆเลยนะ คิดถึงเธอทุกเวลาที่เธอไม่มาสตรีมจนแทบจะเสียสติ เธอล่ะชอบผมบ้างไหม คิดถึงผมบ้างหรือเปล่า ผมอยากเจอเธอมากๆเลยนะ ผมไม่รู้จะจัดการความรู้สึกนี้ยังไงดี คาสุจังช่วยผมได้หรือเปล่า ?’ 
                                                    </p>
                                                </div>
                                                <div v-if="textstory == 18">
                                                    <p class="text-secondary longtextfont font-weight-bold">
                                                        แบบนี้น่ะน่ากลัวนะ.. อะฮะๆ… <br/><br/>
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
                                                <div v-if=" this.textstory == 12">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        … <br/><br/>
                                                    </p>
                                                </div> 
                                                <div v-if="textstory == 17 ">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        …เอ๊ะ? <br/><br/>
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
                    
                    <v-col cols="6" class="">
                        <v-img
                                height="200"
                                src="@/assets/other/Commentbox_2.png"
                        >
                        <v-row>
                            <v-col cols="12" class="ml-5 mt-1">
                                <div>
                                    <h2 class="text-white">
                                        Chat Comment
                                    </h2>
                                </div>  
                            </v-col>
                        </v-row>
                        <v-row class="justify-center mt-n3">
                            <v-col cols="11">
    
                                <div v-if="this.chatstory >= 1 && this.chatnum > 0 && this.chatnum < 5 ">
                                    <p>
                                        ต้นหอมย่าง  :   HIIII HIIIIIIIIIII
                                    </p>
                                </div>   
                                <div v-if="this.chatstory == 1 && this.chatnum > 0 && this.chatnum < 2">
                                    <p>
                                        <br/>
                                    </p>
                                </div> 
                                <div v-if="this.chatstory == 1 && this.chatnum > 0 && this.chatnum < 2">
                                    <p>
                                        <br/>
                                    </p>
                                </div> 
                                <div v-if="this.chatstory == 1 && this.chatnum > 0 && this.chatnum < 2">
                                    <p>
                                        <br/>
                                    </p>
                                </div>   
                                <div v-if="this.chatstory >= 1 && this.chatnum > 1  && this.chatnum < 6 ">
                                    <p>
                                        tsisonfire  :   HIIII HIIIIIIIIIIIIIIIII
                                    </p>
                                </div>   
                                <div v-if="this.chatstory == 1 && this.chatnum > 0 && this.chatnum < 3">
                                    <p>
                                        <br/>
                                    </p>
                                </div> 
                                <div v-if="this.chatstory == 1 && this.chatnum > 0 && this.chatnum < 3">
                                    <p>
                                        <br/>
                                    </p>
                                </div> 
                                  
                                <div v-if="this.chatstory >= 1 && this.chatnum> 2&& this.chatnum < 7">
                                    <p>
                                        konkon888  :   มาแล้ววววววว
    
                                    </p>
                                </div>
                                 
                                <div v-if="this.chatstory == 1 && this.chatnum > 0 && this.chatnum < 3">
                                    <p>
                                        <br/>
                                    </p>
                                </div> 
                                
                                <div v-if="this.chatstory >= 1 && this.chatnum > 3  && this.chatnum < 8 ">
                                    <p>
                                        puropuchi  :   HELLOOOO
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 1 && this.chatnum > 4  && this.chatnum < 9 ">
                                    <p>
                                        @user-gk12  :   หายไปนานจนคิดว่าจะเลิกทำละ
                                    </p>
                                </div>  
                                <div v-if="this.chatstory >= 1 && this.chatnum > 5 && this.chatnum < 10 ">
                                    <p>
                                        JellyBear  :   คาสุจังหายไปไหนมาา
                                    </p>
                                </div>                        
                                <div v-if="this.chatstory >= 2 && this.chatnum > 6  && this.chatnum < 11">
                                    <p>
                                        anony  :   จะเริ่มเปิดจดหมายยัง
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 2 && this.chatnum > 7 && this.chatnum < 12">
                                    <p>
                                        babyblue  :   จดหมายผมเองๆๆๆ
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 2 && this.chatnum > 8 && this.chatnum < 13">
                                    <p>
                                        kusogaki1234  :   น้ำหอมกลิ่นนี้ราคาแพงพอตัวเลยนี่นา
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 3 && this.chatnum> 9 && this.chatnum < 14">
                                    <p>
                                        หมึกผัดไข่เค็ม  :   อ่านของผมบ้างสิ
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 3 && this.chatnum > 10 && this.chatnum< 15">
                                    <p>
                                        kusogaki1234  :   เผยที่อยู่แบบนี้จะไม่อันตรายหรอ?
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 3 && this.chatnum> 11 && this.chatnum < 16">
                                    <p>
                                        pewpew777  :   อยากส่งบ้างจัง
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 3 && this.chatnum > 12 && this.chatnum < 17">
                                    <p>
                                        อยากส่งบ้างจัง  :   ทำไมทำหน้าตาแบบนั้นล่ะ ?
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 4 && this.chatnum > 13 && this.chatnum < 18">
                                    <p>
                                        unchidaaaaaa  :   คาสุจัุงโอเคไหม ???
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 4 && this.chatnum > 14 && this.chatnum < 19">
                                    <p>
                                        unchidaaaaaa  :   จดหมายไม่ดีหรอ😧😧
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 4 && this.chatnum > 15 && this.chatnum < 20">
                                    <p>
                                        มะง่วง  :   เกิดอะไรขึ้นอะ
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 5 && this.chatnum > 16 && this.chatnum < 21">
                                    <p>
                                        anony  :   คาสุจัง 😰😰
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 5 && this.chatnum > 17 && this.chatnum < 22">
                                    <p>
                                        kusogaki1234  :   ทุกคนใจเย็นๆก่อน
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 6 && this.chatnum > 18 && this.chatnum < 23">
                                    <p>
                                        ต้นหอมย่าง  :   โอเคไหมคาสุจัง 😟
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 6 && this.chatnum > 19 && this.chatnum < 24">
                                    <p>
                                        tongkatsulover  :   ถ้าเป็นจดหมายไม่ดีไม่ต้องสนใจนะคาสุจัง TT
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 6 && this.chatnum > 20 && this.chatnum < 25">
                                    <p>
                                        tongkatsulover  :   ไปอันต่อไปเลยๆๆ
                                    </p>
                                </div>
                                <div v-if="this.chatstory >= 6 && this.chatnum > 21 && this.chatnum < 26">
                                    <p>
                                        น้้ำปลาหวานมะนาวเค็ม  :   อ่านแชทบ้างสิ
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 6 && this.chatnum > 22 && this.chatnum < 27">
                                    <p>
                                        ringo__  :   จดหมายอันต่อไปมาแล้ววว
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 6 && this.chatnum > 23 && this.chatnum < 28">
                                    <p>
                                        @user-gk12  :   อ่านแชทบ้างสิ
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 7 && this.chatnum > 24 && this.chatnum < 29">
                                    <p>
                                        puropuchi  :   ของขวัญน่ารักไหมๆๆ
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 7 && this.chatnum > 25 && this.chatnum < 30">
                                    <p>
                                        tsisonfire  :   จดหมายอันนี้เป็นไงบ้างง?
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 7 && this.chatnum > 26 && this.chatnum < 31">
                                    <p>
                                        @user-gk12  :   มาจากคนไม่ประสงค์ออกนาม ??
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 8 && this.chatnum > 27 && this.chatnum < 32">
                                    <p>
                                        ringo__  :   แอบน่าลึกลับนะเนี่ย
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 8 && this.chatnum > 28 && this.chatnum < 33">
                                    <p>
                                        JellyBear  :   ตื่นเต้นอะ555555
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 29 && this.chatnum < 34">
                                    <p>
                                        anony  :   น่ารักกันมากเลยฮิ้วววววว
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 30 && this.chatnum < 35">
                                    <p>
                                        ringo__  :   เป็นไงบ้าง
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 31 && this.chatnum < 36">
                                    <p>
                                        puropuchi  :   เอ๊ะ ไปแล้วหรอ
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 32 && this.chatnum < 37">
                                    <p>
                                        มะง่วง  :   ยังไม่หายคิดถึงเลยยยย
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 33 && this.chatnum < 38">
                                    <p>
                                        น้้ำปลาหวานมะนาวเค็ม  :   ไม่เอาอย่าเพิ่งไปปป
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 34 && this.chatnum < 39">
                                    <p>
                                        puropuchi  :   รีบจบจัง
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 35 && this.chatnum < 40">
                                    <p>
                                        JellyBear  :   แง้ คาสุจังอย่าลืมดูแลตัวเองด้วยนะ
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 36 && this.chatnum < 41">
                                    <p>
                                        มะง่วง  :   บะบายยย
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 37 && this.chatnum < 42">
                                    <p>
                                        @user-gk12  :   mataneeee
                                    </p>
                                </div> 
                                <div v-if="this.chatstory >= 9 && this.chatnum > 38 && this.chatnum < 43">
                                    <p>
                                        tsisonfire  :   ฝันดีน้า
                                    </p>
                                </div> 
                                <!-- <div v-if="this.mc_text == true && this.chatnum > this.mc_chatnum + 1 && this.mc_chatnum + 4 < 35">
                                    <p>
                                        {{ mc_name }}  : 
                                        <v-row class="ml-5 mt-n6 mb-n6">
                                        <v-col 
                                        v-for="n in emotesend"
                                        :key="n.emotenum"
                                        class="d-flex child-flex mt-n2"
                                        cols="2"
                                >
                                
                                                <v-img
                                                v-if="n.emotenum == 1 && n.num <9 "
                                                    width="1"
                                                    src="@/assets/emote/emote01.png"       
                                                  
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 2  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote02.png"       
                                                  
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 3  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote03.png"       
                                                  
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 4  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote04.png"       
                                                   
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 5  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote05.png"       
                                                   
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 6  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote06.png"       
                                                  
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 7  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote07.png"       
                                                   
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 8  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote08.png"       
                                                   
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 9  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote09.png"       
                                                   
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 10  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote10.png"       
                                                   
                                                >
                        
                                                </v-img>
                                                <v-img
                                                v-if="n.emotenum == 11  && n.num <9"
                                                    width="1"
                                                    src="@/assets/emote/emote11.png"       
                                                   
                                                >
                        
                                                </v-img>
                                                
                                </v-col>
                            </v-row> 
                                    </p>
                                </div>  -->
                            </v-col>
                        </v-row>
                        <v-row class="justify-end" align-self="end">
                          
                       
                           
    
                          <v-btn
                              class="ml-12 mt-n3"
                              variant="text"
                              icon="mdi-near-me"
                              color="secondary"
                              
                              size="x-large"
                              @click = "send()"
                          >
                          </v-btn>
                          <v-menu
                              v-model="menu"
                              :close-on-content-click="false"
                              location="top"
                          >
                              <template v-slot:activator="{ props }">
                                  <v-btn
                                  class="ml-n5 mr-5 mt-n3"
                              variant="text"
                              icon="mdi-emoticon-happy-outline"
                              color="secondary"
                              size="x-large"
                                  v-bind="props"
                                  
                                  >
                                  
                                  </v-btn>
                              </template>
    
                          <v-card min-width="300" class="ml-3 mr-3 mt-3">
                      
                                  <v-row class="mt-1 ml-1 mr-1">
                                      <v-col    
                                      class="d-flex child-flex bg-startbuttonv"
                                      cols="3"
                                      >
                                       
                                              <v-img
                                                  width="1"
                                                  src="@/assets/emote/emote01.png"       
                                                 @click = " sendemote(1)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
                                                 
                                                  src="@/assets/emote/emote02.png"       
                                                 @click = " sendemote(2)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
                                                  src="@/assets/emote/emote03.png"       
                                                 @click = " sendemote(3)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
    
                                                  src="@/assets/emote/emote04.png"       
                                                 @click = " sendemote(4)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
                                                  src="@/assets/emote/emote05.png"       
                                                 @click = " sendemote(5)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
                                                  src="@/assets/emote/emote06.png"       
                                                 @click = " sendemote(6)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
                                                  src="@/assets/emote/emote07.png"       
                                                 @click = " sendemote(7)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
                                                  src="@/assets/emote/emote08.png"       
                                                 @click = " sendemote(8)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
                                                  src="@/assets/emote/emote09.png"       
                                                 @click = " sendemote(9)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
                                                  src="@/assets/emote/emote10.png"       
                                                 @click = " sendemote(10)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                      <v-col    
                                      class="d-flex child-flex bg-startbutton"
                                      cols="3"
                                      >
                                      
                                              <v-img
                                                  width="1"
                                                  src="@/assets/emote/emote11.png"       
                                                 @click = " sendemote(11)"
                                              >
                      
                                              </v-img>
                                      </v-col>
                                  </v-row>
                               
                        
          
    
        </v-card>
              </v-menu>
    
                      </v-row>
                      <v-row class="justify-start mt-n12 ml-2" v-if="this.emotetext == true">
                        
                              <v-col 
                                      v-for="n in emotesend"
                                      :key="n.emotenum"
                                      class="d-flex child-flex mt-n2"
                                      cols="1"
                              >
                              
                                              <v-img
                                              v-if="n.emotenum == 1 && n.num <9 "
                                                  width="1"
                                                  src="@/assets/emote/emote01.png"       
                                                
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 2  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote02.png"       
                                                
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 3  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote03.png"       
                                                
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 4  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote04.png"       
                                                 
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 5  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote05.png"       
                                                 
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 6  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote06.png"       
                                                
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 7  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote07.png"       
                                                 
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 8  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote08.png"       
                                                 
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 9  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote09.png"       
                                                 
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 10  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote10.png"       
                                                 
                                              >
                      
                                              </v-img>
                                              <v-img
                                              v-if="n.emotenum == 11  && n.num <9"
                                                  width="1"
                                                  src="@/assets/emote/emote11.png"       
                                                 
                                              >
                      
                                              </v-img>
                                              
                              </v-col>
                              </v-row>
                        
                        </v-img>
                            
                        </v-col>
                        <v-col cols="3" class="mt-2">
                    <v-img
                    height="200"
                    src="@/assets/other/Spritebox_Small.png"
                    >
                        <div v-if="textstory == 0 || textstory == 1 || textstory == 7 || textstory == 8 || textstory == 9 || textstory == 10 || textstory == 18">
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
                        <div v-if="textstory == 11 || textstory == 12 || textstory == 18 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC08.png"
                            />
                        </div>
                        <div v-if="textstory == 4 || textstory == 14 || textstory == 15">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC02.png"
                            />
                        </div>
                        <div v-if="textstory == 16 || textstory == 19">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC03.png"
                            />
                        </div>
                        <div v-if="textstory == 17">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC06.png"
                            />
                        </div>
                       
                    </v-img>
                </v-col>
                  </v-row>
    </v-responsive>
    </v-container>
          
    </v-img>
    </Transition>

<Transition name="fade">
    <v-img
    v-if="componum == 0 && typepage == 2" 
        cover
        src="@/assets/background/Background4.jpg"
    >
    <v-container>
    <v-responsive  v-if="this.textstory >= 19">
        <v-row class="justify-center">
            <v-col cols="10">
                <v-row class="justify-center mt-3">
                    <v-img
                    max-height="500"
                    class="ml-5 mr-5" 
                    src="@/assets/cutsence/CG07.jpg"
                    />
                </v-row>
            </v-col>
            <v-col cols="6" class="mt-5">
                <v-row class="justify-center">
                    <p class="mt-2 idfont text-primary font-weight-bold">
                        [หลังจากปิดไลฟ์ สตรีมเมอร์สาวได้ประกาศขอพักงานระยะยาวเพื่อจัดการกับ
                    </p>
                </v-row>
                <v-row class="justify-center idfont">
                    <p class="mt-1 idfont text-primary font-weight-bold">
                        สตอล์กเกอร์ แอนตี้ และแฟนคลับที่คลั่งรักมากเกินจนทำให้เธอไม่สบายใจ]
                    </p>
                </v-row>
                
                <v-row class="justify-center">
                    <p class="mt-1 idfont text-primary font-weight-bold">
                        [ไม่รู้ว่าใช้เวลานานแค่ไหนกับเรื่องพวกนี้ แต่ก็จะพยายามรอจนถึงที่สุดอยู่ดี]
                    </p>
                </v-row>
            
                    <h2 class="test text-center mt-5 text-primary font-weight-bold">
                        END
                    </h2>
               
                
                
        
            </v-col>
        </v-row>
    </v-responsive>
  </v-container>
</v-img>
</Transition>

    
    </div>
    </template>
    
    <script>
     import sound1 from '@/assets/song/Labyrinth_In_The_Head.mp3'
    import sound2 from '@/assets/song/Labyrinth.mp3'
    import sound3 from '@/assets/song/make_me_happy.mp3'
    
    export default {
        name : "Chapter5badcompo",
        props: { mc_name: String },
        data() {
            return {
                textstory : 0,
                post : 0,
        
                chatnum: 0,
                chatstory : 0,
                postbutton: false,
                componum: 0,
                mcname : "",
                player1 : new Audio(sound1),
                player2 : new Audio(sound2),
                player3 : new Audio(sound3),
                typepage : 0,
                chatstory : 0,
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
                else if(this.textstory == 4 ){
               
                    this.player1.pause()
                    this.player3.pause()
                    this.soundtype = 1
                    this.playsound()
                    this.typepage = 1
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
               
                }
                else if(this.textstory == 20 ){
        
                    this.player2.pause()
                    this.player1.pause()
                    this.soundtype = 2
                    this.playsound()
                    this.typepage = 2
               
                }else if(this.textstory == 5){
                    //2
                    this.chatnum = 6
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 6){
                    //3
                    this.chatnum = 9
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 8){
                    console.log("text")
                    console.log(this.textstory)
                    //4
                    this.chatnum = 13
                    this.chatstory = this.chatstory + 1
                    console.log(this.chatstory)
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 9){
                    //5
                    this.chatnum = 15
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 10){
                    //6
                    this.chatnum = 18
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 12){
                    //7
                    this.chatnum = 23
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 18){
                    //8
                    this.chatnum = 26
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                
            },
            chattext() {
                console.log("1");
                if(this.chatstory == 1 && this.chatnum <= 5){
                    
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 1000);
                }
                else if(this.chatstory == 2 && this.chatnum <= 8+this.mc_num){
                    
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.chatstory == 3 && this.chatnum <= 12+this.mc_num){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
                else if(this.chatstory == 4 && this.chatnum <= 15+this.mc_num){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
                else if(this.chatstory == 5 && this.chatnum <= 18+this.mc_num){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.chatstory == 6 && this.chatnum <= 23+this.mc_num){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.chatstory == 7 && this.chatnum <= 26+this.mc_num){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
                else if(this.chatstory == 8 && this.chatnum <= 28+this.mc_num){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
                else if(this.chatstory == 9 && this.chatnum <= 30+this.mc_num){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000+this.mc_num);
                }
            },
            sendtext() {
            
                if(this.chatstory >= 1){
                    setTimeout(() => this.chattext(), 500);
                }
            },
            send() {
                this.mc_num = 3
                this.chatnum = this.chatnum + 3
                this.emotetext = false
                this.mc_text = true
                this.mc_chatnum = this.chatnum
            },
            sendemote(num) {
                console.log("test")
                let a = {emotenum : num,
                        num : this.emotearraynum}
                if(this.emotearraynum <= 4){
                    console.log(this.emotearraynum)
                    
                this.emotesend.push(a)
                console.log(this.emotesend)
                this.emotearraynum = this.emotearraynum + 1
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
            loopsound()
            {

                if(this.soundtype == 0){
                
                    this.player1.pause()
                    this.player3.pause()
                    setTimeout(() => this.playsound(), 150000);
                }
                else if(this.soundtype == 1){
                   
                    this.player1.pause()
                    this.player3.pause()
                    setTimeout(() => this.playsound(), 150000);
                }
                else if(this.soundtype == 2){
                    this.player2.pause()
                    this.player1.pause()
                
                    setTimeout(() => this.playsound(), 150000);
                }
                
            },
            playsound(){
                if(this.soundtype == 0){
                    this.player1.play()
                    this.loopsound()
                }
                else if(this.soundtype == 1){
                    this.player2.play()
                    this.loopsound()
                }
                else if(this.soundtype == 2){
                    this.player3.play()
                    this.loopsound()
                }
            }
        },
        created(){
            this.player1.play()
            this.playsound()
            // this.player2.pause()
        }
    }


    </script>
    <style>
     .fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}

.fade-enter-active{
  transition: all 2s ease;
}
.idfont {
    font-size: 17px;
} 
.longtextfont {
    font-size: 16px;
} 
.test {
    font-size: 20px;
} 
    </style>