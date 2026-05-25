export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['identities', 'Identities Records', 'Identities priority queue', 'Open', 'Identities exception list', 'Security Lead', '$0'],
  ['applications', 'Applications Records', 'Applications priority queue', 'Review', 'Applications exception list', 'Security Lead', '$0'],
  ['entitlements', 'Entitlements Records', 'Entitlements priority queue', 'Action needed', 'Entitlements exception list', 'Security Lead', '$0'],
  ['access-requests', 'Access Requests Records', 'Access Requests priority queue', 'Open', 'Access Requests exception list', 'Security Lead', '$0'],
  ['reviews', 'Reviews Records', 'Reviews priority queue', 'Review', 'Reviews exception list', 'Operations Lead', '$0'],
  ['policies', 'Policies Records', 'Policies priority queue', 'Action needed', 'Policies exception list', 'Operations Lead', '$0'],
  ['privileged-access', 'Privileged Access Records', 'Privileged Access priority queue', 'Open', 'Privileged Access exception list', 'Operations Lead', '$0'],
  ['lifecycle', 'Lifecycle Records', 'Lifecycle priority queue', 'Review', 'Lifecycle exception list', 'Operations Lead', '$0'],
  ['violations', 'Violations Records', 'Violations priority queue', 'Action needed', 'Violations exception list', 'Governance Lead', '$0'],
  ['approvals', 'Approvals Records', 'Approvals priority queue', 'Open', 'Approvals exception list', 'Governance Lead', '$0'],
  ['evidence', 'Evidence Records', 'Evidence priority queue', 'Review', 'Evidence exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
