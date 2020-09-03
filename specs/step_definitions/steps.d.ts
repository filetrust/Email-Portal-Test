/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('../../src/pages/home.page.js');
type loginPage = typeof import('../../src/pages/login.page.js');
type userActivationPage = typeof import('../../src/pages/account-activation.page.js');
type passwordResetPage = typeof import('../../src/pages/password-reset.page.js');
type policyMainPage = typeof import('../../src/pages/policy.page.js');
type policySgPage = typeof import('../../src/pages/sender-groups.page.js');
type policyRgPage = typeof import('../../src/pages/receiver-groups.page.js');
type policyPrPage = typeof import('../../src/pages/processing-rules.page.js');
type policyCmpPage = typeof import('../../src/pages/cmp.page.js');
type transactionsPage = typeof import('../../src/pages/transactions.page.js');
type usersPage = typeof import('../../src/pages/users.page.js');
type userGroupsPage = typeof import('../../src/pages/groups.page.js');
type rolesPage = typeof import('../../src/pages/roles.page.js');
type relayEndpointsPage = typeof import('../../src/pages/relay-endpoints.page.js');
type allowedDomainsPage = typeof import('../../src/pages/allowed-domains.page.js');
type systemSettingsPage = typeof import('../../src/pages/system-settings.page.js');
type fileReleaseRPage = typeof import('../../src/pages/file-release-request.page.js');
type Hooks = import('../../src/utils/hooks_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, homePage: homePage, loginPage: loginPage, userActivationPage: userActivationPage, passwordResetPage: passwordResetPage, policyMainPage: policyMainPage, policySgPage: policySgPage, policyRgPage: policyRgPage, policyPrPage: policyPrPage, policyCmpPage: policyCmpPage, transactionsPage: transactionsPage, usersPage: usersPage, userGroupsPage: userGroupsPage, rolesPage: rolesPage, relayEndpointsPage: relayEndpointsPage, allowedDomainsPage: allowedDomainsPage, systemSettingsPage: systemSettingsPage, fileReleaseRPage: fileReleaseRPage }
  interface Methods extends Puppeteer, Hooks, Mochawesome {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
