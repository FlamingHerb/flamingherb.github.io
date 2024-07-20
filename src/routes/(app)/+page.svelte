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
        <div class="border-section sharp-fold">
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
                <a href="/">Contact</a>    
            </div>
        </div>
    </div>

</div>

<style lang="scss">

    $base-color: #018060;
    $border-color: #DCBB57;

    .subtitle-holder {
        font-size: 14px;
        color: white;
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
        position: relative;
        width: 228px;
        height: 249px;
        padding: 37px;
        border: 1px solid $border-color;
        
        
    }
    

    /* 60-degree folded corner */
    // https://codepen.io/yowlonglee/pen/eQZoWv?editors=1100

    // https://www.steckinsights.com/shorten-length-border-bottom-pure-css/


    

    .sharp-fold {
        position: relative;
        background: $base-color;
    
        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) no-repeat 100% 0;
            width: 1.73em;
            height: 3em;
            transform: translateY(-1.3em) rotate(-30deg);
            transform-origin: bottom right;
            border-bottom-left-radius: inherit;
            box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15);

            border-bottom: 1px solid $border-color;
            border-left: 1px solid $border-color;
        }

        &:after {
            content: '';
            transform: translateX(1.4em) translateY(-3.9em) rotate(-61deg);
            transform-origin: bottom right;
            position: absolute;
            top: 0;
            right: 0;
            background: $base-color;
            width: 2em;
            height: 4em;
        }
    }

    .links-section {
        
        margin: 28px 14px;

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        img {
            width: 2rem;
            filter: brightness(0) saturate(100%) invert(93%) sepia(80%) saturate(6894%) hue-rotate(314deg) brightness(91%) contrast(88%);
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
        color: #DCBB57;

        margin: 0;

    }

    
    // The weird Hero CSS shit they do that just works.

    


 
     /*
 
     
     @media only screen and (max-width: 976px) {
      .title-holder {

    */

</style>
