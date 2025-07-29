<script>
    import Navbar from './Navbar.svelte';
    import { page } from '$app/state';
</script>

{#if (page.url.pathname != "/")}
  <div id="navbar-comp" class="sticky top-0 w-full m-auto pt-5 pb-10 px-0 z-20">
    <Navbar></Navbar>
  </div>
{/if}

<style lang="postcss">
  /* Local Styles */
  @reference "tailwindcss";
  #navbar-comp {
    background: linear-gradient(0deg, rgba(0,155,119,0) 0%, rgba(0,155,119,1) 30%, rgba(0,155,119,1) 100%);
  }
</style>
