<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
            <NuxtLink to="/">Home page</NuxtLink>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item>
                <NuxtLink to="/">Home page</NuxtLink>
            </b-nav-item>
            <b-nav-item>
                <NuxtLink to="/contact-us">Contact Us</NuxtLink>
            </b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

</script>