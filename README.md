# Identity Access Management Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIIdentityGovernance`
- `AIAccessReviewAssistant`
- `AIPrivilegeRiskMonitor`
- `AIZeroTrustPolicy`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/identity-access-management-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4710`

Seeded users:
- `admin@identity-access.local / admin123`
- `manager@identity-access.local / manager123`
- `analyst@identity-access.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/identity-access-management-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4710 npm run smoke
```
