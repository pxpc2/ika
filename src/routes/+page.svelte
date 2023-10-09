<script>
  export let data;
  const entries = data.props.newsletterEntry;
</script>

<h1>IKA Imóveis</h1>

<div>
  <ul>
    {#each entries as entry}
      <li>{entry.email}</li>
    {/each}
  </ul>
</div>
