
<head>
    <title>Works | Vaccaria's Website</title>
</head>

<div class="container column-direction" style="margin-bottom: 4rem;">
    <!-- <h1 class="title-holder">Projects</h1> -->
    
    <h2>Games</h2>
    
    <div class="mini-container row-direction">
        <!-- 
        <figure>
            <img class="poster" src="images/works_poster/uaoatw.png" alt="Useless Apologies of a Troublesome Witch 2 Poster">
            <figcaption>
              <strong>-repent loci- useless apologies of a troublesome witch 2</strong><br />
              <span>(TBD)</span>
            </figcaption>
        </figure>
        <figure>
            <img class="poster" src="images/works_poster/pu.png" alt="Sweet Evil Fantasy Poster">
            <figcaption>
              <strong>Sweet Evil Fantasy</strong><br />
              <span>(WIP)</span>
            </figcaption>
        </figure> 
        -->
        <figure>
            <img class="poster" src="images/works_poster/pv.png" alt="Project Privacy Poster">
            <figcaption>
              <strong>Project Privacy</strong><br />
              <span>(2024)</span>
            </figcaption>
        </figure>
         <figure>
            <img class="poster" src="images/works_poster/pu.png" alt="Project Unity Poster">
            <figcaption>
              <strong>Project Unity</strong><br />
              <span>(2024)</span>
            </figcaption>
        </figure>
        <figure>
            <img class="poster" src="images/works_poster/uaoatw.png" alt="Useless Apologies of a Troublesome Witch Poster">
            <figcaption>
              <strong>-repent loci- useless apologies of a troublesome witch</strong><br />
              <span>(2020)</span>
            </figcaption>
        </figure>
        <figure>
            <img class="poster" src="images/works_poster/sing.png" alt="Sa Ilalim ng Gabi Poster">
            <figcaption>
              <strong>Sa Ilalim ng Gabi</strong><br />
              <span>(2020)</span>
            </figcaption>
       </figure>
        <figure>
            <img class="poster" src="images/works_poster/tsw.png" alt="The Swallow's Descent Poster">
            <figcaption>
              <strong>The Swallow's Descent</strong><br />
              <span>(2016)</span>
            </figcaption>
        </figure>
    </div>
    <h2>Works</h2>
    <div class="mini-container row-direction">
        <!-- <figure>
            <img class="poster" src="images/works_poster/mtgr.png" alt="Dev8 Website">
            <figcaption>
              <strong>Dev8 Website</strong><br />
              <span>(2024)</span>
            </figcaption>
        </figure> -->
        <figure>
            <img class="poster" src="images/works_poster/mtgr.png" alt="Filipino Student Employability Predictor Poster">
            <figcaption>
              <strong>Filipino Student Employability Predictor</strong><br />
              <span>(2024)</span>
            </figcaption>
        </figure>
        <figure>
            <img class="poster" src="images/works_poster/mtgr.png" alt="Multithreaded GREP Runner Poster">
            <figcaption>
              <strong>Multithreaded GREP Runner</strong><br />
              <span>(2024)</span>
            </figcaption>
       </figure>
    </div>
</div>

<style lang="scss">

    .mini-container {
        display: flex;
        align-items: stretch;
        justify-content: center;
        flex-wrap: wrap;
        
        //overflow: hidden;
        //background-color: #ffffff;
        width: 100%;
        margin: auto;

        column-gap: 20px;
    }

    figure {
        flex: 1;
        margin: 0.5em 0;
        min-width: 223.2px;
        max-width: 223.2px;
    }

    figcaption {
        margin-top: 0.5em;
        text-align: center;
        font-size: 1em;

    }

    .poster {
        display: block;
        margin: auto;
        width: 100%;
    }

    .title-holder {
        font-family: "Wittgenstein";
        font-weight: bold;
        text-align: center;
        color: $border-color;
        margin-bottom: 0;
        font-size: 1.875rem;
    }

    p {
        text-align:justify;
    }

    table {
        border-collapse: collapse;
        max-width: 80%;
        
        tr:nth-child(even) {background-color: #f2f2f2;}

        h1 {
            margin-top: 0.25em;
            font-size: 0.75rem;

            a {
                text-decoration: none;
            }
        }
        p {
            font-size: 0.5rem;
        }

        .description{
            vertical-align: top;
            padding-left: 0.5em;
            padding-right: 0.5em;
        }
    }

    /* START:   Mobile responsive area! */

    @media only screen and (max-width: $global-max-width){
        figure {
            min-width: 150px;
            max-width: 150px;
        }
        figcaption {
            font-size: 0.75em;
        }
    }


    /* END:     Mobile responsive area! */
    

</style>
