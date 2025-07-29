<script>
    import Navbar from "./Navbar.svelte";
    import taglines from "$lib/taglines.json"

    const d = new Date();
    let year = d.getFullYear();

    const redir = [
        {
            title: "Github",
            link: "https://github.com/FlamingHerb",
            image: "images/icons/github.svg"
        },
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/msbbomisol/",
            image: "images/icons/linkedin.svg"
        },
        {
            title: "Itch.io",
            link: "https://vaccaria.itch.io/",
            image: "images/icons/itchio.svg"
        }
    ];

    const num = Math.floor(Math.random() * (taglines.length))

    let tagline_used = $derived(taglines[num])
</script>

<head>
    <title>Vaccaria's Website</title>
</head>

<div class="flex w-full h-[95vh] flex-col justify-center">
    <div class="mx-auto min-w-[228px] max-w-[320px]  py-[40px] px-[20px] border border-[#ffb232]">
            <!-- Introduction -->
            <p class="text-center text-white text-sm">Hi, I'm...</p>
            <h1 class="text-center my-[5px]">Vaccaria</h1>
            <p class="text-center text-white text-sm italic">dev, game maker, writer, learner.</p>
            
            <!-- Social Media Links -->
            <div class="flex flex-row justify-center gap-x-[28px] mt-[28px] mb-[14px]">
                {#each redir as linker }
                    <a target="_blank" href="{linker.link}">
                        <img 
                            class="w-[32px]" 
                            style="filter: brightness(0) saturate(100%) invert(93%) sepia(80%) saturate(6894%) hue-rotate(314deg) brightness(91%) contrast(88%);"
                            src="{linker.image}" 
                            alt="{linker.title} Redirect">
                    </a>
                {/each}
            </div>
            <!-- Important Works -->
            <Navbar></Navbar>

            <hr class="h-px my-4 border-0 bg-[#ffb232]">

            <!-- Tagline -->
            <p class="text-gray-300 text-xs text-center italic">
                {tagline_used}
            </p>
        </div>
</div>
