<template>
    <a href="https://www.instagram.com/paolo.falco96/" target="_blank">
        <button class="button mt-2 lg:mt-0">
            Instagram
        </button>
    </a>
    
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

    .button {
        width: fit-content;
        display: flex;
        padding: 0.7em 3.8em;
        gap: 0.4rem;
        border: none;
        font-weight: bold;
        border-radius: 30px;
        cursor: pointer;
        text-shadow: 2px 2px 3px rgb(136 0 136 / 50%);
        background: linear-gradient(
            15deg,
            #880088,
            #aa2068,
            #cc3f47,
            #de6f3d,
            #f09f33,
            #de6f3d,
            #cc3f47,
            #aa2068,
            #880088
            )
            no-repeat;
        background-size: 300%;
        background-position: left center;
        transition: background 0.3s ease;
        color: #fff;
    }

    .button:hover {
        background-size: 320%;
        background-position: right center;
    }

    .button:hover svg {
        fill: #fff;
    }

    .button svg {
        width: 23px;
        fill: #f09f33;
        transition: 0.3s ease;
    }

</style>