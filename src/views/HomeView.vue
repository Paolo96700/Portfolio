<script>
    //Second Section
    import HTML5 from "../components/home/second_section/skills/languages/HTML5.vue";
    import CSS from "../components/home/second_section/skills/languages/CSS.vue";
    import JS from "../components/home/second_section/skills/languages/JS.vue";
    import PHP from "../components/home/second_section/skills/languages/PHP.vue";
    import Java from '../components/home/second_section/skills/languages/Java.vue';
    import Sass from '../components/home/second_section/skills/languages/Sass.vue';


    import Vue from "../components/home/second_section/skills/framework/Vue.vue";
    import Laravel from '../components/home/second_section/skills/framework/Laravel.vue';
    import Spring from "../components/home/second_section/skills/framework/Spring.vue";
    import Spring_boot from '../components/home/second_section/skills/framework/Spring_boot.vue';
    import Hibernate from '../components/home/second_section/skills/framework/Hibernate.vue';
    import Maven from '../components/home/second_section/skills/framework/Maven.vue';
    import Tailwind from '../components/home/second_section/skills/framework/Tailwind.vue';

    import Bootstrap from '../components/home/second_section/skills/libraries/Bootstrap.vue';

    import MySQL from '../components/home/second_section/skills/database/MySQL.vue';

    import PhpMyAdmin from '../components/home/second_section/skills/applications/PhpMyAdmin.vue';
    import DBeaver from '../components/home/second_section/skills/applications/DBeaver.vue';
    import Postman from '../components/home/second_section/skills/applications/Postman.vue';

    import Email from '../components/home/second_section/digital_skills/Email.vue';
    import Social from '../components/home/second_section/digital_skills/Social.vue';
    import Web from '../components/home/second_section/digital_skills/Web.vue';
    import Git from '../components/home/second_section/digital_skills/Git.vue';
    import Github from '../components/home/second_section/digital_skills/Github.vue';
    import Visual from '../components/home/second_section/digital_skills/Visual.vue';
    import Intellij from '../components/home/second_section/digital_skills/Intellij.vue';

    //Third Section
    
    import Button_project from '@/components/home/third_section/Button_project.vue';
    import Button_contacts from '@/components/home/third_section/Button_contacts.vue';

    export default{
        components: {
            

            //Second Section
            HTML5, CSS, JS, PHP, Java, Sass, 
            Vue, Laravel, Spring, Spring_boot, Hibernate, Maven, Tailwind,
            Bootstrap,
            MySQL,
            PhpMyAdmin, DBeaver, Postman,
            Email, Social, Web, Git, Github, Visual, Intellij,

            //Third Section
            Button_project, Button_contacts
        },
        mounted() {
            this.$nextTick(() => {
            AOS.init();
            });
        }
 
    }
</script>

<template>
    <section class="section first_section p-4 lg:p-24"> 
        <div 
        class="container m-auto sm:flex sm:flex-col sm:justify-center lg:flex lg:flex-row lg:py-24 lg:justify-between" 
        >
            <div 
            class="flex flex-col items-center" 
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
            >
                <img src="../img/img_profile/Paolo.jpeg" alt="" class="w-96 rounded-full mb-8">
                <h3 class="text-4xl mb-3 lg:mb-0">Paolo Falco</h3>
                <h5 class="text-2xl font-bold text-center mb-3 lg:mb-0">Jr. Full Stack Web Developer</h5>
                
            </div>
            <div 
            class="lg:w-80 flex items-center" 
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
            >
                <p class="text-center lg:font-bold lg:text-left">
                    Ciao! Benvenuto nel mio Portfolio! Qui troverai tutte le informazioni che desideri per quanto riguarda i  miei contatti o i miei progetti! Se hai domande non esitare a contattarmi! Questo è un altro piccolo passo nel vasto universo del web development.
                </p>
            </div>
        </div>
    </section>
    
    
    <section class="second_section">

        <!-- Skills -->
        <div class="container flex flex-col m-auto justify-center items-center" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
        >
            
            <h5 class="text-3xl font-bold text-gray-100 mb-14">Skills</h5>

            <div class="sub_container flex flex-wrap gap-6 justify-center">
                <!-- Linguaggi -->
                <div  
                class="sub_sub_container flex flex-col justify-center items-center p-6 bg-gray-900 rounded-lg shadow hover:bg-gray-800 dark:bg-gray-800      dark:border-gray-800 dark:hover:bg-gray-800" 
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
                >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Linguaggi</h5>  
                    <div class="flex flex-wrap justify-center">
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300" 
                        data-aos="fade-left" data-aos-duration="1200" data-aos-delay="1000"
                        >
                            <HTML5 />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300" 
                        data-aos="fade-left" data-aos-duration="1100" data-aos-delay="900"
                        >
                            <CSS />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300" 
                        data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800"
                        >
                            <JS />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300" 
                        data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800"
                        >
                            <PHP />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300" 
                        data-aos="fade-right" data-aos-duration="1100" data-aos-delay="900"
                        >
                            <Java />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300" 
                        data-aos="fade-right" data-aos-duration="1200" data-aos-delay="1000"
                        >
                            <Sass />
                        </div> 
                    </div>
                </div>

                <!-- Framework -->
                <div  
                class="sub_sub_container flex flex-col justify-center items-center p-6 bg-gray-900 rounded-lg shadow hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
                >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Framework</h5>   
                    <div class="flex flex-wrap justify-center">
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-left" data-aos-duration="1100" data-aos-delay="1000"
                        >
                            <Vue />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900"
                        >
                            <Laravel />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-left" data-aos-duration="900" data-aos-delay="800"
                        >
                            <Spring />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-up" data-aos-duration="900" data-aos-delay="800"
                        >
                            <Spring_boot />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-right" data-aos-duration="900" data-aos-delay="800"
                        >
                            <Hibernate />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900"
                        >
                            <Maven />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-right" data-aos-duration="1100" data-aos-delay="1000"
                        >
                            <Tailwind />
                        </div>
                    </div>
                </div>

                <!-- Librerie -->
                <div 
                class="sub_sub_container flex flex-col justify-center items-center p-6 bg-gray-900 rounded-lg shadow hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
                >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Librerie</h5>   
                    <div class="flex flex-wrap justify-center">
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-up" data-aos-duration="900" data-aos-delay="800"
                        >
                            <Bootstrap />
                        </div>
                    </div>
                </div>

                <!-- Database -->
                <div 
                class="sub_sub_container flex flex-col justify-center items-center p-6 bg-gray-900 rounded-lg shadow hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
                >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Database</h5>     
                    <div class="flex flex-wrap justify-center">
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-up" data-aos-duration="900" data-aos-delay="800"
                        >
                            <MySQL /> 
                        </div>
                    </div>
                </div>

                <!-- Applicazioni Web -->
                <div 
                class="sub_sub_container flex flex-col justify-center items-center p-6 bg-gray-900 rounded-lg shadow hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
                >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Applicazioni Web</h5>   
                    <div class="flex flex-wrap justify-center">
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-up" data-aos-duration="900" data-aos-delay="800"
                        >
                            <PhpMyAdmin /> 
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-up" data-aos-duration="900" data-aos-delay="800"
                        >
                            <DBeaver />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-up" data-aos-duration="900" data-aos-delay="800"
                        >
                            <Postman />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Competenze Digitali -->
        <div class="container flex flex-col m-auto justify-center items-center" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
        >
            <h5 class="text-4xl my-12 font-bold">Competenze Digitali</h5>
            <div class="sub_container flex flex-wrap gap-6 justify-center"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
            >
                <div  class="sub_sub_container flex flex-col justify-center items-center p-6 bg-gray-900 rounded-lg shadow hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> 
                    <div class="flex flex-wrap justify-center">
                        <div 
                        class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-left" data-aos-duration="1100" data-aos-delay="1000"
                        >
                            <Email />
                        </div>
                        <div 
                        class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900"
                        >
                            <Social />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-left" data-aos-duration="900" data-aos-delay="800"
                        >
                            <Web />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-up" data-aos-duration="900" data-aos-delay="800"
                        >
                            <Git />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-right" data-aos-duration="900" data-aos-delay="800"
                        >
                            <Github />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900"
                        >
                            <Visual />
                        </div>
                        <div class="dynamic-element hover:scale-105 cursor-pointer rounded transition-transform duration-300"
                        data-aos="fade-right" data-aos-duration="1100" data-aos-delay="1000"
                        >
                            <Intellij />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section third_section">
        <div class="container m-auto flex flex-col md:flex-row lg:flex-row justify-center gap-2 lg:gap-12">
            <div class="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h5 class="text-2xl lg:text-3xl my-12 font-bold">Ecco i miei progetti!</h5>
                <RouterLink to="/projects">
                    <Button_project />
                </RouterLink>
            </div>
            <div class="flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h5 class="text-2xl lg:text-3xl my-12 font-bold">Ecco i miei contatti!</h5>
                <RouterLink to="/contacts">
                    <Button_contacts />
                </RouterLink>
                
            </div>
        </div>
    </section>
   
</template>
<style scoped>
    .section {
        background-image: url(./../img/wall_dev_2.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 150px
    }

    .second_section {
        background-image: url(./../img/wall.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 80px
    }

    .sub_sub_container {
        background-image: url(./../img/mini_back.jpg);
        background-size: cover;
    }

    @media (max-width:450px){
        .section {
            padding: 50px;
        }
    }

</style>
