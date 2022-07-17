# Svelte Headless Button

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Simple button component without default style.

### Installation

You can install this package with `npm` or `yarn`

```bash
npm install svelte-headless-button
```

```bash
yarn add svelte-headless-button
```

### Usage

```svelte
<script>
import Button from 'svelte-headless-button';

function handleClick(e) {
    console.log('Clicked!');
}
</script>

<Button id="myButton" name="myButton" on:click={handleClick} text="Hello"/>
```

### Props

| Name | Value |
| ---- | ----- |
| `id` | The button id |
| `name` | The button name |
| `text` | The button text |

### Events

| Event | Note |
| ---- | ----- |
| `click` |  Click Event |
