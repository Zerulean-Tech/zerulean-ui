import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ZDashboard } from './ZDashboard';

describe('ZDashboard', () => {
  it('renders the dashboard regions', () => {
    const html = renderToStaticMarkup(
      <ZDashboard appLogo="Logo" title="Dashboard" user="User" sidebar="Sidebar" footer="Footer">
        Main content
      </ZDashboard>,
    );

    expect(html).toContain('Logo');
    expect(html).toContain('Dashboard');
    expect(html).toContain('User');
    expect(html).toContain('Sidebar');
    expect(html).toContain('Main content');
    expect(html).toContain('Footer');
    expect(html).toContain('Dashboard navigation');
  });
});
