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
        
        <!-- Introduction -->
        <h2 class="intro-holder">Hi, I'm...</h2>
        <h1 class="title-holder">Omi</h1>
        <p class="subtitle-holder"><em>developer, game maker, creative, learner.</em></p>
        
        <!-- Social Media Links -->

        <!-- Important Works -->
        <div class="links-section">
            <a href="/">About</a>
            <a href="/">Projects</a>
            <a href="/">Contact</a>    
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
        color: grey;
    }

    .section {
        display: flex;
        height: 100vh;
        //padding: 14px;
        
        flex-direction: column;
        justify-content: center;
        
        p {
            font-size: 1rem;
        }
    }

    .links-section {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
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
        font-family: "Montserrat";
        font-weight: bold;
        text-align: center;
        margin: 0;

      }

    .intro-holder {
        margin-top: 0px;
        font-family: "Montserrat";
        font-weight: normal;
        text-align: center;
     }


 
     /*
 
     
     @media only screen and (max-width: 976px) {
      .title-holder {

    */

</style>
