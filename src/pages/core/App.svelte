<script>
    import Router from "svelte-spa-router";
    import routes from "../../routes";
</script>

<style type="text/scss">
    @import "../../assets/sass/app.scss";
</style>

<main class="bg-gray-900">
    <Router {routes} />
</main>
