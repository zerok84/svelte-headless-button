<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let text = '';
  export let id = undefined;
  export let name = undefined;

  export function handleClick(e) {
    dispatch('click', e);
  }
</script>

<button on:click={handleClick} {id} {name}>{text}</button>

<style>
	button {
		all: unset;
	}
</style>