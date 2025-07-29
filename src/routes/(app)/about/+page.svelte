<script>

    const d = new Date();
    let year = d.getFullYear();
    
    let authorimg = $state("/images/witch.png");
    let caption = $state("If you're wondering, that ain't me.");

    function handleMouseOver() {
		authorimg = '/images/pranked.png';
        caption = "You like kissing boys, don't you?";
	}
	function handleMouseOut() {
		authorimg = '/images/witch.png';
        caption = "If you're wondering, that ain't me.";
	}

    const prog_lang = [
        {
            lang: "C",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
        },
        {
            lang: "C++",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        },
        {
            lang: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
            lang: "Ruby",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
        },
        {
            lang: "HTML5",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
            lang: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
            lang: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        },
        {
            lang: "JS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
            lang: "TS ",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        },
        {
            lang: "PHP ",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
        }
    ];
    const lib_frame = [
        {
            lang: "Svelte",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
        }, 
        {
            lang: "Sass",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
        }, 
        {
            lang: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
        }
    ];
    const tech_eng = [
        {
            lang: "Godot",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg"
        },
        {
            lang: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        },
        {
            lang: "GitLab",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
        },
        {
            lang: "GitHub",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        },
        {
            lang: "Bitbucket",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg"
        },
        {
            lang: "NodeJS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
            lang: "pnpm",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg"
        },
    ]

</script>

<head>
    <title>About Me | Vaccaria's Website</title>
</head>

<div class="w-full mb-[80px] mt-[132px]">
    <div class="w-[300px] md:w-[768px] grid grid-cols-1 md:grid-cols-[30%_70%] gap-y-3 mx-auto items-center mb-[20px]">
        <figure>
            <img 
                src="{authorimg}" 
                alt="A witch profile."
                class="mx-auto w-[200px]"
                onmouseover={handleMouseOver} 
                onfocus={handleMouseOver} 
                onblur={handleMouseOut} 
                onmouseout={handleMouseOut}
            >
            <figcaption class="text-xs text-center text-white font-montserrat">
                {caption}
            </figcaption>
        </figure>
        <div>
            <h1 class="text-center">Michael Omisol</h1>
            <p class="text-center text-white italic">Game Maker, Software/Web Developer, Creative Writer</p>
        </div>
    </div>

    <div class="w-[300px] md:w-[768px] mx-auto text-white text-justify text-sm">
        <p class="mb-2">
            Hello, I'm Michael Omisol (but you can either call me Omi or Vaccaria). My fascination with games has led me, first, to creating games at a young age. Sooner enough, that drive for creating led me to be a hobbyist writer as well as my delving into the realm of software development and Computer Science.
        </p>
        <p class="mb-2">
            I still am active when it comes to making any creative endeavours, though they are more in the backpedal these days in order to focus more in my career.
        </p>
        <p class="mb-2">
            If you <strong>want to work with me or want to hire me</strong>, <a class="text-[#ffb232] font-bold" href="/contact">please contact me</a> through the following details. 
        </p>
    </div>

    <!-- Skills Section  -->
    <div class="w-[300px] md:w-[768px] mx-auto">
        <h1 class="mt-[40px] mb-[20px] text-center">Skills</h1>
        <div class="w-full flex flex-wrap gap-[50px] ">
            <div class="grow shrink basis-0 min-w-[220px] max-w-[250px] mx-auto mb-auto mt-0">
                <h2 class="mb-0 text-center text-xs sm:text-sm">Programming Languages</h2>
                <div class="grid grid-cols-[repeat(4,1fr)] auto-rows-[minmax(100px,auto)] items-center justify-center">
                    {#each prog_lang as item}
                        <img style="filter: drop-shadow(0px 0px 2px black);" class="inline-grid w-[48px]" alt="{item.lang}" src="{item.icon}">
                    {/each}
                </div>
                
            </div>  
            <div class="grow shrink basis-0 min-w-[220px] max-w-[250px] mx-auto mb-auto mt-0">
                <h2 class="mb-0 text-center text-xs sm:text-sm">Libraries and Frameworks</h2>
                <div class="grid grid-cols-[repeat(4,1fr)] auto-rows-[minmax(100px,auto)] items-center justify-center">
                    {#each lib_frame as item}
                        <img style="filter: drop-shadow(0px 0px 2px black);" class="inline-grid w-[48px]" alt="{item.lang}" src="{item.icon}">
                    {/each}
                </div>
            </div>
            <div class="grow shrink basis-0 min-w-[220px] max-w-[250px] mx-auto mb-auto mt-0">
                <h2 class="mb-0 text-center text-xs sm:text-sm">Technologies and Engines</h2>
                <div class="grid grid-cols-[repeat(4,1fr)] auto-rows-[minmax(100px,auto)] items-center justify-center">
                    {#each tech_eng as item}
                        <img style="filter: drop-shadow(0px 0px 2px black);" class="inline-grid w-[48px]" alt="{item.lang}" src="{item.icon}">
                    {/each}
                </div>
            </div>
        </div>
    </div>


</div>
