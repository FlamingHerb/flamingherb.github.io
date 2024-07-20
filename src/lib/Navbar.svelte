<script>
    import { page } from '$app/stores';
</script>
<div class="pages-section">
    
    <!-- Home Link only appears anywhere that isn't the landing page. -->
    {#if $page.url.pathname != "/"}
        <a class="{$page.url.pathname === '/' ? 'current' : ''}" href="/">Home</a>    
    {/if}
    
    <a class="{$page.url.pathname === '/about' ? 'current' : ''}" href="/about">About</a>
    <a class="{$page.url.pathname === '/projects' ? 'current' : ''}" href="/projects">Projects</a>
    <a class="{$page.url.pathname === '/contact' ? 'current' : ''}" href="/contact">Contact</a>
</div>

<style lang="scss">
    .current{
        text-decoration: underline;
        color: #ff9600;
    }
   .pages-section {
        margin-top: 2.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    } 
</style>