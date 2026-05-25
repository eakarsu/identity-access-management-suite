export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIIdentityGovernance', ownership: 'Identities source capabilities and workflows', coverage: ['Identities', 'Applications', 'Entitlements'] },
  { name: 'AIAccessReviewAssistant', ownership: 'Applications source capabilities and workflows', coverage: ['Access Requests', 'Reviews', 'Policies'] },
  { name: 'AIPrivilegeRiskMonitor', ownership: 'Entitlements source capabilities and workflows', coverage: ['Privileged Access', 'Lifecycle', 'Violations'] },
  { name: 'AIZeroTrustPolicy', ownership: 'Access Requests source capabilities and workflows', coverage: ['Approvals', 'Evidence', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Identities', value: '84', note: 'Active' },
  { label: 'Applications', value: '61', note: 'Open' },
  { label: 'Entitlements', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Identities operating view', 'Applications operating view', 'Entitlements operating view', 'Access Requests operating view', 'Reviews operating view', 'Policies operating view', 'Privileged Access operating view', 'Lifecycle operating view'];
export const workflowHighlights = ['Identities workflow with records, approvals, audit, and reporting', 'Applications workflow with records, approvals, audit, and reporting', 'Entitlements workflow with records, approvals, audit, and reporting', 'Access Requests workflow with records, approvals, audit, and reporting', 'Reviews workflow with records, approvals, audit, and reporting'];
