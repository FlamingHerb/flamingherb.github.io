<script>
    import Navbar from './Navbar.svelte';
    import { page } from '$app/state';
</script>

{#if (page.url.pathname != "/")}
  <div id="navbar-comp" class="sticky top-0 w-full m-auto pt-5 pb-10 px-0">
    <Navbar></Navbar>
  </div>
{/if}