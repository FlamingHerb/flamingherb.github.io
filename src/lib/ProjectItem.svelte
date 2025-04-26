<script>
    let {
        name,
        date,
        link,
        image
    } = $props();
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