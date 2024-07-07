<script>
    const d = new Date();
    let year = d.getFullYear();
    let authorimg = "/images/witch.png";
</script>

<head>
    <title>Vaccaria's Website</title>
</head>

<div class="container wrapper rrow-direction">
    <div class="section">
        <div class="border-section">
            <!-- Introduction -->
            <p class="subtitle-holder">Hi, I'm...</p>
            <h1 class="title-holder">Vaccaria</h1>
            <p class="subtitle-holder">dev, game maker, writer, learner.</p>
            
            <!-- Social Media Links -->
            <div class="links-section">
                <a target="_blank" href="https://github.com/FlamingHerb">
                    <img src="images/icons/github.svg" alt="Github Redirect">
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/msbbomisol/">
                    <img src="images/icons/linkedin.svg" alt="LinkedIn Redirect">
                </a>
                <a target="_blank" href="https://vaccaria.itch.io/">
                    <img src="images/icons/itchio.svg" alt="Itch.io Redirect">
                </a>
            </div>

            <!-- Important Works -->
            <div class="pages-section">
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>    
            </div>
        </div>
    </div>

</div>

<style lang="scss">
    #left-side {
        width: 600px;
        justify-content: center;
    }

    #right-side {
        display: flex;
        width: 348px;
        justify-content: center;

    }

    .subtitle-holder {
        font-size: 14px;
        color: grey;
        text-align: center;
    }

    .section {
        display: flex;
        height: 100vh;
        //padding: 14px;
        
        flex-direction: column;
        justify-content: center;
    }

    .border-section {
        padding: 5vh;
        border: 1px solid white;
    }

    .links-section {
        
        margin: 28px 14px;

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        img {
            width: 2rem;
        }

    }

    .pages-section {
        margin-top: 2.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .img-cool {
        margin: auto;
        margin-top: 3em;
        max-width: 75%;
        padding-right: 2em;
    }

    .under-construction {
        font-size: 2rem;
    }
    
    .title-holder {
        font-family: "Wittgenstein";
        font-weight: bold;
        text-align: center;
        margin: 0;

      }

    
    // The weird Hero CSS shit they do that just works.



 
     /*
 
     
     @media only screen and (max-width: 976px) {
      .title-holder {

    */

</style>
