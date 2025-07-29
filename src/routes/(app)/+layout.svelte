<script>
  // import { PUBLIC_CURRENT_MODE } from '$env/static/public';
  // import { redirect } from '@sveltejs/kit';
  import "../../app.css";


  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();

  // if (PUBLIC_CURRENT_MODE == "development" && page.url.pathname != "/notallowed") {
  //   throw redirect(307, '/notallowed'); bruh
  // }

  // import taglineDatabase from '$lib/taglines.json';
  // import { navigating } from '$app/stores';
  // let innerWidth = 0;
  // let tagline = "If you see this message, then that means you haven't loaded everything properly.";
  // function taglineGenerator(){
  //   const num = Math.floor(Math.random() * (taglineDatabase.length))
  //   tagline = taglineDatabase[num];
  // }
  // 
  // taglineGenerator();
  // $: if($navigating) taglineGenerator();

</script>


<Header/>

{@render children?.()}

<Footer />

