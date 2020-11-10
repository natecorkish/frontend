<svelte:head>
    <link rel="stylesheet" href="assets/css/app.css">
</svelte:head>

<script>
    import Router from "svelte-spa-router";
    import routes from "../../routes";
</script>


<nav class="p-2 bg-gray-200 flex justify-between">
    <div>LOGO</div>
    <div>LINKS</div>
</nav>

<main>
    <Router {routes} />
</main>
