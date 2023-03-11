<script lang="ts">
  export let data: any;
  let { countries } = data;
  $: ({ contries } = data);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
  {#each countries as country}
    <li>{country.name}</li>
  {/each}
</ul>