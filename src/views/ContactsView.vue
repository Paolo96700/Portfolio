<script>
    //First Section
    import Button_social from "../components/first_section/Button_social.vue";
    import Button_social_two from "../components/first_section/Button_social_two.vue";
    import Button_social_three from "../components/first_section/Button_social_three.vue";
    
    export default{
        components: {
            //First Section
            Button_social, Button_social_two, Button_social_three,
        }  
    }
</script>

<template>
    
        <section class="section first_section"> 
            <h1 class="text-3xl font-bold">Contacts</h1>
        </section>
        <section class="section second_section"> 
            <div class="container m-auto flex justify-center">
                <div class="flex flex-col items-center bg-gray-800  rounded-lg shadow md:flex-row md:max-w-xl p-4">
                    <img class="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../img/img_profile/Paolo.jpeg" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h3 class="text-4xl">Paolo Falco</h3>
                        <h5 class="mb-3 font-normal text-gray-200 dark:text-gray-400"><span class="font-bold">Mail:</span> paolo.falcoapp@gmail.com</h5>
                        <Button_social />
                        <Button_social_two />
                        <Button_social_three />
                    </div>
                </div>
            </div>
            <div class="container m-auto flex justify-center mt-3">
                <div class="flex flex-col items-center bg-gray-800  rounded-lg shadow md:flex-row md:max-w-xl p-4">
                    
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class="mb-3 font-bold text-center text-gray-200 dark:text-gray-400">Se sei interessato a collaborare o vuoi semplicemente scambiare idee, non esitare a contattarmi. Sono sempre disponibile per nuove opportunità e progetti stimolanti. Qui troverai tutti i miei contatti. Sarà un piacere sentirti! </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section first_section"> 
        </section>

    
   
</template>
<style scoped>
    .section{
        background-image: url(./../img/wall_dev_2.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 42px;
    }

    .second_section {
        background-image: url(./../img/wall.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 80px;
        height: 100%
    }

    .sub_sub_container {
        background-image: url(./../img/mini_back.jpg);
        background-size: cover;
        
    }
</style>
