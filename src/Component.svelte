<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let id = undefined;
  export let name = undefined;

  function handleClick(e) {
    dispatch('click', e);
  }
</script>

{#if $$props.href}
  <a href={$$props.href} class={$$props.class} on:click={handleClick} {id}>
    <slot />
  </a>
{:else}
  <button class={$$props.class} on:click={handleClick} {id} {name}>
    <slot />
  </button>
{/if}