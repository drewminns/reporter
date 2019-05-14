<script>
  import { globalStyles } from '../styles/global.js';
  import Nested from './Nested.svelte';

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<div class={globalStyles}>
  <h1>Hello! {name}!</h1>
</div>
