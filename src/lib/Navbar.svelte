<script>
    import { page } from '$app/stores';

</script>
<div class="pages-section {$page.url.pathname === '/' ? '' : 'non-landing-page'} ">
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
        color: white;
    }
   .pages-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 20px;
    } 
    .non-landing-page {
        max-width: 500px;
        border: 1px solid $border-color;
        padding: 1em 0.5em;
        margin: 0px auto 0px auto;
    }
    @media only screen and (max-width: 540px){
        .non-landing-page {
            margin: 0px 1.2rem 0px 1.2rem;
        }
    }
</style>