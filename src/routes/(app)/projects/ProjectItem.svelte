<script>
    let {
        name,
        subtitle,
        date,
        link,
        image
    } = $props();

</script>

<figure class="min-w-[220px] max-w-[220px] flex-1 text-white">
    <a target="_blank" href="{link}">
        <img class="w-full" src="./images/works_poster/{image}" alt="{name} Poster">
    </a>
    <figcaption class="text-center mt-[5px]">
        <strong>
            {name}
        </strong>
        <br/>
        {#if subtitle != ""}
        <small>
            <em>
                ({subtitle})
            </em>
        </small>
        <br/>
        {/if}
        
        <span>({date})</span>
    </figcaption>
</figure>