<template>
    <div>
        <v-img
            v-if="componum == 0" 
            src="@/assets/background/Background4.jpg"
        >
      <v-container>
        <v-responsive >
          <v-row class="justify-center">
            <v-col cols="10">
                <div v-if="textstory == 0 || textstory == 19 || textstory == 20">
                    <v-img
                        max-height="500"
                        class="ml-5 mr-5"   
                        cover
                        src="@/assets/other/Untitled-1.png"
                    >
                   
                    </v-img>
                </div>
                <div v-if="textstory >= 4 && textstory <= 18">
                    <v-img
                    class="ml-5 mr-5"   
                        
                        cover
                        src="@/assets/background/BG01_Streamerroom1.jpg"
                    >
                        <v-img
                            v-if="this.textstory == 4"
                            height="500"
                            src="@/assets/kwaii/KS00.gif"
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
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11"  class="mt-2">
                                                <div v-if="textstory == 4">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        Hi Hiii～Kawaii Streamerเองค่า วันนี้ก็เจอกันอีกแล้วน้า <br/> <br/>
                                                    </p>
                                                </div>
                                        
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
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
            
                        <v-img
                            v-if="this.textstory == 5"
                            height="500"
                            src="@/assets/GT/KS02-GT02.gif"
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
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11"  class="mt-2">
                                                <div v-if="textstory == 5">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ส่วนไลฟ์สตรีมวันนี้จะมีแขกรับเชิญสุดพิเศษล่ะ นั่นก็คือ SupersonicHandsomeBoy! <br/> <br/>
                                                    </p>
                                                </div> 
                                                
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
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
                        <v-img
                        v-if="this.textstory == 6 || this.textstory == 7"
                            height="500"
                            src="@/assets/GT/KS02-GT01.gif"
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
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 6 ">
                                                        Kawaii Streamer
                                                    </h3>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 7">
                                                        (คำบรรยาย)
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11"  class="mt-2">
                
                                                <div v-if="textstory == 6">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ยังไงวันนี้เราก็จะเล่นเกมสยองขวัญด้วยกัน ขอให้ทุกคนมานั่งดูพวกเราให้จบด้วยนะ！ <br/><br/>
                                                    </p>
                                                </div> 
                                                <div v-if="textstory == 7">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        [ช่องแชทส่วนใหญ่ดีใจ มีบางคอมเมนต์ที่เหมือนด่าเธอหรือแขกรับเชิญด้วย]<br/><br/>
                                                    </p>
                                                </div> 
                                            
                                     
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
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
                        <v-img
                            v-if="this.textstory == 8"
                            height="500"
                            src="@/assets/GT/KS00-GT04.gif"
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
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11"  class="mt-2">
                                                <div v-if="textstory == 8">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        มาเริ่มกันเลยดีกว่า ก่อนอื่นเกมนี้เป็นเกมที่มีเนื้อเรื่องมาจากตำนานสยองขวัญเรื่องหนึ่งด้วย นั่นน่าสนใจมาก <br/><br/>
                                                    </p>
                                                </div>  
                              
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-end">
                                        <v-col cols="12"></v-col>
                                        <v-btn
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
                        <v-img
                        v-if="this.textstory == 9 "
                            height="500"
                            src="@/assets/GT/KS05-GT01.gif"
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
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 9">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        เอ๊ะ เหมือนจะเจออะไรบางอย่างด้วย ไปทางนั้นดีหรือเปล่า <br/><br/>
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
                        v-if="this.textstory == 10 || textstory == 11"
                            height="500"
                            src="@/assets/GT/KS05-GT03.gif"
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
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 10">
                                                        Supersonic HandsomeBoy
                                                    </h3>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 11">
                                                        (คำบรรยาย)
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 10">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ไม่สิ อย่าไปทางนั้นเลย <br/><br/>
                                                    </p>
                                                </div> 
                                                <div v-if="textstory == 11">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        [ช่องแชทที่รันช้าๆบอกให้ลองไปดู] <br/><br/>
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
                            height="500"
                            src="@/assets/GT/KS07-GT03.gif"
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
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 12">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        งั้นลองไปดูกันเถอะ.... ว้าย!!! <br/><br/>
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
                        v-if="this.textstory == 13 || textstory == 14"
                            max-height="500"
                            cover
                            src="@/assets/cutsence/CG03.jpg"
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
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 14">
                                                        Kawaii Streamer
                                                    </h3>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 13">
                                                        (คำบรรยาย)
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 13">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        [สตรีมเมอร์สาวตกใจจนเอียงตัวเข้าไปหาแขกรับเชิญ] <br/><br/>
                                                    </p>
                                                </div> 
                                                <div v-if="textstory == 14">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        อะไรเนี่ย อะไรเนี่ย อะไรเนี่ย น่ากลัวชะมัดเลย ช่วยด้วย ไม่เอาแล้วๆๆๆ <br/><br/>
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
                        v-if="this.textstory == 15"
                            height="500"
                            src="@/assets/GT/KS07-GT02.gif"
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
                                                    <h3 class="text-white mt-1 mb-n3" >
                                                        Supersonic HandsomeBoy
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 15">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ก็บอกแล้วนี่ ว่าอย่าไป <br/> <br/>
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
                        v-if="this.textstory == 16"
                            height="500"
                            src="@/assets/GT/KS04-GT02.gif"
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
                                                        Kawaii Streamer
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 16">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ก็อยากรู้มั้ยล่ะ <br/><br/>
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
                        v-if="this.textstory == 17 || this.textstory == 18"
                            height="500"
                            src="@/assets/GT/KS00-GT02.gif"
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
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 17">
                                                        Supersonic HandsomeBoy
                                                    </h3>
                                                    <h3 class="text-white mt-1 mb-n3" v-if="textstory == 18">
                                                        (คำบรรยาย)
                                                    </h3>
                                                </div>  
                                            </v-col>
                                        </v-row>
                                        <v-row class="justify-center">
                                            <v-col cols="11" class="mt-2">
                                                <div v-if="textstory == 17">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        ฮะๆ เล่นต่อไปเถอะ <br/> <br/>
                                                    </p>
                                                </div> 
                                                <div v-if="textstory == 18">
                                                    <p class="text-secondary idfont font-weight-bold">
                                                        [ช่องแชทที่เริ่มแซว บางส่วนก็ตลกไปด้วย]<br/><br/>
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
                <div v-if="textstory >= 1 && textstory <= 3">
                    <v-img 
                        class="ml-5 mr-5"
                                src="@/assets/other/bgwebboard1.jpg"
                                
                                max-height="500"
                                cover
                            >
                    <v-row class="justify-center">
                        
                            <v-col cols="8" v-if="this.post == 0">
                                <v-card  width="680" max-height="447" class="mt-8 mb-1" color="grey-lighten-5">
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
                                            คอแลปวันนี้ต้องสนุกแน่ๆ รอไม่ไหวแล้ว !
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(2)" color="secondary" block rounded="xl" size="x-large">
                                            คอแลปหรอ กับใครก็ได้แหละแค่ขอได้เห็นเธอก็พอ
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-btn variant="outlined" @click = "postfuntion(3)" color="secondary" block rounded="xl" size="x-large">
                                            วันนี้มีคอแลปหรอ จะเป็นใครนะ <br/> ไม่อยากให้เป็นผู้ชายเลย
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                        
                                    </v-card-text>
                                </v-card>
                                
                            </v-col>
                        <v-col cols="1" class="ml-12 mr-n12">
                            <v-col cols="12" class="ml-12 mr-n12"></v-col>
                            
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
    
            </v-col>
          </v-row>
          <v-row class="justify-center"  v-if="this.chatstory == 0">
                <v-col cols="6" class="">
                    <v-img
                    cover
                            src="@/assets/other/Textbox01.png"
                    >
                    <v-row>
                        <v-col cols="12" class="ml-5 mt-1">
                            <div>
                                <h2 class="text-white" v-if="textstory == 0 || textstory == 19 || textstory == 20 ">
                                    {{ mc_name }}
                                </h2>
                                <h2 class="text-white" v-if="textstory == 1 || textstory == 2 || textstory == 3">
                                        (คำบรรยาย)
                                </h2>
                            </div>  
                        </v-col>
                    </v-row>
                    <v-row class="justify-center">
                        <v-col cols="11">
                            <div v-if="textstory == 0">
                                <p class="text-secondary idfont font-weight-bold">
                                    19.48 ดูเหมือนวันนี้เธอจะมีคอลแลปกับคนอื่นด้วย เห็นว่าเป็นคนที่สุดยอดมากๆ จะเป็นใครกันนะ?
                                </p>
                            </div>    
                            <div v-if="textstory == 1">
                                <p class="text-secondary idfont font-weight-bold">
                                    [เช็คเว็บบอร์ด]<br/><br/>
                                </p>
                            </div>
                            <div v-if="textstory == 2 || textstory == 3">
                                <p class="text-secondary idfont font-weight-bold">
                                    [โพส]<br/><br/>
                                </p>
                            </div>     
                            <div v-if="textstory == 19">
                                <p class="text-secondary idfont font-weight-bold">
                                    หลังจากนั้นทั้งสองคนก็เล่นเกมที่ว่าจนจบไปด้วยดี ถึงจะสะดุ้งเสียงกรี๊ดไปหลายรอบก็เถอะ แต่แบบนั้นก็น่ารักดีเหมือนกันไม่ใช่หรอ?
                                </p>
                            </div> 
                            <div v-if="textstory == 20">
                                <p class="text-secondary idfont font-weight-bold">
                                    แต่เล่นกันจนดึกแบบนี้ ตัวเราเองก็ง่วงแล้วด้วย นอนก่อนค่อยว่ากันพรุ่งนี้ละกันนะ...
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
                        <div v-if="textstory == 1 || textstory == 4 || textstory >= 5 || textstory <= 10 || textstory >= 14 || textstory <= 16">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC00.png"
                            />
                        </div>
                        <div v-if="textstory == 3 || textstory >= 17 || textstory >= 19">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC01.png"
                            />
                        </div>
                        <div v-if="textstory == 0 || textstory == 2 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC05.png"
                            />
                        </div>
                        <div v-if="textstory >= 11 || textstory <= 13">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC06.png"
                            />
                        </div>
                    </v-img>
                </v-col>
              </v-row>
              <v-row class="justify-center" v-if="this.chatstory >= 1">
                <v-col cols="6" class="">
                    <v-img
                            height="200"
                            src="@/assets/other/Commentbox_2.png"
                    >
                    <v-row>
                        <v-col cols="12" class="ml-5 mt-1">
                            <div>
                                <h2>
                                    Chat Comment
                                </h2>
                            </div>  
                        </v-col>
                    </v-row>
                    <v-row class="justify-center mt-n3">
                        <v-col cols="11">

                            <div v-if="this.chatstory >= 1 && this.chatnum > 0 && this.chatnum < 5">
                                <p>
                                    pewpew777  :   ไฮฮฮฮ
                                </p>
                            </div>    
                            <div v-if="this.chatstory >= 1 && this.chatnum > 1 && this.chatnum < 6">
                                <p>
                                    tsisonfire  :   HIIII HIIIIIIIIIIIIIIIII
                                </p>
                            </div>    
                            <div v-if="this.chatstory >= 1 && this.chatnum > 2 && this.chatnum < 7">
                                <p>
                                    unchidaaaaaa  :   เล่นกับใครอาาา

                                </p>
                            </div>
                            <div v-if="this.chatstory >= 1 && this.chatnum > 3 && this.chatnum < 8">
                                <p>
                                    ringo__  :   มาแล้วๆๆๆ
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 1 && this.chatnum > 4 && this.chatnum < 9">
                                <p>
                                    salaryman  :   โอ้ยตื่นเต้นมาก
                                </p>
                            </div>  
                            <div v-if="this.chatstory >= 1 && this.chatnum > 5 && this.chatnum < 10">
                                <p>
                                    kusogaki1234  :   ผู้ชาย ?????
                                </p>
                            </div>                        
                            <div v-if="this.chatstory >= 2 && this.chatnum > 6 && this.chatnum < 11">
                                <p>
                                    หมึกผัดไข่เค็ม  :   มีแพลนจะสตรีมงาโวแล้นมั้ยคับ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 2 && this.chatnum > 7 && this.chatnum < 12">
                                <p>
                                    น้ำปลาหวาน  :   น่ารักมากๆ
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 2 && this.chatnum > 8 && this.chatnum < 13">
                                <p>
                                    หมึกผัดไข่เค็ม  :   ซัมติงป่าวเตง😮 
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 3 && this.chatnum > 9 && this.chatnum < 14">
                                <p>
                                    มะง่วง  :   ????? อีกฝ่ายเป็นผู้ชายหรอ?
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 3 && this.chatnum > 10 && this.chatnum < 15">
                                <p>
                                    babyblue  :   น่ารักจัง 55555
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 3 && this.chatnum > 11 && this.chatnum < 16">
                                <p>
                                    babyblue  :   สองคนนี้เป็นอะไรกันรึเปล่า 👀
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 3 && this.chatnum > 12 && this.chatnum < 17">
                                <p>
                                    ringo__  :   อีกคนหล่อมากกกกก
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 4 && this.chatnum > 13 && this.chatnum < 18">
                                <p>
                                    ต้นหอมย่าง  :   ผมมาแล้ว😁
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 4 && this.chatnum > 14 && this.chatnum < 19">
                                <p>
                                    ต้นหอมย่าง  :   อยากเห็นคาสุจังกรี๊ดจัง
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 4 && this.chatnum > 15 && this.chatnum < 20">
                                <p>
                                    konkon888  :   น่ากลัวจัง
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 5 && this.chatnum > 16 && this.chatnum < 21">
                                <p>
                                    @user-gk12  :   คอลแลปปุ๊บก็เล่นกับผู้ชายเลยหรอ555555
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 5 && this.chatnum > 17 && this.chatnum < 22">
                                <p>
                                    JellyBear  :   เกมบรรยากาศน่ากลัวมาก
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 6 && this.chatnum > 18 && this.chatnum < 23">
                                <p>
                                    JellyBear  :   อย่าเข้าไปๆๆ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 6 && this.chatnum > 19 && this.chatnum < 24">
                                <p>
                                    anony  :   รีบๆเดินเข้าไปสิ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 6 && this.chatnum > 20 && this.chatnum < 25">
                                <p>
                                    tongkatsulover  :   เข้าเลยๆๆ
                                </p>
                            </div>
                            <div v-if="this.chatstory >= 6 && this.chatnum > 21 && this.chatnum < 26">
                                <p>
                                    unchidaaaaaa  :   อยากรู้ก็เข้าไปดูสิ
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 6 && this.chatnum > 22 && this.chatnum < 27">
                                <p>
                                    puropuchi  :   เข้าไปเลย
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 6 && this.chatnum > 23 && this.chatnum < 28">
                                <p>
                                    tongkatsulover  :   อยากรู้อะ เข้าไปหน่อยยยย
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 7 && this.chatnum > 24 && this.chatnum < 29">
                                <p>
                                    unchidaaaaaa  :   โอ้โหจั๊มสแกร์ TT
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 7 && this.chatnum > 25 && this.chatnum < 30">
                                <p>
                                    @user-gk12  :   ตกใจอะไรขนาดนั้น
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 7 && this.chatnum > 26 && this.chatnum < 31">
                                <p>
                                    ringo__  :   น่ากลัวเว่อ
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 8 && this.chatnum > 27 && this.chatnum < 32">
                                <p>
                                    tsisonfire  :   5555555555
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 8 && this.chatnum > 28 && this.chatnum < 33">
                                <p>
                                    tsisonfire  :   กรี๊ดเสียงหลงเลย5555555
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 9 && this.chatnum > 29 && this.chatnum < 34">
                                <p>
                                    babyblue  :   น่ารักกันมากเลยฮิ้วววววว
                                </p>
                            </div> 
                            <div v-if="this.chatstory >= 9 && this.chatnum > 30 && this.chatnum < 35">
                                <p>
                                    ringo__  :   สองคนนี้อยู่ด้วยกันแล้วน่ารักอะ ฮื้อๆๆๆ
                                </p>
                            </div> 
                        </v-col>
                    </v-row>
                    <v-row class="justify-end" align-self="end">
                        <v-btn
                            class="ml-12"
                            variant="text"
                            icon="mdi-near-me"
                            color="primary"
                            size="x-large"
                            @click = "story()"
                        >
                        </v-btn>
                        <v-btn
                            class="ml-n5 mr-5"
                            variant="text"
                            icon="mdi-emoticon-happy-outline"
                            color="primary"
                            size="x-large"
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
                    <div v-if="textstory == 1 || textstory == 4 || textstory >= 5 || textstory <= 10 || textstory >= 14 || textstory <= 16">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC00.png"
                            />
                        </div>
                        <div v-if="textstory == 3 || textstory >= 17 || textstory >= 19">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC01.png"
                            />
                        </div>
                        <div v-if="textstory == 0 || textstory == 2 ">
                            <v-img
                                height="200"
                                src="@/assets/mc/MC05.png"
                            />
                        </div>
                        <div v-if="textstory >= 11 || textstory <= 13">
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
    <compo :mc_name="mcname" v-if="componum == 1" />
    </div>
    </template>
    
    <script>
    import { useRouter } from 'vue-router';
    import compo from '@/components/Chapter4compo.vue'
    export default {
        name : "Chapter3compo",
        props: { mc_name: String },
        components:{
          compo
        },
        data() {
            return {
                textstory : 0,
                post : 0,
                router : useRouter(),
                chatnum: 0,
                chatstory : 0,
                postbutton: false,
                componum: 0,
                mcname : "",
                folders: [
                {
                    subtitle: 'น่ารักจนอยากกินเข้าไปเลย',
                    title: 'น้ำปลาหวาน',
                    color: 'pink-accent-1',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'ขอบคุณที่โลกเหวี่ยงเธอให้มาพบกับเรา',
                    title: 'JellyBear',
                    color: 'deep-purple-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'ถ้าวันนี้คนที่มาเล่นกับเธอเป็นผู้ชายล่ะก็ จะไม่ยอมแน่ๆ',
                    title: 'kusogaki1234',
                    color: 'indigo-darken-1',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'ดูนี่สิ หน้าจริงของ #kawaiistreamer ล่ะ',
                    title: 'puropuchi',
                    color: 'blue-lighten-2',
                    like: 0,
                    report : 'primary'
                },
                {
                    subtitle: 'อยากดูแต่ว่าวันนี้ติดงานน่ะ ขอโทษนะ！',
                    title: 'salaryman',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
    
            ],
                folder1: {
                    subtitle: 'คอแลปวันนี้ต้องสนุกแน่ๆ รอไม่ไหวแล้ว !',
                    title: 'MC',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
                folder2: {
                    subtitle: 'คอแลปหรอ กับใครก็ได้แหละแค่ขอได้เห็นเธอก็พอ',
                    title: 'MC',
                    color: 'cyan-lighten-1',
                    like: 0,
                    report : 'primary'
                },
                folder3: {
                    subtitle: 'วันนี้มีคอแลปหรอ จะเป็นใครนะ ไม่อยากให้เป็นผู้ชายเลย',
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
                console.log(this.textstory)
                if(this.textstory == 21){
                    this.mcname = this.mc_name
                    this.componum = 1
                }
                if(this.textstory == 4){
                    //1
                    this.chatstory = this.chatstory + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.textstory == 2){
                    //2
                    this.postbutton = true
                    
                }
                else if(this.textstory == 5){
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
                else if(this.textstory == 19){
                    //8
                    this.chatstory = 0
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
            chattext() {
                console.log("1");
                if(this.chatstory == 1 && this.chatnum <= 5){
                    
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 1000);
                }
                else if(this.chatstory == 2 && this.chatnum <= 8){
                    
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.chatstory == 3 && this.chatnum <= 12){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
                else if(this.chatstory == 4 && this.chatnum <= 15){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
                else if(this.chatstory == 5 && this.chatnum <= 18){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.chatstory == 6 && this.chatnum <= 23){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 500);
                }
                else if(this.chatstory == 7 && this.chatnum <= 26){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
                else if(this.chatstory == 8 && this.chatnum <= 28){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
                else if(this.chatstory == 9 && this.chatnum <= 30){
                    this.chatnum = this.chatnum + 1
                    setTimeout(() => this.sendtext(), 3000);
                }
            },
            sendtext() {
            
                if(this.chatstory >= 1){
                    setTimeout(() => this.chattext(), 500);
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