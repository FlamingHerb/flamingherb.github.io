<script>
    import ProjectItem from "$lib/ProjectItem.svelte";
</script>

<head>
    <title>Works | Vaccaria's Website</title>
</head>

<div class="container column-direction" style="margin-bottom: 4rem;">
    <!-- <h1 class="title-holder">Projects</h1> -->
    
    <h2>Games</h2>
    
    <div class="mini-container row-direction">
        <!-- 
        <ProjectItem name="Useless Apologies of a Troublesome Witch 2" date="2024" link="https://gamejolt.com/games/uselessapologiesofatroublesomewitch/521869"  image="uaoatw" />
        <ProjectItem name="Sweet Evil Fantasy"   date="2024" link="" image="pu" /> 
        -->
        <ProjectItem name="Watermarked" date="2025" link="https://aljowo.itch.io/watermarked"  image="mom" />
        <ProjectItem name="Peek-A-Boo (Red Velvet Fangame)" date="2025" link="https://vaccaria.itch.io/peek-a-boo"  image="rvh" />
        <ProjectItem name="Lost Voyager: Asteroid Destroyer" date="2024" link="https://flamingherb.github.io/develup-chapter-2-quest/"  image="dvup_ch2" />
        <ProjectItem name="Ano Po Yun? Yung... Sinig... ang?" date="2024" link="https://flamingherb.github.io/develup-chapter-1-quest/"  image="dvup_ch1" />
        <ProjectItem name="Project Privacy" date="2024" link="https://theredswarm.itch.io/project-privacy"  image="pv" />
        <ProjectItem name="Project Unity"   date="2024" link="https://github.com/FlamingHerb/Project-Unity" image="pu" />
        <ProjectItem name="Sa Ilalim ng Gabi" date="2020" link="https://gamejolt.com/games/sailalimnggabi/437232"  image="sing" />
        <ProjectItem name="Useless Apologies of a Troublesome Witch" date="2020" link="https://gamejolt.com/games/uselessapologiesofatroublesomewitch/521869"  image="uaoatw" />
        <ProjectItem name="The Swallow's Descent" date="2016" link="https://rpgmaker.net/games/9160/"  image="tsw" />

    </div>
    <h2>Works</h2>
    <div class="mini-container row-direction">
        <!-- 
        <ProjectItem name="Dev8 Website" date="2025" link=""  image="mtgr" />
        -->
        <ProjectItem name="CS 132 Portfolio Project<br><small>(Data Science)</small>" date="2025" link="https://jcfrongoso.github.io/cs132-final-project/"  image="bts132" />
        <ProjectItem name="Class Monitor<br><small>(Laravel/AWS)</small>" date="2025" link="https://classmonitor.cloud/v2"  image="cs173_cm" />
        <ProjectItem name="Dev8 Boot 2025 Website" date="2025" link="https://dev8.org.ph/events/boot2025/"  image="boot2025" />
        <ProjectItem name="SocketSens" date="2024" link="https://socketsens.vercel.app/"  image="socketsens" />
        <ProjectItem name="Filipino Student Employability Predictor<br><small>(Machine Learning)</small>" date="2024" link="https://employability-predictor.streamlit.app/"  image="fsep" />
        <ProjectItem name="Cycles of Pain <br> <small>(Arts 1 Project)</small>" date="2023" link="https://cycle-of-pain.vercel.app/"  image="arts1_proj" />
        <ProjectItem name="Multithreaded GREP Runner" date="2023" link="https://github.com/FlamingHerb/Multithreaded-GREP-Runner"  image="mtgr" />
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

    :global(figure) {
        flex: 1;
        margin: 0.5em 0;
        min-width: 223.2px;
        max-width: 223.2px;
    }

    :global(figcaption) {
        margin-top: 0.5em;
        text-align: center;
        font-size: 1em;

    }

    :global(.poster) {
        display: block;
        margin: auto;
        width: 100%;
    }


    @media only screen and (max-width: $global-max-width){
        :global(figure) {
            min-width: 150px;
            max-width: 150px;
        }
        :global(figcaption) {
            font-size: 0.75em;
        }
    }

    h2 {
        font-family: "Wittgenstein";
        font-weight: bold;
        text-align: center;
        color: $border-color;
        margin-bottom: 0;
        font-size: 1.875rem;
    }

    // p {
    //     text-align:justify;
    // }

    // table {
    //     border-collapse: collapse;
    //     max-width: 80%;
        
    //     tr:nth-child(even) {background-color: #f2f2f2;}

    //     h1 {
    //         margin-top: 0.25em;
    //         font-size: 0.75rem;

    //         a {
    //             text-decoration: none;
    //         }
    //     }
    //     p {
    //         font-size: 0.5rem;
    //     }

    //     .description{
    //         vertical-align: top;
    //         padding-left: 0.5em;
    //         padding-right: 0.5em;
    //     }
    // }

    /* START:   Mobile responsive area! */

    


    /* END:     Mobile responsive area! */
    

</style>
