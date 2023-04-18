<template>
    <div>
    <Transition name="fade">
        <v-img
            cover
            v-if="componum == 0 && typepage == 0"
            src="@/assets/background/Background4.jpg"
        >
      <v-container>
        <v-responsive >
          <v-row class="justify-center" v-if="componum == 0">
            <v-col cols="10">
                <div v-if="textstory >= 0 && textstory <= 5">
                    <v-img
                        class="ml-5 mr-5"
                        max-height="500"
                        cover
                        src="@/assets/cutsence/CG01.jpg"
                    >
                   
                    </v-img>
                </div>
              
                <div v-if="textstory >= 19 && textstory <= 20">
                    <v-img
     
                        max-height="500"
                                cover
                                class="ml-5 mr-5"
                        src="@/assets/other/Untitled-1.png"
                    >
                   
                    </v-img>
                </div>
            
                
                <Transition name="fade">
                <div v-if="textstory == 21">
                    
                    <v-img
                    class="ml-5 mr-5"
                    max-height="500"
                    cover
                        src="@/assets/cutsence/CG02.jpg"
                    >
                   
                    </v-img>
                </div>
                </Transition>
            </v-col>
          </v-row>
          <Transition name="fade">
          <v-row class="justify-center" v-if="this.chatstory == 0 && componum == 0">
                <v-col cols="6" class="">
                    <v-img
                    class=""
                            cover
                            src="@/assets/other/Textbox01.png"
                    >
                    <v-row>
                        <v-col cols="12" class="ml-5 mt-1">
                            <div>
                                <h2 class="text-white" v-if="textstory == 0 || textstory == 1 || textstory == 2 || textstory == 3 || textstory == 5 || textstory == 19 || textstory == 20  || textstory == 21">
                                    {{ mc_name }}
                                </h2>
                                <h2 class="text-white" v-if="textstory == 4 || textstory == 16">
                                        (คำบรรยาย)
                                </h2>
                            </div>  
                        </v-col>
                    </v-row>
                    <v-row class="justify-center">
                        <v-col cols="11">
                            <div v-if="textstory == 0">
                                <p class="text-secondary idfont font-weight-bold">
                                    19.03 เวลาหลังเลิกเรียนก็เปรียบเสมือนโลกอีกใบของผมที่จะได้ท่องเน็ต หรือเล่นเกม อะไรก็ตามที่ไม่ต้องวุ่นวายกับคนที่เดินผ่านไปผ่านมา...
                                </p>
                            </div>    
                            <div v-if="textstory == 1">
                                <p class="text-secondary idfont font-weight-bold">
                                    แต่เปลี่ยนมาวุ่นวายกับคนในโลกออนไลน์ที่ใช้ชีวิตกันอยู่แค่ในหน้าจอขนาด 1,980 x 1,080 pixel แทนโลกสามมิติมากกว่า
                                </p>
                            </div>    
                            <div v-if="textstory == 2">
                                <p class="text-secondary idfont font-weight-bold">
                                    ...?  <br/> <br/>

                                </p>
                            </div>
                            <div v-if="textstory == 3">
                                <p class="text-secondary idfont font-weight-bold">
                                    ดูเหมือนแฮชแท็กบางอย่างกำลังเป็นประเด็นนะ KawaiiStreamer? <br/> <br/>
                                </p>
                            </div> 
                            <div v-if="textstory == 4">
                                <p class="text-secondary idfont font-weight-bold">
                                    [เป็นหน้าโซเชียลมีเดียที่กำลังพูดถึงสตรีมเมอร์หน้าใหม่] <br/> <br/>
                                </p>
                            </div>  
                            <div v-if="textstory == 5">
                                <p class="text-secondary idfont font-weight-bold">
                                    ลองแวะไปดูสักหน่อยละกัน <br/> <br/>
                                </p>
                            </div>                        
                            <div v-if="textstory == 19">
                                <p class="text-secondary idfont font-weight-bold">
                                    หลังจากนั้นเธอก็พยายามเปลี่ยนบรรยากาศ หาเรื่องคุยไปเรื่อยเปื่อย แลกเปลี่ยนทัศนคติเล่าประสบการณ์แบบสมจริงที่ไม่มีส่วนไหนคิดว่าเป็นเรื่องแต่งได้เสียจนคิดว่าชีวิตคนๆนี้มันจะเจ๋งเกินไปแล้ว
                                </p>
                            </div>
                            <div v-if="textstory == 20">
                                <p class="text-secondary idfont font-weight-bold"> 
                                    ทั้งตลก เศร้า ทำให้เราดันสนุกไปด้วยได้อย่างไม่น่าเชื่อเลย แบบนี้น่ะ... <br/> <br/>
                                </p>
                            </div> 
                            <div v-if="textstory == 21">
                                <p class="text-secondary idfont font-weight-bold">
                                    โดนใจอย่างจัง!!! <br/> <br/>
                                </p>
                            </div> 
                        </v-col>
                    </v-row>
                    <v-row class="justify-end">
                        <v-col cols="12"></v-col>
                        <v-btn
                        v-if="textstory != 19"
                            class="mt-n3 mr-5"
                            variant="text"
                            icon="mdi-chevron-right"
                            color="primary"
                            @click = "story()"
                        >
                        </v-btn>
                        <v-btn
                            v-if="textstory == 19"
                            class="mt-n8 mr-5"
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
                        <div v-if="textstory == 0 || textstory == 4 || textstory == 6 || textstory == 7 || textstory == 8 || textstory == 9 || textstory == 12 || textstory == 13 || textstory == 14 || textstory == 15  || textstory == 16 || textstory == 19 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC00.png"
                            />
                        </div>
                        <div v-if="textstory == 5 || textstory == 17 || textstory == 18 || textstory == 20 || textstory == 21">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC01.png"
                            />
                        </div>
                        <div v-if="textstory == 1 || textstory == 2 || textstory == 3 || textstory == 10">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC05.png"
                            />
                        </div>
                        <div v-if="textstory == 11">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC06.png"
                            />
                        </div>
                    </v-img>
                </v-col>
              </v-row>
              </Transition>
              <Transition name="fade">
              <v-row class="justify-center" v-if="this.chatstory >= 1 && componum == 0">
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
                            <div v-if="this.chatstory ==1 || this.chatstory >= 2 && this.chatnum == 0">
                                <p>
                                    <br/>
                                </p>
                            </div>  
                            <div v-if="this.chatstory ==1 || this.chatstory >= 2 && this.chatnum == 0">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            <div v-if="this.chatstory ==1 || this.chatstory >= 2 && this.chatnum == 0">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            <div v-if="this.chatstory ==1 || this.chatstory >= 2 && this.chatnum == 0">
                                <p>
                                    <br/>
                                </p>
                            </div> 

                            <div v-if="this.chatstory >= 2 && this.chatnum > 0 && this.chatnum < 5">
                                <p>
                                    มะง่วง  :   มาแล้วๆๆๆๆ
                                </p>
                            </div> 
                            <div v-if="this.chatstory == 2 && this.chatnum > 0 && this.chatnum < 2">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            <div v-if="this.chatstory == 2 && this.chatnum > 0 && this.chatnum < 2">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            <div v-if="this.chatstory == 2 && this.chatnum > 0 && this.chatnum < 2">
                                <p>
                                    <br/>
                                </p>
                            </div>    
                            <div v-if="this.chatstory >= 2 && this.chatnum > 1 && this.chatnum < 6">
                                <p>
                                    น้ำปลาหวาน  :   konkonkonnnnn
                                </p>
                            </div> 
                            <div v-if="this.chatstory == 2 && this.chatnum > 1 && this.chatnum < 3">
                                <p>
                                    <br/>
                                </p>
                            </div>
                            <div v-if="this.chatstory == 2 && this.chatnum > 1 && this.chatnum < 3">
                                <p>
                                    <br/>
                                </p>
                            </div>    
                            <div v-if="this.chatstory >= 2 && this.chatnum > 2 && this.chatnum < 7">
                                <p>
                                    หมึกผัดไข่เค็ม  :   มายังอะ

                                </p>
                            </div>
                            <div v-if="this.chatstory == 2 && this.chatnum > 2 && this.chatnum < 5">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            
                            
                            <div v-if="this.chatstory >= 3 && this.chatnum > 3 && this.chatnum < 8">
                                <p>
                                    omeow_11  :   คนดูเยอะจัง
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 3 && this.chatnum > 4 && this.chatnum < 9">
                                <p>
                                    babyblue  :   สวัสดีครับ
                                </p>
                            </div>  
                            <div v-if="this.chatstory >= 4 && this.chatnum > 5 && this.chatnum < 10">
                                <p>
                                    ringo__  :   ยินดีที่ได้รู้จักน้า♥♥
                                </p>
                            </div>                        
                            <div v-if="this.chatstory >= 5 && this.chatnum > 6 && this.chatnum < 11">
                                <p>
                                    pewpew777  :   ไม่ลอง...หน่อยหรอ?
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 5 && this.chatnum > 7 && this.chatnum < 12">
                                <p>
                                    tsisonfire  :   คิดถึงจังเลย♥♥♥
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 5 && this.chatnum > 8 && this.chatnum < 13">
                                <p>
                                    unchidaaaaaa  :   ไม่ชอบพวกมาดูใหม่เลย 😠😠
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 6 && this.chatnum > 9 && this.chatnum < 14">
                                <p>
                                    unchidaaaaaa  :   วันนี้ก็น่ารักอีกแล้ว
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 6 && this.chatnum > 10 && this.chatnum < 15">
                                <p>
                                    ringo__  :   ลองทำตามก็ไม่แย่นะ?
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 7 && this.chatnum > 11 && this.chatnum < 16">
                                <p>
                                    JellyBear  :   วันนี้สตรีมเมอร์จังน่ารักจังเลยยย
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 7 && this.chatnum > 12 && this.chatnum < 17">
                                <p>
                                    kusogaki1234  :   คาสุจังลองทำท่าน่ารักให้ดูหน่อยยย
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 8 && this.chatnum > 13 && this.chatnum < 18">
                                <p>
                                    puropuchi  :   ดูครั้งแรกครับ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 8 && this.chatnum > 14 && this.chatnum < 19">
                                <p>
                                    anony  :   หวังว่าจะอยู่ได้นานนะ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 8 && this.chatnum > 15 && this.chatnum < 20">
                                <p>
                                    ต้นหอมย่าง  :   ปกติมาดูไม่ทันแต่วันนี้มาทัน ดีใจจังงง
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 9 && this.chatnum > 16 && this.chatnum < 21">
                                <p>
                                    ต้นหอมย่าง  :   วันนี้จะทำอะไรหรอ ?
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 9 && this.chatnum > 17 && this.chatnum < 22">
                                <p>
                                    เต้าหู้ปลา  :   คาสุุจังทำไมไม่ลองทำตามที่บอกอะ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 9 && this.chatnum > 18 && this.chatnum < 23">
                                <p>
                                    tongkatsulover  :   น่ารักตั้งแต่เริ่มเลย
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 10 && this.chatnum > 19 && this.chatnum < 24">
                                <p>
                                    puropuchi  :   วันนี้สตรีมเมอร์จังน่ารักจังเลยยย
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 10 && this.chatnum > 20 && this.chatnum < 25">
                                <p>
                                    มะง่วง  :   โดโมะคาสุจัง😍😍
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 10 && this.chatnum > 21 && this.chatnum < 26">
                                <p>
                                    มะง่วง  :   วันนี้คนดูเยอะม้าก
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 10 && this.chatnum > 22 && this.chatnum < 27">
                                <p>
                                    tongkatsulover  :   น่ารักกก
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 10 && this.chatnum > 24 && this.chatnum < 29">
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
                            </div> 
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
                <v-col cols="3" class="">
                    <v-img
                    height="200"
                    src="@/assets/other/Spritebox_Small.png"
                    >
                        <div v-if="textstory == 0 || textstory == 4 || textstory == 6 || textstory == 7 || textstory == 8 || textstory == 9 || textstory == 12 || textstory == 13 || textstory == 14 || textstory == 15  || textstory == 16 || textstory == 19 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC00.png"
                            />
                        </div>
                        <div v-if="textstory == 5 || textstory == 17 || textstory == 18 || textstory == 20 || textstory == 21">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC01.png"
                            />
                        </div>
                        <div v-if="textstory == 1 || textstory == 2 || textstory == 3 || textstory == 10">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC05.png"
                            />
                        </div>
                        <div v-if="textstory == 11">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC06.png"
                            />
                        </div>
                    </v-img>
                </v-col>
              </v-row>
              </Transition>
              
    
          
        </v-responsive>
      </v-container>
    </v-img>

</Transition>
<Transition name="fade">
        <v-img
            cover
            v-if="componum == 0 && typepage == 1"
            src="@/assets/background/Background4.jpg"
        >
      <v-container>
        <v-responsive >
          <v-row class="justify-center" v-if="componum == 0">
            <v-col cols="10">
                <Transition name="fade">
                <div v-if="textstory >= 6 && textstory <= 18">
                    <v-img
                    max-height="500"
                                cover
                                class="ml-5 mr-5"   
                        src="@/assets/background/BG01_Streamerroom1.jpg"
                    >
                    <div v-if="textstory == 6">
                        <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            <v-col cols="12" class="mt-12"></v-col>
                            
                            <v-col cols="12"></v-col>
                            <v-col cols="12" class="mt-10"></v-col>
                            <v-row class="justify-center">
                                <v-col cols="11" class="mt-n10">
                                    <v-img
                                        src="@/assets/other/Textbox_A.png"
                                    >
                                        <v-row>
                                            <v-col cols="12" class="ml-5">
                                                <div>
                                                    <h3 class="text-white mt-1 mb-n3" >
                                        (คำบรรยาย)
                                </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11"  class="mt-3">
                                                <div v-if="textstory == 6">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        [หน้าจอปรากฎรูปเด็กสาวผมสีบลอนด์ ...ที่ดูก็รู้ว่าเป็นวิกผม กับหน้าตาที่ถูกแต่งแต้มด้วยเครื่องสำอางสไตล์แฟชั่นจิไรเคย์จากชุดแบรนด์ดังราคาแพงที่สาวๆนิยม]
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
                    </div>
                    <v-col cols="12" class="mt-5"></v-col>

                        <v-img
                            v-if="this.textstory == 8 || this.textstory == 10 || this.textstory == 11 || this.textstory == 14 || this.textstory == 16"
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
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 8 || textstory == 14">
                                                        Kawaii Streamer
                                                    </h3>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 10">
                                                        {{ mc_name }}
                                                    </h3>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 11 || textstory == 16">
                                                        (คำบรรยาย)
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11"  class="mt-3">
                                                <div v-if="textstory == 8">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        หืม ไม่ต้องเรียกชื่อช่องเต็มยศขนาดนั้นก็ได้ <br/>  <br/>
                                                    </p>
                                                </div>
                                            
                                                <div v-if="textstory == 10">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        โดเนทสักหน่อยดีหรือเปล่านะ...? <br/>  <br/>
                                                    </p>
                                                </div> 

                                                <div v-if="textstory == 11">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        [หน้าจอขึ้นข้อความ คุณเต้าหู้ปลา ได้ส่งโดเนทจำนวน xxx] <br/>  <br/>
                                                    </p>
                                                </div> 
                                              
                                                <div v-if="textstory == 14">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        สำหรับคนที่มาใหม่ลองอ่านข้อควรปฏิบัติด้านล่างก่อนก็ได้นะ ค่อยๆคอมเมนต์กันอย่างสุภาพด้วย! <br/> <br/>
                                                    </p>
                                                </div> 

                                                <div v-if="textstory == 16">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        [ช่องคอมเม้นบางส่วนด่าทอเต้าหู้ปลา บางส่วนเห็นด้วยให้ทำตามเต้าหู้ปลาบอกเพราะอยากเห็นเซอร์วิส]<br/> <br/>
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
                        <div v-if="this.textstory == 15">
                            <v-row class="justify-center">
                                
                                <v-col cols="10" class="">
                                    <v-img
                                    width="800"
                                    src="@/assets/other/pop-upguidelines.png"
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
                                            class="mt-n12 mr-8"
                                            variant="text"
                                            icon="mdi-chevron-right-circle"
                                            color="white"
                                            @click = "story()"
                                        >
                                            
                                        </v-btn>
                                    </v-row>
                        </div>
                    
            
                        <v-img
                            v-if="this.textstory == 7"
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
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 7">
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11"  class="mt-3">
                                                <div v-if="textstory == 7">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        Hi Hiii～Kawaii Streamerเองค่า วันนี้เหมือนคนดูจะเยอะขึ้นกว่าเดิมหรือเปล่าเนี่ย สวัสดีคุณเต้าหู้ปลา คุณหมึกผัดไข่เค็ม คุณมะง่วงด้วยน้า มาใหม่ใช่ม้า? ฝากตัวด้วยน้า
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
                        v-if="this.textstory == 12"
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
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 12">
                                                        Kawaii Streamer
                                                    </h3>
                                                   
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11"  class="mt-3">
                
                                                <div v-if="textstory == 12">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ว้าย ตกใจหมดเลย ยังไงก็ยังไม่ชินกับเสียงแจ้งเตือนโดเนทอยู่ดีอ่า <br/><br/>
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
                            v-if="this.textstory == 13"
                            height="470"
                            src="@/assets/kwaii/KS05.gif"
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
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 13">
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11"  class="mt-3">
                                                <div v-if="textstory == 13">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ไหนๆ คุณเต้าหู้ปลา ขอบคุณสำหรับโดเนทจำนวน xxxนะ ขอให้..เอ๋? เรื่องแบบนั้นไม่ได้หรอกนะ <br/> <br/>
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
                        v-if="this.textstory == 9 || this.textstory == 17 || this.textstory == 18"
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
                                        cover
                                        src="@/assets/other/Textbox_A.png"
                                    >
                                        <v-row>
                                            <v-col cols="12" class="ml-5">
                                                <div>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory != 18">
                                                        Kawaii Streamer
                                                    </h3>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 18">
                                                        (คำบรรยาย)
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-3">
                                                <div v-if="textstory == 9" class="text-secondary idfont font-weight-bold">
                                                    <p>
                                                        เรียกว่า คาสุจังเถอะ！ <br/> 
                                                    </p>
                                                </div> 
                                                
                                                <div v-if="textstory == 17" class="text-secondary longtextfont font-weight-bold">
                                                    <p>
                                                        เอาเถอะๆ ก่อนจะต้องกลายเป็นไลฟ์สตรีมเซ็กซี่ ถึงจะเร็วไปหน่อย แต่ว่าเพราะผู้ติดตามและคนดูที่เพิ่มมาเยอะ เลยมีของขวัญให้ละ เป็นอิโมจิออฟฟิเชียล สเปเชียลไว้ใช้สำหรับช่องนี้โดยเฉพาะสำหรับคนสมัครเป็นสมาชิก อย่าลืมสมัครล่ะ！ <br/>
                                                    </p>
                                                </div>

                                                <div v-if="textstory == 18" class=" text-secondary longtextfont font-weight-bold">
                                                    <p>
                                                        [ลองกดอีโมตหน้ายิ้ม เพื่อส่งอีโมตเป็นกำลังใจให้คาสุจังดูสิ] <br/> <br/> 
                                                    </p>
                                                </div>
                                            
                                     
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                            <v-btn
                                                v-if="textstory != 17 && textstory != 18"
                                                    class="mt-n3 mr-5"
                                                    variant="text"
                                                    icon="mdi-chevron-right"
                                                    color="primary"
                                                    @click = "story()"
                                                >
                                                </v-btn>
                                                <v-btn
                                                    v-if="textstory == 17 || textstory == 18"
                                                    class="mt-n12 mr-5"
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
                </Transition>
            </v-col>
          </v-row>
        
              <Transition name="fade">
              <v-row class="justify-center" v-if="this.chatstory >= 1 && componum == 0">
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
                            <div v-if="this.chatstory ==1 || this.chatstory >= 2 && this.chatnum == 0">
                                <p>
                                    <br/>
                                </p>
                            </div>  
                            <div v-if="this.chatstory ==1 || this.chatstory >= 2 && this.chatnum == 0">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            <div v-if="this.chatstory ==1 || this.chatstory >= 2 && this.chatnum == 0">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            <div v-if="this.chatstory ==1 || this.chatstory >= 2 && this.chatnum == 0">
                                <p>
                                    <br/>
                                </p>
                            </div> 

                            <div v-if="this.chatstory >= 2 && this.chatnum > 0 && this.chatnum < 5">
                                <p>
                                    มะง่วง  :   มาแล้วๆๆๆๆ
                                </p>
                            </div> 
                            <div v-if="this.chatstory == 2 && this.chatnum > 0 && this.chatnum < 2">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            <div v-if="this.chatstory == 2 && this.chatnum > 0 && this.chatnum < 2">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            <div v-if="this.chatstory == 2 && this.chatnum > 0 && this.chatnum < 2">
                                <p>
                                    <br/>
                                </p>
                            </div>    
                            <div v-if="this.chatstory >= 2 && this.chatnum > 1 && this.chatnum < 6">
                                <p>
                                    น้ำปลาหวาน  :   konkonkonnnnn
                                </p>
                            </div> 
                            <div v-if="this.chatstory == 2 && this.chatnum > 1 && this.chatnum < 3">
                                <p>
                                    <br/>
                                </p>
                            </div>
                            <div v-if="this.chatstory == 2 && this.chatnum > 1 && this.chatnum < 3">
                                <p>
                                    <br/>
                                </p>
                            </div>    
                            <div v-if="this.chatstory >= 2 && this.chatnum > 2 && this.chatnum < 7">
                                <p>
                                    หมึกผัดไข่เค็ม  :   มายังอะ

                                </p>
                            </div>
                            <div v-if="this.chatstory == 2 && this.chatnum > 2 && this.chatnum < 5">
                                <p>
                                    <br/>
                                </p>
                            </div> 
                            
                            
                            <div v-if="this.chatstory >= 3 && this.chatnum > 3 && this.chatnum < 8">
                                <p>
                                    omeow_11  :   คนดูเยอะจัง
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 3 && this.chatnum > 4 && this.chatnum < 9">
                                <p>
                                    babyblue  :   สวัสดีครับ
                                </p>
                            </div>  
                            <div v-if="this.chatstory >= 4 && this.chatnum > 5 && this.chatnum < 10">
                                <p>
                                    ringo__  :   ยินดีที่ได้รู้จักน้า♥♥
                                </p>
                            </div>                        
                            <div v-if="this.chatstory >= 5 && this.chatnum > 6 && this.chatnum < 11">
                                <p>
                                    pewpew777  :   ไม่ลอง...หน่อยหรอ?
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 5 && this.chatnum > 7 && this.chatnum < 12">
                                <p>
                                    tsisonfire  :   คิดถึงจังเลย♥♥♥
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 5 && this.chatnum > 8 && this.chatnum < 13">
                                <p>
                                    unchidaaaaaa  :   ไม่ชอบพวกมาดูใหม่เลย 😠😠
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 6 && this.chatnum > 9 && this.chatnum < 14">
                                <p>
                                    unchidaaaaaa  :   วันนี้ก็น่ารักอีกแล้ว
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 6 && this.chatnum > 10 && this.chatnum < 15">
                                <p>
                                    ringo__  :   ลองทำตามก็ไม่แย่นะ?
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 7 && this.chatnum > 11 && this.chatnum < 16">
                                <p>
                                    JellyBear  :   วันนี้สตรีมเมอร์จังน่ารักจังเลยยย
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 7 && this.chatnum > 12 && this.chatnum < 17">
                                <p>
                                    kusogaki1234  :   คาสุจังลองทำท่าน่ารักให้ดูหน่อยยย
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 8 && this.chatnum > 13 && this.chatnum < 18">
                                <p>
                                    puropuchi  :   ดูครั้งแรกครับ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 8 && this.chatnum > 14 && this.chatnum < 19">
                                <p>
                                    anony  :   หวังว่าจะอยู่ได้นานนะ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 8 && this.chatnum > 15 && this.chatnum < 20">
                                <p>
                                    ต้นหอมย่าง  :   ปกติมาดูไม่ทันแต่วันนี้มาทัน ดีใจจังงง
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 9 && this.chatnum > 16 && this.chatnum < 21">
                                <p>
                                    ต้นหอมย่าง  :   วันนี้จะทำอะไรหรอ ?
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 9 && this.chatnum > 17 && this.chatnum < 22">
                                <p>
                                    เต้าหู้ปลา  :   คาสุุจังทำไมไม่ลองทำตามที่บอกอะ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 9 && this.chatnum > 18 && this.chatnum < 23">
                                <p>
                                    tongkatsulover  :   น่ารักตั้งแต่เริ่มเลย
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 10 && this.chatnum > 19 && this.chatnum < 24">
                                <p>
                                    puropuchi  :   วันนี้สตรีมเมอร์จังน่ารักจังเลยยย
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 10 && this.chatnum > 20 && this.chatnum < 25">
                                <p>
                                    มะง่วง  :   โดโมะคาสุจัง😍😍
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 10 && this.chatnum > 21 && this.chatnum < 26">
                                <p>
                                    มะง่วง  :   วันนี้คนดูเยอะม้าก
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 10 && this.chatnum > 22 && this.chatnum < 27">
                                <p>
                                    tongkatsulover  :   น่ารักกก
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 10 && this.chatnum > 25 && this.chatnum < 30">
                                <p>
                                    {{ mc_name }}  : 
                                    <v-row class="ml-5 mt-n1 mb-n5">
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
                            </div> 
                        </v-col>
                    </v-row>
                    <v-row class="justify-end" align-self="end">
                      
                   
                       
                        <v-btn
                            class="ml-12 mt-n3"
                            variant="text"
                            icon="mdi-near-me"
                            v-if="textstory < 18 || emotetext == false"
                            color="secondary"
                            size="x-large"
                        >
                        </v-btn>
                        <v-btn
                            class="ml-12 mt-n3"
                            variant="text"
                            icon="mdi-near-me"
                            color="secondary"
                            v-if="textstory == 18 && emotetext == true"
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
                                v-if="textstory == 18 && emotetext == true"
                                >
                                
                                </v-btn>
                                <v-btn
                                class="ml-n5 mr-5 mt-n3"
                            variant="text"
                            icon="mdi-emoticon-happy-outline"
                            color="secondary"
                            size="x-large"
                                v-if="textstory <18 || emotetext == false"
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
                <v-col cols="3" class="">
                    <v-img
                    height="200"
                    src="@/assets/other/Spritebox_Small.png"
                    >
                        <div v-if="textstory == 0 || textstory == 4 || textstory == 6 || textstory == 7 || textstory == 8 || textstory == 9 || textstory == 12 || textstory == 13 || textstory == 14 || textstory == 15  || textstory == 16 || textstory == 19 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC00.png"
                            />
                        </div>
                        <div v-if="textstory == 5 || textstory == 17 || textstory == 18 || textstory == 20 || textstory == 21">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC01.png"
                            />
                        </div>
                        <div v-if="textstory == 1 || textstory == 2 || textstory == 3 || textstory == 10">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC05.png"
                            />
                        </div>
                        <div v-if="textstory == 11">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC06.png"
                            />
                        </div>
                    </v-img>
                </v-col>
              </v-row>
              </Transition>
              
    
          
        </v-responsive>
      </v-container>
    </v-img>
    
</Transition>
<Transition name="fade">
     <compo :mc_name="mc_name" v-if="componum == 1" />
 </Transition>
 <!-- <Transition name="fade">
    <v-img src="@/assets/other/Untitled-1.png" class="fade-in-image" max-height="1000" cover v-if="componum == 0 && fade == 1 "></v-img>
 </Transition> -->
    </div>
    </template>
    
    <script>
    import { useRouter } from 'vue-router';
    import compo from '@/components/Chapter2compo.vue'
    import sound1 from '@/assets/song/Labyrinth_In_The_Head.mp3'
    import sound2 from '@/assets/song/Labyrinth.mp3'
    export default {
        name : "Chapter1compo",
        props: { mc_name: String},
        components:{
          compo
        },
        data() {
            return {
                textstory : 0,
                chatnum: 0,
                chatstory : 0,
                typepage : 0,
                router : useRouter(),
                componum: 0,
                mcname : "",
                fav: true,
                menu: false,
                player1 : new Audio(sound1),
                player2 : new Audio(sound2),
                message: false,
                hints: true,
                emotesend: [],
                emotearraynum : 0,
                emotetext : true,
                soundtype: 0,
                // store : useStore(),

            }
        },

        methods: {
            story(){
                this.textstory = this.textstory + 1
                
                if(this.textstory == 6){
                    //1
                    this.typepage = 1

                    this.player1.pause()
                    this.soundtype = 1
                    this.playsound()
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                if(this.textstory == 7){
                    //2
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 8){
                    //3
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 9){
                    //4
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 11){
                    //5
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 12){
                    //6
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 13){
                    //7
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 14){
                    //8
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 16){
                    //9
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 17){
                    //10
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 19){
                    //11
                    this.typepage = 0
                    this.chatstory = 0
                    this.player2.pause()
                    this.soundtype = 0
                    this.playsound()

                }

                if(this.textstory == 22){
                    this.mcname = this.mc_name
                    this.componum = 1
                    // this.$router.push('/chapter2')
                }
            },
            sendtext() {
                console.log("1");
                if(this.chatstory >= 1){
                    setTimeout(() => this.chattext(), 500);
                }
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
            send() {
                this.chatnum = this.chatnum + 3
                this.emotetext = false
            },
            chattext() {
                console.log("1");
                if(this.chatstory == 2 && this.chatnum <= 3){
                    
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 1000);
                }
                else if(this.chatstory == 3 && this.chatnum < 5){
                    
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 1000);
                }
                else if(this.chatstory == 4 && this.chatnum < 6){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 1000);
                }
                else if(this.chatstory == 5 && this.chatnum < 9){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.chatstory == 7 && this.chatnum < 13){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.chatstory == 8 && this.chatnum < 16){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.chatstory == 9 && this.chatnum < 19){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
                else if(this.chatstory == 10 && this.chatnum < 23){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
            },
            loopsound()
            {
                if(this.soundtype == 0){
                    setTimeout(() => this.playsound(), 125000);
                }
                else if(this.soundtype == 1){
                    setTimeout(() => this.playsound(), 112000);
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
            }
        },
        created(){
            this.playsound()
            // this.player2.pause()
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
.startbutton{
  background: linear-gradient(0deg, rgba(149,73,223,1) 0%, rgba(174,105,222,1) 50%);
}
.fade-enter-from{
  opacity: 1;
}
.fade-enter-to{
  opacity: 0;
}

.fade-enter-active{
  transition: all 2s ease;
}
.fade-leave-from{
    opacity: 1;
}
.fade-leave-to{
    opacity: 0;
}
.fade-leave-active{
  transition: all 2s ease;
}
 </style>