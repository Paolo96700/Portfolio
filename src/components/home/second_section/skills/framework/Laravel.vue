<script>
export default {

}
</script>

<template>
        <div class="flex flex-col items-center">
            <img src="../../../../../img/img_skill/framework/Laravel.png" alt="" style="width: 100px">

            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover9" data-dropdown-trigger="hover" class="text-white bg-blue-900 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
                Laravel
            </button>

            <!-- Dropdown menu -->
            <div id="dropdownHover9" class="z-10 hidden bg-blue-900 divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-100 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <strong class="text-red-500">Laravel</strong> è un framework open source di tipo MVC scritto in PHP per lo sviluppo di applicazioni web, creato nel 2011 da Taylor Otwell come derivazione di Symfony.
                        Alcune delle caratteristiche sono: un sistema di gestione dei pacchetti modulare con un gestore delle dipendenze dedicato, differenti modalità di accesso ai database relazionali, strumenti che aiutano la distribuzione e la manutenzione dell'applicazione, e la sua disposizione al syntactic sugar.
                    </li>
                </ul>
            </div>
        </div>
   
</template>

<style>

</style>