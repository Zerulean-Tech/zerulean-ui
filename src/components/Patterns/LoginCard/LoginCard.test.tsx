import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { LoginCard } from './LoginCard';

describe('LoginCard', () => {
  it('renders the configured social integrations', () => {
    const html = renderToStaticMarkup(
      <LoginCard socialIntegrations={[{ id: 'google', label: 'Google' }]} />,
    );

    expect(html).toContain('Google');
    expect(html).not.toContain('Facebook');
  });

  it('can hide social integrations', () => {
    const html = renderToStaticMarkup(<LoginCard socialIntegrations={[]} />);

    expect(html).not.toContain('or continue with');
  });

  it('can hide account actions independently', () => {
    const html = renderToStaticMarkup(
      <LoginCard showForgotPassword={false} showCreateAccount={false} />,
    );

    expect(html).not.toContain('Forgot password?');
    expect(html).not.toContain('Create account');
  });
});
