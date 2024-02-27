<script>
export default {

}
</script>

<template>
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="100px" height="100px"><path fill="#8bc34a" d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"/><path fill="#fff" d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"/></svg>

            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover10" data-dropdown-trigger="hover" class="text-white bg-blue-900 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
                Spring
            </button>

            <!-- Dropdown menu -->
            <div id="dropdownHover10" class="z-10 hidden bg-blue-900 divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-100 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        In informatica <strong class="text-green-300">Spring</strong> è un framework open source per lo sviluppo di applicazioni su piattaforma Java. A questo framework sono associati tanti altri progetti, che hanno nomi composti come <strong class="text-green-300">Spring Boot</strong>, Spring Data, Spring Batch, etc. Questi progetti sono stati ideati per fornire funzionalità aggiuntive al framework.
                    </li>
                </ul>
            </div>
        </div>
   
</template>

<style>

</style>