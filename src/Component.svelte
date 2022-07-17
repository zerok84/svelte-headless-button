<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let id = undefined;
  export let name = undefined;

  export function handleClick(e) {
    dispatch('click', e);
  }
</script>

<button on:click={handleClick} {id} {name}>
  <slot />
</button>

<style>
	button {
		all: unset;
	}
</style>