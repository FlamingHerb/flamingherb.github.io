<script>
    import { page } from '$app/stores';
</script>

<div class="flex flex-row justify-center gap-x-[20px] max-w-[500px] border border-[#ffb232] px-[40px] py-[20px] mx-auto text-[#ffb232] font-bold">
    <!-- Home Link only appears anywhere that isn't the landing page. -->
    {#if $page.url.pathname != "/"}
        <a class="{$page.url.pathname === '/' ? 'text-white underline' : ''}" href="/">Home</a>    
    {/if}
    
    <a class="{$page.url.pathname === '/about' ? 'text-white underline' : ''}" href="/about">About</a>
    <a class="{$page.url.pathname === '/projects' ? 'text-white underline' : ''}" href="/projects">Projects</a>
    <a class="{$page.url.pathname === '/contact' ? 'text-white underline' : ''}" href="/contact">Contact</a>
</div>

