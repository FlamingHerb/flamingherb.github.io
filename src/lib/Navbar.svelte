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
    a {
        font-size: 1em;
    }
    .current{
        text-decoration: underline;
        color: #FF9C5E;
    }
   .pages-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 20px;
    } 
</style>