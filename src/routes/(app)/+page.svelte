<script>
  import Navbar from "./Navbar.svelte";

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
            <Navbar></Navbar>
        </div>
    </div>

</div>

