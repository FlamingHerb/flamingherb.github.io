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

</script>

<head>
    <title>About Me | Vaccaria's Website</title>
</head>

<div class="container wrapper column-direction" style="margin-bottom: 4rem;">
    <div class="section forced-top">
        <figure id="authorimg">
            <img src="{authorimg}" alt="A witch profile." onmouseover={handleMouseOver} onfocus={handleMouseOver} onblur={handleMouseOut} onmouseout={handleMouseOut}>
            <figcaption>{caption}</figcaption>
        </figure>
        <div class="other-block">
            <h1>Michael Omisol</h1>
            <p class="subtitle">Game Maker, Software/Web Developer, Creative Writer</p>
        </div>
    </div>
    <div class="section">
        <p>
            Hello, I'm Michael Omisol (but you can either call me Omi or Vaccaria). My fascination with games has led me, first, to creating games at a young age. Sooner enough, that drive for creating led me to be a hobbyist writer as well as my delving into the realm of software development and Computer Science.
        </p>
        <p>
            I still am active when it comes to making any creative endeavours, though they are more in the backpedal these days in order to focus more in my career.
        </p>
        <p>
            If you <strong>want to work with me or want to hire me</strong>, <a href="/contact">please contact me</a> through the following details. 
        </p>
    </div>

    <!-- Skills Section  -->
    <div class="section">
        <h1 style="margin-bottom: 0;">Skills</h1>
        <div class="flex-container">
            <div class="skills-tab">
                <h2>Languages</h2>
                <div class="images-part">
                    <img alt="C" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                    <img alt="C++" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                    <img alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <img alt="Ruby" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" />
                    <img alt="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />  
                    <img alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    <img alt="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                    <img alt="JS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img alt="TS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <img alt="PHP" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                </div>
                
            </div>  
            <div class="skills-tab">
                <h2>Libraries and Frameworks</h2>
                <div class="images-part">
                    <img alt="Svelte" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" />
                    <img alt="Sass" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                    <img alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                </div>
            </div>
            <div class="skills-tab">
                <h2>Technologies and Engines</h2>
                <div class="images-part">
                    <img alt="Godot" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" />
                    <img alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    <img alt="GitLab" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" />
                    <img alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                    <img alt="Bitbucket" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" />
                    <img alt="NodeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                    <img alt="pnpm" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg" />
                </div>
            </div>
        </div>
    </div>


</div>

<style lang="scss">


    p {
        text-align: justify;
    }

    .subtitle {
        font-style: italic;
        text-align: center;
    }

    .other-block {
        margin: 3em 0 1.2em 1.2em;
    }

    #authorimg {
        float: right;
        margin: 0 1.2em 1.2em 1.2em;

        img {
            text-align: center;
        }
        figcaption {
            margin:auto;
            text-align: center;
            font-size: 0.6rem;
        }
    }

    .flex-container {
        display: flex;
        flex-wrap: wrap;
        gap: 50px; 
    }

    /*
        https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_lines
    */
    .skills-tab {
       
        flex: 1 1 0%;
        min-width: 220px;
        max-width: 250px;
        margin: auto;
        margin-top: 0;
        justify-content: center;
        
        h2 {
            height: 2rem;
            font-size: 1rem;
            text-align: center;
            margin-bottom: 1rem;
        }



        .images-part {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(100px, auto);
            
            align-items: center;
            justify-items: center;

            img {
                display: inline-grid;
                width: 50px;
                filter: drop-shadow(0px 0px 2px black);
            }
        }
    }


    .forced-top {
        margin-top: 20px;

        h1 {
            margin-bottom: -0.5em;
        }
    }

    .section {
        width: 100%;
        p {
            font-size: 0.9rem;
        }
        h1 {
            text-align: center;
        }
    }

    @media only screen and (max-width: 537px){
        #authorimg {
            float: none;
            margin: 0 0 -2em 0;
            text-align: center;
        }
        .other-block {
            margin: auto;
            margin-top: 3em;
        }
    }
</style>
