<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let id = undefined;
  export let name = undefined;
  export let style = undefined;

  function handleClick(e) {
    dispatch('click', e);
  }
</script>

{#if $$props.href}
  <a style={style} href={$$props.href} class={$$props.class} on:click={handleClick} {id}>
    <slot />
  </a>
{:else}
  <button style={style} class={$$props.class} on:click={handleClick} {id} {name}>
    <slot />
  </button>
{/if}