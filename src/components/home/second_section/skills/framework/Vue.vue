<script>
export default {

}
</script>

<template>
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="100px" height="100px"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"/><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"/></svg>

            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover8" data-dropdown-trigger="hover" class="text-white bg-blue-900 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
              Vue
            </button>

            <!-- Dropdown menu -->
            <div id="dropdownHover8" class="z-10 hidden bg-blue-900 divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-100 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <strong class="text-green-300">Vue.js</strong> (comunemente noto come Vue) è un framework JavaScript open source in configurazione <strong class="text-green-300">Model–view–viewmodel</strong> per la creazione di interfacce utente e single-page applications. Vue.js presenta un'architettura adottabile in modo incrementale che si concentra sul rendering dichiarativo e sulla composizione dei componenti. Le funzionalità avanzate richieste per applicazioni complesse come routing, state management e strumenti di compilazione sono offerte tramite librerie e pacchetti di supporto ufficialmente mantenuti.
                    </li>
                </ul>
            </div>
        </div>
   
</template>

<style>

</style>