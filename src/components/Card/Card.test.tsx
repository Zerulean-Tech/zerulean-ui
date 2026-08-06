import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ZButton } from '../Button/Button';
import { Card } from './Card';

describe('Card', () => {
  it('renders title, subtitle, content and actions', () => {
    const html = renderToStaticMarkup(
      <Card
        title="Card title"
        subtitle="Card subtitle"
        actions={<ZButton>Learn more</ZButton>}
      >
        <p>Card content</p>
      </Card>
    );

    expect(html).toContain('Card title');
    expect(html).toContain('Card subtitle');
    expect(html).toContain('Card content');
    expect(html).toContain('Learn more');
  });

  it('supports disabling hover animation', () => {
    const html = renderToStaticMarkup(
      <Card hoverAnimation={false} title="Static card">
        <p>Card content</p>
      </Card>
    );

    expect(html).toContain('zerulean-card--no-hover-animation');
  });
});
