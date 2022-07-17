import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import Component from '../src/Component.svelte'

describe('Component', () => {
  it('shows proper heading when rendered', () => {
    const { getByText } = render(Component, { text: 'Button' })

    expect(getByText('Button')).toBeInTheDocument()
  });
});