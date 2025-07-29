<script>
    import ProjectItem from "./ProjectItem.svelte";
    import projects from "$lib/projects.json";
</script>

<head>
    <title>Works | Vaccaria's Website</title>
</head>

<div class="w-full column-direction" style="margin-bottom: 4rem;">
    <h1 class="text-center mt-[10px] mb-[40px]">
        Projects
    </h1>
    
    <h2 class="text-center mb-[20px]">
        Games
    </h2>
    
    <div class="max-w-[768px] flex flex-row flex-wrap items-stretch justify-center m-auto gap-x-[20px] gap-y-[20px]">
        {#each projects as project }
            {#if project.show && project.type == "game"}
                <ProjectItem
                    name={project.title}
                    subtitle={project.subtitle}
                    date={project.date_of_year}
                    link={project.link}
                    image={project.image}
                />
            {/if}
        {/each}
    </div>
    
    <h2 class="text-center mt-[40px] mb-[20px]">
        Works
    </h2>
    
    <div class="max-w-[768px] flex flex-row flex-wrap items-stretch justify-center m-auto gap-x-[20px] gap-y-[20px]">
        {#each projects as project }
            {#if project.show && project.type == "project"}
                <ProjectItem
                    name={project.title}
                    subtitle={project.subtitle}
                    date={project.date_of_year}
                    link={project.link}
                    image={project.image}
                />
            {/if}
        {/each}
    </div>


</div>
