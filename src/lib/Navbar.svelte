<script>
    import { page } from '$app/stores';
</script>
<div class="nav">
    <a class="{$page.url.pathname === '/' ? 'current' : ''}" href="/">Home</a>
    <a class="{$page.url.pathname === '/about' ? 'current' : ''}" href="/about">About</a>
    <a class="{$page.url.pathname === '/projects' ? 'current' : ''}" href="/projects">Projects</a>
    <a class="{$page.url.pathname === '/contact' ? 'current' : ''}" href="/contact">Contact</a>
</div>

<style lang="scss">
    .current{
        text-decoration: underline;
        color: #ff9600;
    }
</style>