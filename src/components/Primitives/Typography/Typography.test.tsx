import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders semantic heading content with a variant class', () => {
    const html = renderToStaticMarkup(
      <Typography component="h2" variant="h5" tone="primary">
        Heading content
      </Typography>
    );

    expect(html).toContain('Heading content');
    expect(html).toContain('zerulean-typography');
    expect(html).toContain('zerulean-typography--primary');
  });

  it('supports muted text and custom alignment', () => {
    const html = renderToStaticMarkup(
      <Typography variant="body2" tone="muted" align="center">
        Muted body text
      </Typography>
    );

    expect(html).toContain('Muted body text');
    expect(html).toContain('zerulean-typography--muted');
    expect(html).toContain('zerulean-typography--center');
  });
});
