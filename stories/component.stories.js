import { action } from '@storybook/addon-actions';
import Component from '../src/index';

export default {
  title: 'Component',
  component: Component,
};

export const HeadlessButton = () => ({
  Component: Component,
  props: { text: 'Hello Button' },
  on: { click: action('clicked') },
});
