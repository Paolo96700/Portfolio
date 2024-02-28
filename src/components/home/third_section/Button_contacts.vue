<template>
    <a href="/contacts">
        <button class="cti">
            <div class="CTI">
                Contatti
            </div>
        </button>
    </a>
   
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    
    .cti {
        background-color: #6019bd;
        padding: 80px 70px;
        border: 5px solid black;
        border-radius: 0.6em;
        transition: 0.2s;
        margin-bottom: 40px;
    }

    .cti:hover {
        background-color: transparent;
        border: 5px solid #6019bd;
        box-shadow: 0px 0px 27px 5px #6019bd;
    }

    .CTI {
        color: #fff;
        font-family: 'Courier New', Courier, monospace;
        font-size: 35px;
        font-weight: bold;
        overflow: hidden;
        border-right: 4px solid transparent;
        white-space: nowrap;
        margin: 0 auto;
    }

    .cti:hover .CTI {
        border-right: 4px solid #6019bd;
        animation: letters 0.75s steps(22, end),
        cursor .4s step-end infinite;
    }

    @keyframes letters {
        from {
            width: 0;
        }

        to {
            width: 100%;
        }
    }

    @keyframes cursor {
        from {
            border-color: transparent
        }

        50% {
            border-color: #6019bd
        }
    }

    @media (max-width: 380px) {
        .cti {
            background-color: #6019bd;
            padding: 20px 20px;
            border: 5px solid black;
            border-radius: 0.6em;
            transition: 0.2s;
        }
    }
</style>