<script>
export default {

}
</script>

<template>
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"  width="100px" height="100px">
                <path fill="#59666c" d="m29.246 3.766 23.168 40.129-23.18 40.19-23.156-40.19Zm69.508 120.468L75.586 84.105l23.18-40.19 23.156 40.19Zm0 0"/>
                <path fill="#bcae79" d="M75.594 3.766H29.258L52.43 43.898h46.35ZM52.406 124.23H98.75L75.594 84.102H29.219Zm0 0"/>
            </svg>

            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover12" data-dropdown-trigger="hover" class="ml-3 text-white bg-blue-900 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
                Hibernate
            </button>

            <!-- Dropdown menu -->
            <div id="dropdownHover12" class="z-10 hidden bg-blue-900 divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-100 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        In informatica <strong class="text-yellow-300">Hibernate</strong>(talvolta abbreviato in H8) è una piattaforma middleware open source per lo sviluppo di applicazioni Java, attraverso l'appoggio al relativo framework, che fornisce un servizio di <strong class="text-yellow-300">Object-relational mapping (ORM)</strong> ovvero gestisce la persistenza dei dati sul database attraverso la rappresentazione e il mantenimento su database relazionale di un sistema di oggetti Java.

                        Come tale dunque, nell'ambito dello sviluppo di applicazioni web, tale strato software si frappone tra il livello logico di business o di elaborazione e quello di persistenza dei dati sul database (Data Access Layer).
                    </li>
                </ul>
            </div>
        </div>
   
</template>

<style>

</style>