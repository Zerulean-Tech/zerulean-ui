import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { AvatarCard } from './AvatarCard';

describe('AvatarCard', () => {
  it('renders profile details and status', () => {
    const html = renderToStaticMarkup(
      <AvatarCard name="Alex Morgan" subtitle="Product designer" initials="AM" status="online" />,
    );

    expect(html).toContain('Alex Morgan');
    expect(html).toContain('Product designer');
    expect(html).toContain('online status');
  });

  it('supports vertical layout and composable actions', () => {
    const html = renderToStaticMarkup(
      <AvatarCard
        name="Alex Morgan"
        initials="AM"
        layout="vertical"
        actions={<button type="button">View profile</button>}
      />,
    );

    expect(html).toContain('zerulean-avatar-card--vertical');
    expect(html).toContain('View profile');
  });

  it('supports full width mode', () => {
    const html = renderToStaticMarkup(<AvatarCard name="Alex Morgan" fullWidth />);

    expect(html).toContain('zerulean-avatar-card--full-width');
  });
});
