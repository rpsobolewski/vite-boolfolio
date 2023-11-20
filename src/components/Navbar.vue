<script >

export default {
    name: 'Navbar',



}

</script>

<template>
    <nav id="navbar" class="nav justify-content-center  w-100 shadow">

        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About Us</router-link>
        <router-link class="nav-link" to="/contacts">Contacts</router-link>


    </nav>
</template>

<style lang="scss" scoped></style>