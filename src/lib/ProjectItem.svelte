<script>
    export let name;
    export let date;
    export let link;
    export let image;
</script>

<figure>
    <a target="_blank" href="{link}">
        <img class="poster" src="images/works_poster/{image}.png" alt="{name} Poster">
    </a>
    <figcaption>
        <strong>{name}</strong><br/>
        <span>({date})</span>
    </figcaption>
</figure>