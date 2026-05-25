export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-ai-results",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER NOT NULL"
      },
      {
        "name": "analysis_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "result_json",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'::jsonb",
        "sourceLine": "result_json JSONB DEFAULT '{}'::jsonb"
      },
      {
        "name": "ai_model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_model VARCHAR(200)"
      },
      {
        "name": "prompt_used",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt_used TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-audit-logs",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "audit_logs",
    "displayName": "Audit Logs",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "actor",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actor VARCHAR(255) NOT NULL"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "details JSONB DEFAULT '{}'"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(50)"
      },
      {
        "name": "ai_anomaly_flag",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_anomaly_flag BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-compliance-checks",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "compliance_checks",
    "displayName": "Compliance Checks",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "check_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "check_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "framework",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "framework VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50) NOT NULL"
      },
      {
        "name": "findings",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "findings JSONB DEFAULT '[]'"
      },
      {
        "name": "ai_compliance_report",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_compliance_report TEXT"
      },
      {
        "name": "checked_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "checked_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-credential-schemas",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "credential_schemas",
    "displayName": "Credential Schemas",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "schema_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schema_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "schema_version",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schema_version VARCHAR(50) NOT NULL"
      },
      {
        "name": "schema_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schema_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "properties",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "properties JSONB NOT NULL DEFAULT '{}'"
      },
      {
        "name": "required_fields",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "required_fields JSONB DEFAULT '[]'"
      },
      {
        "name": "ai_validation_rules",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_validation_rules TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-credential-shares",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "credential_shares",
    "displayName": "Credential Shares",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "credential_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credential_id INTEGER REFERENCES verifiable_credentials(id) ON DELETE CASCADE"
      },
      {
        "name": "shared_with",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shared_with VARCHAR(500) NOT NULL"
      },
      {
        "name": "purpose",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purpose VARCHAR(255) NOT NULL"
      },
      {
        "name": "disclosed_fields",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "disclosed_fields JSONB DEFAULT '[]'"
      },
      {
        "name": "access_policy",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "access_policy JSONB DEFAULT '{}'"
      },
      {
        "name": "ai_privacy_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_privacy_analysis TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP"
      },
      {
        "name": "shared_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "shared_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-credential-templates",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "credential_templates",
    "displayName": "Credential Templates",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "template_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "template_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "template_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "template_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "schema_definition",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "schema_definition JSONB NOT NULL DEFAULT '{}'"
      },
      {
        "name": "visual_design",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "visual_design JSONB DEFAULT '{}'"
      },
      {
        "name": "issuer_requirements",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "issuer_requirements JSONB DEFAULT '{}'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_suggestions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_suggestions TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-did-documents",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "did_documents",
    "displayName": "Did Documents",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "did_uri",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "did_uri VARCHAR(500) UNIQUE NOT NULL"
      },
      {
        "name": "method",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method VARCHAR(100) NOT NULL"
      },
      {
        "name": "controller",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "controller VARCHAR(500)"
      },
      {
        "name": "verification_methods",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "verification_methods JSONB DEFAULT '[]'"
      },
      {
        "name": "services",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "services JSONB DEFAULT '[]'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-digital-identities",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "digital_identities",
    "displayName": "Digital Identities",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "identity_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "identity_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "identity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "identity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "public_key",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "public_key TEXT"
      },
      {
        "name": "metadata",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "metadata JSONB DEFAULT '{}'"
      },
      {
        "name": "ai_trust_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_trust_score DECIMAL(5,2)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-fraud-alerts",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "fraud_alerts",
    "displayName": "Fraud Alerts",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "alert_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alert_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(50) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT NOT NULL"
      },
      {
        "name": "indicators",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "indicators JSONB DEFAULT '[]'"
      },
      {
        "name": "ai_fraud_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_fraud_analysis TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-routes-gap-missing-verify-credential-validate-identity-issue-credential-js-gap-features",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_missing_verify_credential_validate_identity_issue_credential.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-routes-gap-no-blockchain-integration-ethereum-hyperledger-did-js-gap-features",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_blockchain_integration_ethereum_hyperledger_did.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-routes-gap-no-credential-issuer-verifier-workflow-routes-js-gap-features",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_credential_issuer_verifier_workflow_routes.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-routes-gap-no-did-decentralized-identifier-resolution-module-js-gap-features",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_did_decentralized_identifier_resolution_module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-routes-gap-no-notifications-system-js-gap-features",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_notifications_system.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-routes-gap-no-payment-billing-module-js-gap-features",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_payment_billing_module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-routes-gap-no-presentation-proof-generation-js-gap-features",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_presentation_proof_generation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-routes-gap-no-webhooks-js-gap-features",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-identity-verifications",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "identity_verifications",
    "displayName": "Identity Verifications",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "identity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "identity_id INTEGER REFERENCES digital_identities(id) ON DELETE CASCADE"
      },
      {
        "name": "verification_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verification_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "verification_method",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verification_method VARCHAR(100) NOT NULL"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(50) NOT NULL"
      },
      {
        "name": "confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score DECIMAL(5,2)"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "details JSONB DEFAULT '{}'"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "verified_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "verified_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-presentation-requests",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "presentation_requests",
    "displayName": "Presentation Requests",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "verifier",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verifier VARCHAR(500) NOT NULL"
      },
      {
        "name": "purpose",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purpose VARCHAR(255) NOT NULL"
      },
      {
        "name": "requested_credentials",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "requested_credentials JSONB NOT NULL DEFAULT '[]'"
      },
      {
        "name": "constraints",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "constraints JSONB DEFAULT '{}'"
      },
      {
        "name": "ai_matching_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_matching_result TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "responded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responded_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-revocation-entries",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "revocation_entries",
    "displayName": "Revocation Entries",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "credential_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credential_id INTEGER REFERENCES verifiable_credentials(id) ON DELETE CASCADE"
      },
      {
        "name": "reason",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason VARCHAR(255) NOT NULL"
      },
      {
        "name": "revoked_by",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revoked_by VARCHAR(255) NOT NULL"
      },
      {
        "name": "revocation_list_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revocation_list_url VARCHAR(500)"
      },
      {
        "name": "ai_revocation_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_revocation_analysis TEXT"
      },
      {
        "name": "revoked_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "revoked_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-risk-assessments",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "risk_assessments",
    "displayName": "Risk Assessments",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER NOT NULL"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50) NOT NULL"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score DECIMAL(5,2) NOT NULL"
      },
      {
        "name": "risk_factors",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "risk_factors JSONB DEFAULT '[]'"
      },
      {
        "name": "recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "recommendations JSONB DEFAULT '[]'"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "assessed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "assessed_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-trust-registry",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "trust_registry",
    "displayName": "Trust Registry",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "entity_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_did",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_did VARCHAR(500)"
      },
      {
        "name": "trust_level",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trust_level VARCHAR(50) NOT NULL"
      },
      {
        "name": "governance_framework",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "governance_framework VARCHAR(255)"
      },
      {
        "name": "credentials_types",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "credentials_types JSONB DEFAULT '[]'"
      },
      {
        "name": "ai_trust_evaluation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_trust_evaluation TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "verified_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verified_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-users",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "full_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'user'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-routes-ai-new-js-vc-workflows",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "vc_workflows",
    "displayName": "Vc Workflows",
    "framework": "SQL",
    "sourceFile": "server/routes/aiNew.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "kind",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "kind VARCHAR(32) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id TEXT NOT NULL"
      },
      {
        "name": "state",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "state VARCHAR(32) NOT NULL DEFAULT 'draft'"
      },
      {
        "name": "history",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'::jsonb",
        "sourceLine": "history JSONB NOT NULL DEFAULT '[]'::jsonb"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-server-schema-sql-verifiable-credentials",
    "sourceProject": "AIDigitalIdentityVerifiableCredentials",
    "name": "verifiable_credentials",
    "displayName": "Verifiable Credentials",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "credential_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credential_type VARCHAR(200) NOT NULL"
      },
      {
        "name": "issuer",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuer VARCHAR(500) NOT NULL"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(500) NOT NULL"
      },
      {
        "name": "issuance_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "issuance_date TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "expiration_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiration_date TIMESTAMP"
      },
      {
        "name": "credential_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "credential_data JSONB NOT NULL DEFAULT '{}'"
      },
      {
        "name": "proof",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "proof JSONB DEFAULT '{}'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "ai_verification_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_verification_result TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-access-control",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "access_control",
    "displayName": "Access Control",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "employee_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee_name VARCHAR"
      },
      {
        "name": "system_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "system_name VARCHAR"
      },
      {
        "name": "access_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "access_level VARCHAR"
      },
      {
        "name": "phi_access",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "phi_access BOOLEAN DEFAULT false"
      },
      {
        "name": "granted_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "granted_date DATE"
      },
      {
        "name": "last_review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_review_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR DEFAULT 'active'"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR"
      },
      {
        "name": "justification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "justification TEXT"
      },
      {
        "name": "expiration_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiration_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-audit-logs",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "audit_logs",
    "displayName": "Audit Logs",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR"
      },
      {
        "name": "entity_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INT"
      },
      {
        "name": "user_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_email VARCHAR"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-routes-breach-simulation-js-breach-simulation-runs",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "breach_simulation_runs",
    "displayName": "Breach Simulation Runs",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/breachSimulation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "difficulty",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "difficulty TEXT"
      },
      {
        "name": "focus",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "focus TEXT"
      },
      {
        "name": "scenario",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scenario JSONB"
      },
      {
        "name": "score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score INT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-business-associate-agreements",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "business_associate_agreements",
    "displayName": "Business Associate Agreements",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "associate_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "associate_name VARCHAR"
      },
      {
        "name": "contact_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email VARCHAR"
      },
      {
        "name": "agreement_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agreement_type VARCHAR"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR DEFAULT 'active'"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "expiration_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiration_date DATE"
      },
      {
        "name": "phi_access_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phi_access_level VARCHAR"
      },
      {
        "name": "last_audit_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_audit_date DATE"
      },
      {
        "name": "compliance_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'compliant'",
        "sourceLine": "compliance_status VARCHAR DEFAULT 'compliant'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-compliance-assessments",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "compliance_assessments",
    "displayName": "Compliance Assessments",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR"
      },
      {
        "name": "department_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department_id INT REFERENCES departments(id)"
      },
      {
        "name": "assessor_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assessor_name VARCHAR"
      },
      {
        "name": "assessment_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assessment_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR DEFAULT 'pending'"
      },
      {
        "name": "score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score DECIMAL"
      },
      {
        "name": "findings",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings TEXT"
      },
      {
        "name": "recommendations",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations TEXT"
      },
      {
        "name": "next_review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_review_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-compliance-deadlines",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "compliance_deadlines",
    "displayName": "Compliance Deadlines",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR DEFAULT 'pending'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR DEFAULT 'medium'"
      },
      {
        "name": "reminder_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reminder_date DATE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-departments",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "departments",
    "displayName": "Departments",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR"
      },
      {
        "name": "head_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "head_name VARCHAR"
      },
      {
        "name": "employee_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "employee_count INT DEFAULT 0"
      },
      {
        "name": "compliance_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "compliance_score DECIMAL DEFAULT 0"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "risk_level VARCHAR DEFAULT 'low'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-documents",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "documents",
    "displayName": "Documents",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "file_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_type VARCHAR"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version VARCHAR"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR DEFAULT 'active'"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by VARCHAR"
      },
      {
        "name": "upload_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "upload_date DATE"
      },
      {
        "name": "review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review_date DATE"
      },
      {
        "name": "tags",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-employees",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "employees",
    "displayName": "Employees",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR UNIQUE"
      },
      {
        "name": "department_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department_id INT REFERENCES departments(id)"
      },
      {
        "name": "job_title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job_title VARCHAR"
      },
      {
        "name": "hire_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hire_date DATE"
      },
      {
        "name": "training_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "training_status VARCHAR DEFAULT 'pending'"
      },
      {
        "name": "hipaa_certified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "hipaa_certified BOOLEAN DEFAULT false"
      },
      {
        "name": "certification_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certification_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-routes-gap-limited-vendor-security-assessment-depth-js-gap-features",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-limited-vendor-security-assessment-depth.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-routes-gap-no-breach-simulation-tabletop-endpoint-js-gap-features",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-breach-simulation-tabletop-endpoint.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-routes-gap-no-ehr-system-integration-js-gap-features",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-ehr-system-integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-routes-gap-no-external-regulator-communication-work-js-gap-features",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-external-regulator-communication-work.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-routes-gap-no-insider-threat-behavior-baseline-drif-js-gap-features",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-insider-threat-behavior-baseline-drif.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-routes-gap-no-multi-tenant-covered-entity-isolation-js-gap-features",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-multi-tenant-covered-entity-isolation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-routes-gap-no-real-time-phi-streaming-monitor-js-gap-features",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-real-time-phi-streaming-monitor.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-routes-gap-no-user-facing-dashboard-backend-api-js-gap-features",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-user-facing-dashboard-backend-api.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-routes-gap-no-webhook-surface-for-siem-integration-js-gap-features",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-webhook-surface-for-siem-integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-incident-reports",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "incident_reports",
    "displayName": "Incident Reports",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR"
      },
      {
        "name": "incident_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_type VARCHAR"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity VARCHAR DEFAULT 'medium'"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "reported_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_by VARCHAR"
      },
      {
        "name": "reported_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reported_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR DEFAULT 'open'"
      },
      {
        "name": "affected_individuals",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "affected_individuals INT DEFAULT 0"
      },
      {
        "name": "phi_involved",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "phi_involved BOOLEAN DEFAULT false"
      },
      {
        "name": "resolution",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution TEXT"
      },
      {
        "name": "resolved_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-phi-inventory",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "phi_inventory",
    "displayName": "Phi Inventory",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "data_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "data_type VARCHAR"
      },
      {
        "name": "storage_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "storage_location VARCHAR"
      },
      {
        "name": "system_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "system_name VARCHAR"
      },
      {
        "name": "department_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department_id INT REFERENCES departments(id)"
      },
      {
        "name": "encryption_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'encrypted'",
        "sourceLine": "encryption_status VARCHAR DEFAULT 'encrypted'"
      },
      {
        "name": "access_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "access_level VARCHAR"
      },
      {
        "name": "retention_period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retention_period VARCHAR"
      },
      {
        "name": "last_audit_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_audit_date DATE"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "risk_level VARCHAR DEFAULT 'medium'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-policies",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "policies",
    "displayName": "Policies",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version VARCHAR"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR DEFAULT 'draft'"
      },
      {
        "name": "effective_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_date DATE"
      },
      {
        "name": "review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review_date DATE"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by VARCHAR"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-risk-register",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "risk_register",
    "displayName": "Risk Register",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "risk_level VARCHAR DEFAULT 'medium'"
      },
      {
        "name": "likelihood",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "3",
        "sourceLine": "likelihood INT DEFAULT 3"
      },
      {
        "name": "impact",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "3",
        "sourceLine": "impact INT DEFAULT 3"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score DECIMAL"
      },
      {
        "name": "mitigation_plan",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation_plan TEXT"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner VARCHAR"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR DEFAULT 'open'"
      },
      {
        "name": "identified_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "identified_date DATE"
      },
      {
        "name": "review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-sanctions",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "sanctions",
    "displayName": "Sanctions",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "employee_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee_name VARCHAR"
      },
      {
        "name": "violation_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "violation_type VARCHAR"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'minor'",
        "sourceLine": "severity VARCHAR DEFAULT 'minor'"
      },
      {
        "name": "sanction_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sanction_type VARCHAR"
      },
      {
        "name": "sanction_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sanction_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR DEFAULT 'active'"
      },
      {
        "name": "corrective_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "corrective_action TEXT"
      },
      {
        "name": "follow_up_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "follow_up_date DATE"
      },
      {
        "name": "imposed_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imposed_by VARCHAR"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-routes-custom-views-js-training-compliance-rules",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "training_compliance_rules",
    "displayName": "Training Compliance Rules",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/customViews.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "module_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "module_name VARCHAR(180) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'General'",
        "sourceLine": "category VARCHAR(80) DEFAULT 'General'"
      },
      {
        "name": "frequency_months",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "12",
        "sourceLine": "frequency_months INT DEFAULT 12"
      },
      {
        "name": "passing_threshold",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "80",
        "sourceLine": "passing_threshold INT DEFAULT 80"
      },
      {
        "name": "mandatory",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "mandatory BOOLEAN DEFAULT true"
      },
      {
        "name": "applies_to_role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'all'",
        "sourceLine": "applies_to_role VARCHAR(120) DEFAULT 'all'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-training-courses",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "training_courses",
    "displayName": "Training Courses",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR"
      },
      {
        "name": "duration_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_hours DECIMAL"
      },
      {
        "name": "passing_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "80",
        "sourceLine": "passing_score INT DEFAULT 80"
      },
      {
        "name": "is_mandatory",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_mandatory BOOLEAN DEFAULT true"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-training-records",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "training_records",
    "displayName": "Training Records",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "employee_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee_id INT REFERENCES employees(id)"
      },
      {
        "name": "course_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "course_id INT REFERENCES training_courses(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'not_started'",
        "sourceLine": "status VARCHAR DEFAULT 'not_started'"
      },
      {
        "name": "score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score INT"
      },
      {
        "name": "started_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "started_at TIMESTAMP"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP"
      },
      {
        "name": "expires_at",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aihipaa-training-compliance-auditor-backend-src-seed-js-users",
    "sourceProject": "AIHIPAATrainingComplianceAuditor",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR UNIQUE"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR"
      },
      {
        "name": "full_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_name VARCHAR"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'employee'",
        "sourceLine": "role VARCHAR DEFAULT 'employee'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-access-logs",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "access_logs",
    "displayName": "Access Logs",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "tenant_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tenant_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "unit_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_number VARCHAR(20)"
      },
      {
        "name": "access_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "access_type VARCHAR(30) NOT NULL"
      },
      {
        "name": "access_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "access_method VARCHAR(30)"
      },
      {
        "name": "access_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "access_time TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "granted",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "granted BOOLEAN DEFAULT true"
      },
      {
        "name": "denied_reason",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "denied_reason VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-ai-churn-prevention-js-ai-results",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "server/routes/ai-churn-prevention.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(120)"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-billing-records",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "billing_records",
    "displayName": "Billing Records",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "tenant_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tenant_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "tenant_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tenant_email VARCHAR(255)"
      },
      {
        "name": "unit_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_number VARCHAR(20) NOT NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'pending'"
      },
      {
        "name": "payment_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method VARCHAR(50)"
      },
      {
        "name": "auto_pay",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "auto_pay BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-climate-controls",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "climate_controls",
    "displayName": "Climate Controls",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "zone_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "current_temp",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_temp DECIMAL(5,1) NOT NULL"
      },
      {
        "name": "target_temp",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_temp DECIMAL(5,1) NOT NULL"
      },
      {
        "name": "current_humidity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_humidity DECIMAL(5,1)"
      },
      {
        "name": "target_humidity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_humidity DECIMAL(5,1)"
      },
      {
        "name": "hvac_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'auto'",
        "sourceLine": "hvac_status VARCHAR(20) DEFAULT 'auto'"
      },
      {
        "name": "energy_usage_kwh",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "energy_usage_kwh DECIMAL(10,2)"
      },
      {
        "name": "last_maintenance",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_maintenance DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-auction-management-for-abandoned-units-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-auction-management-for-abandoned-units.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-autorenewal-lease-management-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-autorenewal-lease-management.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-churnprediction-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-churnprediction.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-demand-forecasting-ai-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-demand-forecasting-ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-late-fee-automation-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-late-fee-automation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-latepaymentrisk-collections-triage-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-latepaymentrisk-collections-triage.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-online-reservationpayment-workflow-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-online-reservationpayment-workflow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-payment-gateway-integration-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-payment-gateway-integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-public-webhook-system-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-public-webhook-system.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-securityalertanalysis-cameraalarm-summari-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-securityalertanalysis-cameraalarm-summari.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-tenant-portal-selfservice-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-tenant-portal-selfservice.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-routes-gap-no-unitsizingrecommendation-rightsize-sugges-js-gap-features",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap-no-unitsizingrecommendation-rightsize-sugges.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-insurance-policies",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "insurance_policies",
    "displayName": "Insurance Policies",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "tenant_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tenant_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "unit_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_number VARCHAR(20)"
      },
      {
        "name": "provider",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider VARCHAR(255)"
      },
      {
        "name": "policy_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "policy_number VARCHAR(50)"
      },
      {
        "name": "coverage_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverage_amount DECIMAL(10,2)"
      },
      {
        "name": "monthly_premium",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthly_premium DECIMAL(10,2)"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'active'"
      },
      {
        "name": "coverage_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverage_type VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-maintenance-requests",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "maintenance_requests",
    "displayName": "Maintenance Requests",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(100)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(100)"
      },
      {
        "name": "requested_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by VARCHAR(100)"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL(10,2)"
      },
      {
        "name": "completed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-move-activities",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "move_activities",
    "displayName": "Move Activities",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "tenant_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tenant_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "unit_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_number VARCHAR(20)"
      },
      {
        "name": "activity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "activity_type VARCHAR(20) NOT NULL"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE"
      },
      {
        "name": "completed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'scheduled'"
      },
      {
        "name": "requires_elevator",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "requires_elevator BOOLEAN DEFAULT false"
      },
      {
        "name": "special_instructions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "special_instructions TEXT"
      },
      {
        "name": "staff_assigned",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staff_assigned VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-notifications",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "related_entity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "related_entity VARCHAR(50)"
      },
      {
        "name": "related_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "related_id VARCHAR(100)"
      },
      {
        "name": "is_read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_read BOOLEAN DEFAULT false"
      },
      {
        "name": "is_auto_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_auto_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-occupancy-forecasts",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "occupancy_forecasts",
    "displayName": "Occupancy Forecasts",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "forecast_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "forecast_date DATE NOT NULL"
      },
      {
        "name": "predicted_occupancy",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predicted_occupancy DECIMAL(5,2) NOT NULL"
      },
      {
        "name": "actual_occupancy",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_occupancy DECIMAL(5,2)"
      },
      {
        "name": "unit_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_type VARCHAR(50)"
      },
      {
        "name": "confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score DECIMAL(5,2)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-pricing-rules",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "pricing_rules",
    "displayName": "Pricing Rules",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "rule_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "unit_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "base_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "base_price DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "demand_multiplier",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1.0",
        "sourceLine": "demand_multiplier DECIMAL(5,2) DEFAULT 1.0"
      },
      {
        "name": "season",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season VARCHAR(20)"
      },
      {
        "name": "min_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "min_price DECIMAL(10,2)"
      },
      {
        "name": "max_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_price DECIMAL(10,2)"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-promotions",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "promotions",
    "displayName": "Promotions",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "discount_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_type VARCHAR(30) NOT NULL"
      },
      {
        "name": "discount_value",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_value DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "unit_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'all'",
        "sourceLine": "unit_type VARCHAR(50) DEFAULT 'all'"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "promo_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "promo_code VARCHAR(50) UNIQUE"
      },
      {
        "name": "max_uses",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "max_uses INTEGER DEFAULT 0"
      },
      {
        "name": "current_uses",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_uses INTEGER DEFAULT 0"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-revenue-records",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "revenue_records",
    "displayName": "Revenue Records",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(50) NOT NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "description",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description VARCHAR(255)"
      },
      {
        "name": "transaction_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_date DATE NOT NULL"
      },
      {
        "name": "payment_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method VARCHAR(50)"
      },
      {
        "name": "tenant_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tenant_name VARCHAR(255)"
      },
      {
        "name": "unit_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_number VARCHAR(20)"
      },
      {
        "name": "period_month",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period_month INTEGER"
      },
      {
        "name": "period_year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period_year INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-security-events",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "security_events",
    "displayName": "Security Events",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "event_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(100) NOT NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "camera_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "camera_id VARCHAR(20)"
      },
      {
        "name": "resolved",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "resolved BOOLEAN DEFAULT false"
      },
      {
        "name": "resolved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_by VARCHAR(100)"
      },
      {
        "name": "event_time",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "event_time TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-storage-units",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "storage_units",
    "displayName": "Storage Units",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "unit_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "unit_number VARCHAR(20) UNIQUE NOT NULL"
      },
      {
        "name": "size_sqft",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size_sqft INTEGER NOT NULL"
      },
      {
        "name": "unit_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "climate_controlled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "climate_controlled BOOLEAN DEFAULT false"
      },
      {
        "name": "floor_level",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "floor_level INTEGER DEFAULT 1"
      },
      {
        "name": "monthly_rate",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthly_rate DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'available'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-tenants",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "tenants",
    "displayName": "Tenants",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "unit_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_number VARCHAR(20)"
      },
      {
        "name": "lease_start",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lease_start DATE"
      },
      {
        "name": "lease_end",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lease_end DATE"
      },
      {
        "name": "emergency_contact",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergency_contact VARCHAR(255)"
      },
      {
        "name": "id_verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "id_verified BOOLEAN DEFAULT false"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-users",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'manager'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'manager'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-server-seed-js-waitlist",
    "sourceProject": "AISelfStorageFacilityManager",
    "name": "waitlist",
    "displayName": "Waitlist",
    "framework": "SQL",
    "sourceFile": "server/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "desired_unit_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "desired_unit_type VARCHAR(50)"
      },
      {
        "name": "desired_size_sqft",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "desired_size_sqft INTEGER"
      },
      {
        "name": "climate_controlled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "climate_controlled BOOLEAN DEFAULT false"
      },
      {
        "name": "max_budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_budget DECIMAL(10,2)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'waiting'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'waiting'"
      },
      {
        "name": "notified_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notified_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-addresses",
    "sourceProject": "ebay",
    "name": "addresses",
    "displayName": "Addresses",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "address_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'shipping'",
        "sourceLine": "address_type VARCHAR(20) DEFAULT 'shipping' CHECK (address_type IN ('shipping', 'billing', 'both'))"
      },
      {
        "name": "is_default",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_default BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "full_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_name VARCHAR(200) NOT NULL"
      },
      {
        "name": "street_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "street_address VARCHAR(255) NOT NULL"
      },
      {
        "name": "street_address_2",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "street_address_2 VARCHAR(255)"
      },
      {
        "name": "city",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city VARCHAR(100) NOT NULL"
      },
      {
        "name": "state",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state VARCHAR(100) NOT NULL"
      },
      {
        "name": "postal_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "postal_code VARCHAR(20) NOT NULL"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'United",
        "sourceLine": "country VARCHAR(100) NOT NULL DEFAULT 'United States'"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-admin-actions",
    "sourceProject": "ebay",
    "name": "admin_actions",
    "displayName": "Admin Actions",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "admin_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "admin_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "action_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "target_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "target_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_id UUID NOT NULL"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details JSONB"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-ai-message-suggestions",
    "sourceProject": "ebay",
    "name": "ai_message_suggestions",
    "displayName": "Ai Message Suggestions",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "conversation_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "conversation_id UUID"
      },
      {
        "name": "message_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message_id UUID"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "original_message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_message TEXT"
      },
      {
        "name": "suggested_reply",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "suggested_reply TEXT"
      },
      {
        "name": "context",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "context JSONB"
      },
      {
        "name": "used",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "used BOOLEAN DEFAULT false"
      },
      {
        "name": "feedback",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feedback VARCHAR(20) CHECK (feedback IN ('helpful', 'not_helpful', 'edited'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-add-ai-results-and-sniping-sql-ai-results",
    "sourceProject": "ebay",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/add_ai_results_and_sniping.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "resource_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_type   VARCHAR(64)  NOT NULL"
      },
      {
        "name": "resource_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_id     VARCHAR(128) NOT NULL"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature         VARCHAR(64)  NOT NULL"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model           VARCHAR(128)"
      },
      {
        "name": "prompt_tokens",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "prompt_tokens   INTEGER DEFAULT 0"
      },
      {
        "name": "completion_tokens",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "completion_tokens INTEGER DEFAULT 0"
      },
      {
        "name": "total_tokens",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_tokens    INTEGER DEFAULT 0"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "payload         JSONB NOT NULL DEFAULT '{}'"
      },
      {
        "name": "raw",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw             TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMP NOT NULL DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-api-key-usage",
    "sourceProject": "ebay",
    "name": "api_key_usage",
    "displayName": "API Key Usage",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "BIGSERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id BIGSERIAL PRIMARY KEY"
      },
      {
        "name": "key_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "key_id UUID REFERENCES api_keys(id) ON DELETE CASCADE"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(200)"
      },
      {
        "name": "bucket_start",
        "type": "TIMESTAMPTZ",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bucket_start TIMESTAMPTZ NOT NULL"
      },
      {
        "name": "request_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "request_count INT DEFAULT 1"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-api-keys",
    "sourceProject": "ebay",
    "name": "api_keys",
    "displayName": "API Keys",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(80) NOT NULL"
      },
      {
        "name": "key_hash",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "key_hash TEXT NOT NULL UNIQUE"
      },
      {
        "name": "key_prefix",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "key_prefix VARCHAR(12) NOT NULL"
      },
      {
        "name": "scopes",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ARRAY['public:read']",
        "sourceLine": "scopes TEXT[] DEFAULT ARRAY['public:read']"
      },
      {
        "name": "rate_limit_per_min",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "120",
        "sourceLine": "rate_limit_per_min INT DEFAULT 120"
      },
      {
        "name": "last_used_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_used_at TIMESTAMPTZ"
      },
      {
        "name": "revoked_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revoked_at TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-add-round4b-features-sql-auction-chat-messages",
    "sourceProject": "ebay",
    "name": "auction_chat_messages",
    "displayName": "Auction Chat Messages",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/add_round4b_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL CHECK (length(message) BETWEEN 1 AND 500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-auction-events",
    "sourceProject": "ebay",
    "name": "auction_events",
    "displayName": "Auction Events",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "event_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "event_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_data JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-authenticity-categories",
    "sourceProject": "ebay",
    "name": "authenticity_categories",
    "displayName": "Authenticity Categories",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "category_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "min_value_threshold",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "min_value_threshold DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "is_mandatory",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_mandatory BOOLEAN DEFAULT false"
      },
      {
        "name": "inspection_fee",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "inspection_fee DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "brands_covered",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brands_covered JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-authenticity-requests",
    "sourceProject": "ebay",
    "name": "authenticity_requests",
    "displayName": "Authenticity Requests",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id)"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id)"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID REFERENCES users(id)"
      },
      {
        "name": "item_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_category VARCHAR(100)"
      },
      {
        "name": "brand",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand VARCHAR(100)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(200)"
      },
      {
        "name": "declared_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "declared_value DECIMAL(10,2)"
      },
      {
        "name": "auth_center_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "auth_center_location VARCHAR(200)"
      },
      {
        "name": "received_at_center",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "received_at_center TIMESTAMP"
      },
      {
        "name": "authenticator_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "authenticator_id VARCHAR(100)"
      },
      {
        "name": "authenticator_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "authenticator_name VARCHAR(200)"
      },
      {
        "name": "inspection_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_date TIMESTAMP"
      },
      {
        "name": "inspection_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_notes TEXT"
      },
      {
        "name": "photos_taken",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photos_taken JSONB"
      },
      {
        "name": "is_authentic",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "is_authentic BOOLEAN"
      },
      {
        "name": "authenticity_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "authenticity_score INT"
      },
      {
        "name": "certificate_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "certificate_number VARCHAR(100) UNIQUE"
      },
      {
        "name": "certificate_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certificate_url VARCHAR(500)"
      },
      {
        "name": "nfc_tag_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nfc_tag_id VARCHAR(100)"
      },
      {
        "name": "issues_found",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issues_found JSONB"
      },
      {
        "name": "rejection_reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rejection_reason TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-automatic-feedback-log",
    "sourceProject": "ebay",
    "name": "automatic_feedback_log",
    "displayName": "Automatic Feedback Log",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "from_user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "from_user_id UUID REFERENCES users(id)"
      },
      {
        "name": "to_user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "to_user_id UUID REFERENCES users(id)"
      },
      {
        "name": "feedback_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feedback_type VARCHAR(20) CHECK (feedback_type IN ('positive', 'neutral', 'negative'))"
      },
      {
        "name": "feedback_text",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feedback_text TEXT"
      },
      {
        "name": "triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "triggered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "success",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "success BOOLEAN DEFAULT true"
      },
      {
        "name": "error_message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_message TEXT"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-automatic-feedback-settings",
    "sourceProject": "ebay",
    "name": "automatic_feedback_settings",
    "displayName": "Automatic Feedback Settings",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "enabled BOOLEAN DEFAULT true"
      },
      {
        "name": "delay_days",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "3",
        "sourceLine": "delay_days INT DEFAULT 3"
      },
      {
        "name": "feedback_template",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Great",
        "sourceLine": "feedback_template TEXT DEFAULT 'Great buyer! Fast payment. Thank you!'"
      },
      {
        "name": "conditions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{\"require_payment\":",
        "sourceLine": "conditions JSONB DEFAULT '{\"require_payment\": true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-bid-increments",
    "sourceProject": "ebay",
    "name": "bid_increments",
    "displayName": "Bid Increments",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "price_from",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price_from DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "price_to",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price_to DECIMAL(10,2)"
      },
      {
        "name": "increment_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "increment_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-bid-retractions",
    "sourceProject": "ebay",
    "name": "bid_retractions",
    "displayName": "Bid Retractions",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "bid_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_id UUID NOT NULL REFERENCES bids(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "original_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "reason",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason VARCHAR(50) NOT NULL CHECK (reason IN ('entered_wrong_amount', 'seller_changed_description', 'cannot_contact_seller', 'other'))"
      },
      {
        "name": "explanation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "explanation TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'denied'))"
      },
      {
        "name": "reviewed_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_by UUID REFERENCES users(id)"
      },
      {
        "name": "reviewed_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_at TIMESTAMP WITH TIME ZONE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-bid-retractions",
    "sourceProject": "ebay",
    "name": "bid_retractions",
    "displayName": "Bid Retractions",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "bid_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_id UUID REFERENCES bids(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "reason",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason VARCHAR(100) NOT NULL"
      },
      {
        "name": "explanation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "explanation TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "reviewed_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_by UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "reviewed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-bid-velocity-log",
    "sourceProject": "ebay",
    "name": "bid_velocity_log",
    "displayName": "Bid Velocity Log",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "BIGSERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id BIGSERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "ip",
        "type": "INET",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip INET"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-bids",
    "sourceProject": "ebay",
    "name": "bids",
    "displayName": "Bids",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "bidder_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bidder_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "bid_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bid_amount DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "max_bid_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_bid_amount DECIMAL(12,2)"
      },
      {
        "name": "is_winning",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_winning BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "is_auto_bid",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_auto_bid BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-bulk-uploads",
    "sourceProject": "ebay",
    "name": "bulk_uploads",
    "displayName": "Bulk Uploads",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "filename",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename VARCHAR(255) NOT NULL"
      },
      {
        "name": "file_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_url TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed'))"
      },
      {
        "name": "total_rows",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_rows INTEGER DEFAULT 0"
      },
      {
        "name": "processed_rows",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "processed_rows INTEGER DEFAULT 0"
      },
      {
        "name": "successful_rows",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "successful_rows INTEGER DEFAULT 0"
      },
      {
        "name": "failed_rows",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "failed_rows INTEGER DEFAULT 0"
      },
      {
        "name": "error_log",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_log JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP WITH TIME ZONE"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-add-round3-features-sql-bundle-discounts",
    "sourceProject": "ebay",
    "name": "bundle_discounts",
    "displayName": "Bundle Discounts",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/add_round3_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(120) NOT NULL"
      },
      {
        "name": "min_items",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "2",
        "sourceLine": "min_items INTEGER NOT NULL DEFAULT 2"
      },
      {
        "name": "discount_percent",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_percent NUMERIC(5, 2) NOT NULL"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-cart-items",
    "sourceProject": "ebay",
    "name": "cart_items",
    "displayName": "Cart Items",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "cart_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cart_id UUID NOT NULL REFERENCES shopping_carts(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity INTEGER NOT NULL DEFAULT 1"
      },
      {
        "name": "added_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-add-round3-features-sql-cart-reservations",
    "sourceProject": "ebay",
    "name": "cart_reservations",
    "displayName": "Cart Reservations",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/add_round3_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity INTEGER NOT NULL CHECK (quantity > 0)"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-categories",
    "sourceProject": "ebay",
    "name": "categories",
    "displayName": "Categories",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(100) UNIQUE NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "image_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url VARCHAR(500)"
      },
      {
        "name": "icon",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "icon VARCHAR(50)"
      },
      {
        "name": "parent_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_id UUID REFERENCES categories(id)"
      },
      {
        "name": "sort_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sort_order INTEGER DEFAULT 0"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-add-round3-features-sql-category-follows",
    "sourceProject": "ebay",
    "name": "category_follows",
    "displayName": "Category Follows",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/add_round3_features.sql",
    "columns": [
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-collection-followers",
    "sourceProject": "ebay",
    "name": "collection_followers",
    "displayName": "Collection Followers",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "collection_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "collection_id UUID NOT NULL REFERENCES collections(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "followed_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "followed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-collection-followers",
    "sourceProject": "ebay",
    "name": "collection_followers",
    "displayName": "Collection Followers",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "collection_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "collection_id UUID REFERENCES collections(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "followed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "followed_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-collection-items",
    "sourceProject": "ebay",
    "name": "collection_items",
    "displayName": "Collection Items",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "collection_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "collection_id UUID NOT NULL REFERENCES collections(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "added_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-collection-items",
    "sourceProject": "ebay",
    "name": "collection_items",
    "displayName": "Collection Items",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "collection_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "collection_id UUID REFERENCES collections(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "added_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "added_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-collections",
    "sourceProject": "ebay",
    "name": "collections",
    "displayName": "Collections",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "is_public",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_public BOOLEAN DEFAULT false"
      },
      {
        "name": "cover_image_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cover_image_url TEXT"
      },
      {
        "name": "item_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "item_count INTEGER DEFAULT 0"
      },
      {
        "name": "follower_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "follower_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-collections",
    "sourceProject": "ebay",
    "name": "collections",
    "displayName": "Collections",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "is_public",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_public BOOLEAN DEFAULT false"
      },
      {
        "name": "follower_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "follower_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-coupon-usage",
    "sourceProject": "ebay",
    "name": "coupon_usage",
    "displayName": "Coupon Usage",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "coupon_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coupon_id UUID NOT NULL REFERENCES coupons(id)"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id)"
      },
      {
        "name": "discount_applied",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_applied DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "used_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "used_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-coupons",
    "sourceProject": "ebay",
    "name": "coupons",
    "displayName": "Coupons",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "code VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "discount_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_type VARCHAR(20) NOT NULL CHECK (discount_type IN ('percentage', 'fixed_amount', 'free_shipping'))"
      },
      {
        "name": "discount_value",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_value DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "min_purchase_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "min_purchase_amount DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "max_discount_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_discount_amount DECIMAL(12,2)"
      },
      {
        "name": "usage_limit",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "usage_limit INTEGER"
      },
      {
        "name": "usage_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "usage_count INTEGER DEFAULT 0"
      },
      {
        "name": "per_user_limit",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "per_user_limit INTEGER DEFAULT 1"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID REFERENCES categories(id)"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id)"
      },
      {
        "name": "start_date",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date TIMESTAMP NOT NULL"
      },
      {
        "name": "end_date",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date TIMESTAMP NOT NULL"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-add-more-features-sql-credit-transactions",
    "sourceProject": "ebay",
    "name": "credit_transactions",
    "displayName": "Credit Transactions",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/add_more_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount NUMERIC(12, 2) NOT NULL"
      },
      {
        "name": "reason",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason VARCHAR(60) NOT NULL"
      },
      {
        "name": "gift_card_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gift_card_id UUID REFERENCES gift_cards(id)"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-currencies",
    "sourceProject": "ebay",
    "name": "currencies",
    "displayName": "Currencies",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "code VARCHAR(3) PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(50) NOT NULL"
      },
      {
        "name": "symbol",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol VARCHAR(5) NOT NULL"
      },
      {
        "name": "decimal_places",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "2",
        "sourceLine": "decimal_places INTEGER DEFAULT 2"
      },
      {
        "name": "exchange_rate_to_usd",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1.0",
        "sourceLine": "exchange_rate_to_usd DECIMAL(15,6) DEFAULT 1.0"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "last_updated",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-currencies",
    "sourceProject": "ebay",
    "name": "currencies",
    "displayName": "Currencies",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "code VARCHAR(3) NOT NULL UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(50) NOT NULL"
      },
      {
        "name": "symbol",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol VARCHAR(5) NOT NULL"
      },
      {
        "name": "exchange_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1.0",
        "sourceLine": "exchange_rate DECIMAL(12,6) DEFAULT 1.0"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-currency-rates",
    "sourceProject": "ebay",
    "name": "currency_rates",
    "displayName": "Currency Rates",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "code",
        "type": "CHAR",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "code CHAR(3) PRIMARY KEY"
      },
      {
        "name": "rate_to_usd",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rate_to_usd DECIMAL(14,6) NOT NULL"
      },
      {
        "name": "symbol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol VARCHAR(4)"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-daily-deals",
    "sourceProject": "ebay",
    "name": "daily_deals",
    "displayName": "Daily Deals",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "discount_percentage",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_percentage DECIMAL(5,2) NOT NULL"
      },
      {
        "name": "deal_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deal_price DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "original_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_price DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "start_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "start_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "end_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIMESTAMP NOT NULL"
      },
      {
        "name": "quantity_available",
        "type": "INT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity_available INT NOT NULL DEFAULT 1"
      },
      {
        "name": "quantity_sold",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantity_sold INT DEFAULT 0"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID REFERENCES categories(id)"
      },
      {
        "name": "featured",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "featured BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-digest-runs",
    "sourceProject": "ebay",
    "name": "digest_runs",
    "displayName": "Digest Runs",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "BIGSERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id BIGSERIAL PRIMARY KEY"
      },
      {
        "name": "job_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job_name VARCHAR(40) NOT NULL"
      },
      {
        "name": "run_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "run_date DATE NOT NULL"
      },
      {
        "name": "users_notified",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "users_notified INT DEFAULT 0"
      },
      {
        "name": "started_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "started_at TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "finished_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "finished_at TIMESTAMPTZ"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-dispute-messages",
    "sourceProject": "ebay",
    "name": "dispute_messages",
    "displayName": "Dispute Messages",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "dispute_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dispute_id UUID NOT NULL REFERENCES disputes(id) ON DELETE CASCADE"
      },
      {
        "name": "sender_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sender_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "attachments",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attachments TEXT[]"
      },
      {
        "name": "is_admin",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_admin BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-disputes",
    "sourceProject": "ebay",
    "name": "disputes",
    "displayName": "Disputes",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id)"
      },
      {
        "name": "order_item_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_item_id UUID REFERENCES order_items(id)"
      },
      {
        "name": "opened_by",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "opened_by UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "against_user",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "against_user UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "dispute_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dispute_type VARCHAR(50) NOT NULL CHECK (dispute_type IN ('item_not_received', 'item_not_as_described', 'unauthorized_purchase', 'other'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'open' CHECK (status IN ('open', 'pending_seller_response', 'pending_buyer_response', 'under_review', 'resolved', 'closed', 'escalated'))"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT NOT NULL"
      },
      {
        "name": "desired_resolution",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "desired_resolution VARCHAR(50) CHECK (desired_resolution IN ('full_refund', 'partial_refund', 'replacement', 'other'))"
      },
      {
        "name": "resolution_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution_type VARCHAR(50) CHECK (resolution_type IN ('refunded', 'partially_refunded', 'replaced', 'closed_no_action', 'favor_buyer', 'favor_seller'))"
      },
      {
        "name": "resolution_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution_notes TEXT"
      },
      {
        "name": "refund_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "refund_amount DECIMAL(12,2)"
      },
      {
        "name": "admin_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "admin_id UUID REFERENCES users(id)"
      },
      {
        "name": "escalated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "escalated_at TIMESTAMP"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-email-logs",
    "sourceProject": "ebay",
    "name": "email_logs",
    "displayName": "Email Logs",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id)"
      },
      {
        "name": "email_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "recipient_email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient_email VARCHAR(255) NOT NULL"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'sent'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'sent' CHECK (status IN ('pending', 'sent', 'failed', 'bounced'))"
      },
      {
        "name": "error_message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_message TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-security-features-sql-error-logs",
    "sourceProject": "ebay",
    "name": "error_logs",
    "displayName": "Error Logs",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_security_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "error_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "error_message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_message TEXT NOT NULL"
      },
      {
        "name": "error_stack",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_stack TEXT"
      },
      {
        "name": "component_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "component_name VARCHAR(255)"
      },
      {
        "name": "page_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "page_url TEXT"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "browser_info",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "browser_info JSONB DEFAULT '{}'"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'error'",
        "sourceLine": "severity VARCHAR(20) NOT NULL DEFAULT 'error' CHECK (severity IN ('info', 'warning', 'error', 'critical'))"
      },
      {
        "name": "is_resolved",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_resolved BOOLEAN DEFAULT false"
      },
      {
        "name": "occurrence_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "occurrence_count INTEGER DEFAULT 1"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-events",
    "sourceProject": "ebay",
    "name": "events",
    "displayName": "Events",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "BIGSERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id BIGSERIAL PRIMARY KEY"
      },
      {
        "name": "event_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_name VARCHAR(60) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "session_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session_id VARCHAR(64)"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE SET NULL"
      },
      {
        "name": "properties",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "properties JSONB"
      },
      {
        "name": "occurred_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "occurred_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-experiment-assignments",
    "sourceProject": "ebay",
    "name": "experiment_assignments",
    "displayName": "Experiment Assignments",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "BIGSERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id BIGSERIAL PRIMARY KEY"
      },
      {
        "name": "experiment_key",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "experiment_key VARCHAR(60) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "session_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session_id VARCHAR(64)"
      },
      {
        "name": "variant",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variant VARCHAR(30) NOT NULL"
      },
      {
        "name": "assigned_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "assigned_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-experiment-conversions",
    "sourceProject": "ebay",
    "name": "experiment_conversions",
    "displayName": "Experiment Conversions",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "BIGSERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id BIGSERIAL PRIMARY KEY"
      },
      {
        "name": "experiment_key",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "experiment_key VARCHAR(60) NOT NULL"
      },
      {
        "name": "variant",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variant VARCHAR(30) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "session_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "session_id VARCHAR(64)"
      },
      {
        "name": "goal",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "goal VARCHAR(40) NOT NULL"
      },
      {
        "name": "value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value DECIMAL(12,2)"
      },
      {
        "name": "occurred_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "occurred_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-experiments",
    "sourceProject": "ebay",
    "name": "experiments",
    "displayName": "Experiments",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(120)"
      },
      {
        "name": "variants",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variants JSONB NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'running'",
        "sourceLine": "status VARCHAR(15) DEFAULT 'running'"
      },
      {
        "name": "starts_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "starts_at TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "ends_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ends_at TIMESTAMPTZ"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-growth-features-sql-flash-sales",
    "sourceProject": "ebay",
    "name": "flash_sales",
    "displayName": "Flash Sales",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_growth_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "discount_pct",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_pct DECIMAL(5,2) NOT NULL CHECK (discount_pct > 0 AND discount_pct < 90)"
      },
      {
        "name": "starts_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "starts_at TIMESTAMP NOT NULL"
      },
      {
        "name": "ends_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ends_at TIMESTAMP NOT NULL"
      },
      {
        "name": "max_uses",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_uses INTEGER"
      },
      {
        "name": "uses_count",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "uses_count INTEGER NOT NULL DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-routes-batch09-gap-ai-js-gap-features",
    "sourceProject": "ebay",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/batch09GapAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-routes-batch09-gap-nonai-js-gap-features",
    "sourceProject": "ebay",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/batch09GapNonai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-add-more-features-sql-gift-cards",
    "sourceProject": "ebay",
    "name": "gift_cards",
    "displayName": "Gift Cards",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/add_more_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "code VARCHAR(20) NOT NULL UNIQUE"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount NUMERIC(12, 2) NOT NULL"
      },
      {
        "name": "purchased_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchased_by UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "redeemed_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "redeemed_by UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "redeemed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "redeemed_at TIMESTAMP"
      },
      {
        "name": "recipient_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient_email VARCHAR(255)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-growth-features-sql-group-buy-commitments",
    "sourceProject": "ebay",
    "name": "group_buy_commitments",
    "displayName": "Group Buy Commitments",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_growth_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "group_buy_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "group_buy_id UUID NOT NULL REFERENCES group_buys(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity INTEGER NOT NULL CHECK (quantity > 0)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-growth-features-sql-group-buys",
    "sourceProject": "ebay",
    "name": "group_buys",
    "displayName": "Group Buys",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_growth_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tiers",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tiers JSONB NOT NULL"
      },
      {
        "name": "starts_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "starts_at TIMESTAMP NOT NULL"
      },
      {
        "name": "ends_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ends_at TIMESTAMP NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(20) NOT NULL DEFAULT 'open'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-gsp-countries",
    "sourceProject": "ebay",
    "name": "gsp_countries",
    "displayName": "Gsp Countries",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "country_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "country_code VARCHAR(3) NOT NULL UNIQUE"
      },
      {
        "name": "country_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "is_supported",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_supported BOOLEAN DEFAULT true"
      },
      {
        "name": "base_shipping_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "base_shipping_rate DECIMAL(10,2)"
      },
      {
        "name": "estimated_days_min",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_days_min INT"
      },
      {
        "name": "estimated_days_max",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_days_max INT"
      },
      {
        "name": "duty_rate_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "duty_rate_percent DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "tax_rate_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax_rate_percent DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-gsp-shipments",
    "sourceProject": "ebay",
    "name": "gsp_shipments",
    "displayName": "Gsp Shipments",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id)"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID REFERENCES users(id)"
      },
      {
        "name": "domestic_tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "domestic_tracking_number VARCHAR(100)"
      },
      {
        "name": "domestic_carrier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "domestic_carrier VARCHAR(50)"
      },
      {
        "name": "domestic_shipped_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "domestic_shipped_at TIMESTAMP"
      },
      {
        "name": "domestic_received_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "domestic_received_at TIMESTAMP"
      },
      {
        "name": "hub_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Kentucky",
        "sourceLine": "hub_location VARCHAR(100) DEFAULT 'Kentucky"
      },
      {
        "name": "international_tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "international_tracking_number VARCHAR(100)"
      },
      {
        "name": "international_carrier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "international_carrier VARCHAR(50)"
      },
      {
        "name": "international_shipped_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "international_shipped_at TIMESTAMP"
      },
      {
        "name": "delivered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivered_at TIMESTAMP"
      },
      {
        "name": "customs_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customs_value DECIMAL(10,2)"
      },
      {
        "name": "import_duties",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "import_duties DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "import_taxes",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "import_taxes DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "customs_cleared",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "customs_cleared BOOLEAN DEFAULT false"
      },
      {
        "name": "customs_cleared_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customs_cleared_at TIMESTAMP"
      },
      {
        "name": "destination_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "destination_country VARCHAR(100)"
      },
      {
        "name": "destination_address",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "destination_address JSONB"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-international-shipping-rates",
    "sourceProject": "ebay",
    "name": "international_shipping_rates",
    "displayName": "International Shipping Rates",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "zone_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone_id UUID NOT NULL REFERENCES shipping_zones(id) ON DELETE CASCADE"
      },
      {
        "name": "service_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "base_rate",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "base_rate DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "per_pound_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "per_pound_rate DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "estimated_days_min",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_days_min INTEGER"
      },
      {
        "name": "estimated_days_max",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_days_max INTEGER"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-invoices",
    "sourceProject": "ebay",
    "name": "invoices",
    "displayName": "Invoices",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "invoice_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "invoice_number VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "tax_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax_amount DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "shipping_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "shipping_amount DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "discount_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "discount_amount DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "total_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(3) DEFAULT 'USD'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'issued'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'issued' CHECK (status IN ('draft', 'issued', 'paid', 'overdue', 'cancelled', 'refunded'))"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "paid_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paid_at TIMESTAMP WITH TIME ZONE"
      },
      {
        "name": "pdf_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pdf_url TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "billing_address",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_address JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-invoices",
    "sourceProject": "ebay",
    "name": "invoices",
    "displayName": "Invoices",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "invoice_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "invoice_number VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "shipping_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "shipping_cost DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "tax_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tax_amount DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "total_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "due_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date TIMESTAMP"
      },
      {
        "name": "paid_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paid_at TIMESTAMP"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-ip-reputation",
    "sourceProject": "ebay",
    "name": "ip_reputation",
    "displayName": "Ip Reputation",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "ip",
        "type": "INET",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip INET PRIMARY KEY"
      },
      {
        "name": "score",
        "type": "INT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "score INT NOT NULL DEFAULT 0"
      },
      {
        "name": "label",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "label VARCHAR(30)"
      },
      {
        "name": "last_seen_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "last_seen_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-listing-templates",
    "sourceProject": "ebay",
    "name": "listing_templates",
    "displayName": "Listing Templates",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID REFERENCES categories(id)"
      },
      {
        "name": "template_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "template_data JSONB NOT NULL"
      },
      {
        "name": "is_default",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_default BOOLEAN DEFAULT false"
      },
      {
        "name": "usage_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "usage_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-add-feature-extensions-sql-listing-templates",
    "sourceProject": "ebay",
    "name": "listing_templates",
    "displayName": "Listing Templates",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/add_feature_extensions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(120) NOT NULL"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID REFERENCES categories(id) ON DELETE SET NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition VARCHAR(50)"
      },
      {
        "name": "listing_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "listing_type VARCHAR(20)"
      },
      {
        "name": "starting_price",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "starting_price NUMERIC(12, 2)"
      },
      {
        "name": "buy_now_price",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buy_now_price NUMERIC(12, 2)"
      },
      {
        "name": "shipping_cost",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipping_cost NUMERIC(10, 2)"
      },
      {
        "name": "free_shipping",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "free_shipping BOOLEAN DEFAULT false"
      },
      {
        "name": "brand",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand VARCHAR(100)"
      },
      {
        "name": "duration_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_days INTEGER"
      },
      {
        "name": "item_specifics",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'::jsonb",
        "sourceLine": "item_specifics JSONB DEFAULT '{}'::jsonb"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-live-chat-messages",
    "sourceProject": "ebay",
    "name": "live_chat_messages",
    "displayName": "Live Chat Messages",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "stream_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stream_id UUID NOT NULL REFERENCES live_streams(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "is_pinned",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_pinned BOOLEAN DEFAULT false"
      },
      {
        "name": "is_highlighted",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_highlighted BOOLEAN DEFAULT false"
      },
      {
        "name": "is_deleted",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_deleted BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-live-stream-products",
    "sourceProject": "ebay",
    "name": "live_stream_products",
    "displayName": "Live Stream Products",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "stream_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stream_id UUID NOT NULL REFERENCES live_streams(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "flash_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "flash_price DECIMAL(12,2)"
      },
      {
        "name": "flash_start",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "flash_start TIMESTAMP"
      },
      {
        "name": "flash_end",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "flash_end TIMESTAMP"
      },
      {
        "name": "is_featured",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_featured BOOLEAN DEFAULT false"
      },
      {
        "name": "display_order",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "display_order INT DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-live-streams",
    "sourceProject": "ebay",
    "name": "live_streams",
    "displayName": "Live Streams",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'ended', 'cancelled'))"
      },
      {
        "name": "scheduled_start",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_start TIMESTAMP NOT NULL"
      },
      {
        "name": "actual_start",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_start TIMESTAMP"
      },
      {
        "name": "ended_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ended_at TIMESTAMP"
      },
      {
        "name": "viewer_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "viewer_count INT DEFAULT 0"
      },
      {
        "name": "peak_viewers",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "peak_viewers INT DEFAULT 0"
      },
      {
        "name": "stream_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stream_key VARCHAR(255)"
      },
      {
        "name": "stream_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stream_url VARCHAR(500)"
      },
      {
        "name": "playback_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "playback_url VARCHAR(500)"
      },
      {
        "name": "thumbnail_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "thumbnail_url VARCHAR(500)"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID REFERENCES categories(id)"
      },
      {
        "name": "is_featured",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_featured BOOLEAN DEFAULT false"
      },
      {
        "name": "replay_available",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "replay_available BOOLEAN DEFAULT false"
      },
      {
        "name": "replay_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "replay_url VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-local-pickup-appointments",
    "sourceProject": "ebay",
    "name": "local_pickup_appointments",
    "displayName": "Local Pickup Appointments",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id)"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id)"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID REFERENCES users(id)"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE"
      },
      {
        "name": "scheduled_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_time TIME"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "seller_confirmed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "seller_confirmed BOOLEAN DEFAULT false"
      },
      {
        "name": "buyer_confirmed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "buyer_confirmed BOOLEAN DEFAULT false"
      },
      {
        "name": "pickup_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickup_code VARCHAR(10)"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-local-pickup-settings",
    "sourceProject": "ebay",
    "name": "local_pickup_settings",
    "displayName": "Local Pickup Settings",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE UNIQUE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id)"
      },
      {
        "name": "offers_local_pickup",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "offers_local_pickup BOOLEAN DEFAULT false"
      },
      {
        "name": "pickup_only",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "pickup_only BOOLEAN DEFAULT false"
      },
      {
        "name": "pickup_address",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickup_address JSONB"
      },
      {
        "name": "pickup_city",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickup_city VARCHAR(100)"
      },
      {
        "name": "pickup_state",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickup_state VARCHAR(100)"
      },
      {
        "name": "pickup_zip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickup_zip VARCHAR(20)"
      },
      {
        "name": "pickup_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'US'",
        "sourceLine": "pickup_country VARCHAR(100) DEFAULT 'US'"
      },
      {
        "name": "latitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latitude DECIMAL(10,8)"
      },
      {
        "name": "longitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "longitude DECIMAL(11,8)"
      },
      {
        "name": "available_days",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "available_days JSONB"
      },
      {
        "name": "available_hours",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "available_hours JSONB"
      },
      {
        "name": "pickup_instructions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pickup_instructions TEXT"
      },
      {
        "name": "contact_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone VARCHAR(20)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-membership-exclusive-deals",
    "sourceProject": "ebay",
    "name": "membership_exclusive_deals",
    "displayName": "Membership Exclusive Deals",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "discount_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'percentage'",
        "sourceLine": "discount_type VARCHAR(20) DEFAULT 'percentage'"
      },
      {
        "name": "discount_value",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_value DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "membership_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "membership_required BOOLEAN DEFAULT true"
      },
      {
        "name": "start_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "start_date TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "end_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "(NOW()",
        "sourceLine": "end_date TIMESTAMP DEFAULT (NOW() + INTERVAL '30 days')"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-membership-exclusive-deals",
    "sourceProject": "ebay",
    "name": "membership_exclusive_deals",
    "displayName": "Membership Exclusive Deals",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(200) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "discount_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_type VARCHAR(20)"
      },
      {
        "name": "discount_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_value DECIMAL(10,2)"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id)"
      },
      {
        "name": "category_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id INT"
      },
      {
        "name": "start_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date TIMESTAMP"
      },
      {
        "name": "end_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date TIMESTAMP"
      },
      {
        "name": "max_uses",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_uses INT"
      },
      {
        "name": "current_uses",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_uses INT DEFAULT 0"
      },
      {
        "name": "membership_required",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "membership_required BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-membership-plans",
    "sourceProject": "ebay",
    "name": "membership_plans",
    "displayName": "Membership Plans",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "monthly_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthly_price DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "annual_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_price DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "free_shipping",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "free_shipping BOOLEAN DEFAULT false"
      },
      {
        "name": "free_returns",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "free_returns BOOLEAN DEFAULT false"
      },
      {
        "name": "extended_returns_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "30",
        "sourceLine": "extended_returns_days INTEGER DEFAULT 30"
      },
      {
        "name": "exclusive_deals",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "exclusive_deals BOOLEAN DEFAULT false"
      },
      {
        "name": "priority_support",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "priority_support BOOLEAN DEFAULT false"
      },
      {
        "name": "early_access",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "early_access BOOLEAN DEFAULT false"
      },
      {
        "name": "cashback_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cashback_percent DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-membership-plans",
    "sourceProject": "ebay",
    "name": "membership_plans",
    "displayName": "Membership Plans",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "monthly_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthly_price DECIMAL(10,2)"
      },
      {
        "name": "annual_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_price DECIMAL(10,2)"
      },
      {
        "name": "free_shipping",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "free_shipping BOOLEAN DEFAULT false"
      },
      {
        "name": "free_returns",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "free_returns BOOLEAN DEFAULT false"
      },
      {
        "name": "extended_returns_days",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "30",
        "sourceLine": "extended_returns_days INT DEFAULT 30"
      },
      {
        "name": "exclusive_deals",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "exclusive_deals BOOLEAN DEFAULT false"
      },
      {
        "name": "priority_support",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "priority_support BOOLEAN DEFAULT false"
      },
      {
        "name": "early_access",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "early_access BOOLEAN DEFAULT false"
      },
      {
        "name": "cashback_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cashback_percent DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-messages",
    "sourceProject": "ebay",
    "name": "messages",
    "displayName": "Messages",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "sender_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sender_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "recipient_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id)"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id)"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT NOT NULL"
      },
      {
        "name": "is_read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_read BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "parent_message_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_message_id UUID REFERENCES messages(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-moderation-reports",
    "sourceProject": "ebay",
    "name": "moderation_reports",
    "displayName": "Moderation Reports",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) NOT NULL DEFAULT 'pending'"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT"
      },
      {
        "name": "matched_terms",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_terms TEXT[]"
      },
      {
        "name": "reviewer_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewer_id UUID REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "reviewed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_at TIMESTAMPTZ"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-notification-preferences",
    "sourceProject": "ebay",
    "name": "notification_preferences",
    "displayName": "Notification Preferences",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "email_notifications",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "email_notifications BOOLEAN DEFAULT true"
      },
      {
        "name": "push_notifications",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "push_notifications BOOLEAN DEFAULT true"
      },
      {
        "name": "sms_notifications",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "sms_notifications BOOLEAN DEFAULT false"
      },
      {
        "name": "bid_outbid",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "bid_outbid BOOLEAN DEFAULT true"
      },
      {
        "name": "bid_won",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "bid_won BOOLEAN DEFAULT true"
      },
      {
        "name": "auction_ending",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "auction_ending BOOLEAN DEFAULT true"
      },
      {
        "name": "item_sold",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "item_sold BOOLEAN DEFAULT true"
      },
      {
        "name": "order_updates",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "order_updates BOOLEAN DEFAULT true"
      },
      {
        "name": "messages",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "messages BOOLEAN DEFAULT true"
      },
      {
        "name": "price_drops",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "price_drops BOOLEAN DEFAULT true"
      },
      {
        "name": "promotions",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "promotions BOOLEAN DEFAULT false"
      },
      {
        "name": "newsletter",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "newsletter BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-notification-subscriptions",
    "sourceProject": "ebay",
    "name": "notification_subscriptions",
    "displayName": "Notification Subscriptions",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id UUID NOT NULL"
      },
      {
        "name": "notify_on_bid",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "notify_on_bid BOOLEAN DEFAULT true"
      },
      {
        "name": "notify_on_outbid",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "notify_on_outbid BOOLEAN DEFAULT true"
      },
      {
        "name": "notify_on_price_change",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "notify_on_price_change BOOLEAN DEFAULT true"
      },
      {
        "name": "notify_on_ending_soon",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "notify_on_ending_soon BOOLEAN DEFAULT true"
      },
      {
        "name": "notify_on_sold",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "notify_on_sold BOOLEAN DEFAULT true"
      },
      {
        "name": "push_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "push_enabled BOOLEAN DEFAULT true"
      },
      {
        "name": "email_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "email_enabled BOOLEAN DEFAULT false"
      },
      {
        "name": "sms_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "sms_enabled BOOLEAN DEFAULT false"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-notifications",
    "sourceProject": "ebay",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50) NOT NULL CHECK (type IN ('bid_outbid', 'bid_won', 'auction_ending', 'item_sold', 'order_update', 'message', 'review', 'price_drop', 'watchlist', 'promotion'))"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "link",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "link VARCHAR(500)"
      },
      {
        "name": "is_read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_read BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-offers",
    "sourceProject": "ebay",
    "name": "offers",
    "displayName": "Offers",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "offer_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "offer_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity INTEGER DEFAULT 1"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined', 'countered', 'expired', 'withdrawn'))"
      },
      {
        "name": "counter_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "counter_amount DECIMAL(10,2)"
      },
      {
        "name": "counter_message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "counter_message TEXT"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "(NOW()",
        "sourceLine": "expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '48 hours')"
      },
      {
        "name": "responded_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responded_at TIMESTAMP WITH TIME ZONE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-offers",
    "sourceProject": "ebay",
    "name": "offers",
    "displayName": "Offers",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "offer_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "offer_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "counter_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "counter_amount DECIMAL(10,2)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "(NOW()",
        "sourceLine": "expires_at TIMESTAMP DEFAULT (NOW() + INTERVAL '48 hours')"
      },
      {
        "name": "responded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "responded_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-order-items",
    "sourceProject": "ebay",
    "name": "order_items",
    "displayName": "Order Items",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id)"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity INTEGER NOT NULL"
      },
      {
        "name": "unit_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_price DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "total_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_price DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-social-and-timeline-sql-order-status-history",
    "sourceProject": "ebay",
    "name": "order_status_history",
    "displayName": "Order Status History",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_social_and_timeline.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "from_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "from_status VARCHAR(30)"
      },
      {
        "name": "to_status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "to_status   VARCHAR(30) NOT NULL"
      },
      {
        "name": "note",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "note TEXT"
      },
      {
        "name": "changed_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "changed_by UUID REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-orders",
    "sourceProject": "ebay",
    "name": "orders",
    "displayName": "Orders",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "order_number VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "shipping_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.00",
        "sourceLine": "shipping_cost DECIMAL(10,2) DEFAULT 0.00"
      },
      {
        "name": "tax",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.00",
        "sourceLine": "tax DECIMAL(10,2) DEFAULT 0.00"
      },
      {
        "name": "total",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "shipping_address_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipping_address_id UUID REFERENCES addresses(id)"
      },
      {
        "name": "billing_address_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_address_id UUID REFERENCES addresses(id)"
      },
      {
        "name": "payment_method_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method_id UUID REFERENCES payment_methods(id)"
      },
      {
        "name": "payment_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "payment_status VARCHAR(30) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'processing', 'completed', 'failed', 'refunded'))"
      },
      {
        "name": "shipping_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipping_method VARCHAR(100)"
      },
      {
        "name": "tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number VARCHAR(100)"
      },
      {
        "name": "shipped_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipped_at TIMESTAMP"
      },
      {
        "name": "estimated_delivery",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_delivery TIMESTAMP"
      },
      {
        "name": "delivered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivered_at TIMESTAMP"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'))"
      },
      {
        "name": "buyer_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_notes TEXT"
      },
      {
        "name": "seller_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-security-features-sql-password-policies",
    "sourceProject": "ebay",
    "name": "password_policies",
    "displayName": "Password Policies",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_security_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "policy_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "policy_name VARCHAR(100) NOT NULL UNIQUE"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "min_length",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "8",
        "sourceLine": "min_length INTEGER NOT NULL DEFAULT 8"
      },
      {
        "name": "max_length",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "128",
        "sourceLine": "max_length INTEGER DEFAULT 128"
      },
      {
        "name": "require_uppercase",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "require_uppercase BOOLEAN DEFAULT true"
      },
      {
        "name": "require_lowercase",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "require_lowercase BOOLEAN DEFAULT true"
      },
      {
        "name": "require_number",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "require_number BOOLEAN DEFAULT true"
      },
      {
        "name": "require_special_char",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "require_special_char BOOLEAN DEFAULT true"
      },
      {
        "name": "max_age_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "90",
        "sourceLine": "max_age_days INTEGER DEFAULT 90"
      },
      {
        "name": "password_history_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "password_history_count INTEGER DEFAULT 5"
      },
      {
        "name": "applies_to",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'all'",
        "sourceLine": "applies_to VARCHAR(20) NOT NULL DEFAULT 'all' CHECK (applies_to IN ('all', 'admin', 'seller', 'buyer'))"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-password-reset-tokens",
    "sourceProject": "ebay",
    "name": "password_reset_tokens",
    "displayName": "Password Reset Tokens",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "token",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "token VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "used",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "used BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-payment-methods",
    "sourceProject": "ebay",
    "name": "payment_methods",
    "displayName": "Payment Methods",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "payment_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_type VARCHAR(50) NOT NULL CHECK (payment_type IN ('credit_card', 'debit_card', 'paypal', 'bank_account'))"
      },
      {
        "name": "is_default",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_default BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "card_last_four",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "card_last_four VARCHAR(4)"
      },
      {
        "name": "card_brand",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "card_brand VARCHAR(50)"
      },
      {
        "name": "card_exp_month",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "card_exp_month INTEGER"
      },
      {
        "name": "card_exp_year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "card_exp_year INTEGER"
      },
      {
        "name": "billing_address_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billing_address_id UUID REFERENCES addresses(id)"
      },
      {
        "name": "paypal_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paypal_email VARCHAR(255)"
      },
      {
        "name": "bank_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bank_name VARCHAR(100)"
      },
      {
        "name": "bank_account_last_four",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bank_account_last_four VARCHAR(4)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-payment-plan-installments",
    "sourceProject": "ebay",
    "name": "payment_plan_installments",
    "displayName": "Payment Plan Installments",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "plan_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_id UUID NOT NULL REFERENCES payment_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "installment_number",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "installment_number INTEGER NOT NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE NOT NULL"
      },
      {
        "name": "paid_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paid_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'overdue', 'failed'))"
      },
      {
        "name": "payment_method_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method_id UUID REFERENCES payment_methods(id)"
      },
      {
        "name": "transaction_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_id VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-payment-plan-installments",
    "sourceProject": "ebay",
    "name": "payment_plan_installments",
    "displayName": "Payment Plan Installments",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "plan_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_id UUID REFERENCES payment_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "installment_number",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "installment_number INTEGER NOT NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "due_date",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date TIMESTAMP NOT NULL"
      },
      {
        "name": "paid_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paid_date TIMESTAMP"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-payment-plans",
    "sourceProject": "ebay",
    "name": "payment_plans",
    "displayName": "Payment Plans",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "plan_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_type VARCHAR(20) NOT NULL CHECK (plan_type IN ('pay_in_4', 'pay_monthly', 'pay_in_6'))"
      },
      {
        "name": "total_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "installment_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "installment_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "installments_total",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "installments_total INTEGER NOT NULL"
      },
      {
        "name": "installments_paid",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "installments_paid INTEGER DEFAULT 0"
      },
      {
        "name": "interest_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "interest_rate DECIMAL(5,4) DEFAULT 0"
      },
      {
        "name": "next_payment_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_payment_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'defaulted', 'cancelled'))"
      },
      {
        "name": "provider",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider VARCHAR(50)"
      },
      {
        "name": "external_plan_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "external_plan_id VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-payment-plans",
    "sourceProject": "ebay",
    "name": "payment_plans",
    "displayName": "Payment Plans",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "total_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "num_installments",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "num_installments INTEGER NOT NULL"
      },
      {
        "name": "installment_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "installment_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "interest_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "interest_rate DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'active'"
      },
      {
        "name": "next_payment_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_payment_date TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-payment-transactions",
    "sourceProject": "ebay",
    "name": "payment_transactions",
    "displayName": "Payment Transactions",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id)"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "stripe_payment_intent_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripe_payment_intent_id VARCHAR(255)"
      },
      {
        "name": "stripe_charge_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripe_charge_id VARCHAR(255)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'usd'",
        "sourceLine": "currency VARCHAR(3) DEFAULT 'usd'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'succeeded', 'failed', 'refunded', 'partially_refunded'))"
      },
      {
        "name": "payment_method_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method_type VARCHAR(50)"
      },
      {
        "name": "receipt_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receipt_url VARCHAR(500)"
      },
      {
        "name": "refund_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "refund_amount DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "metadata",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metadata JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-pickup-appointments",
    "sourceProject": "ebay",
    "name": "pickup_appointments",
    "displayName": "Pickup Appointments",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE NOT NULL"
      },
      {
        "name": "scheduled_time_start",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_time_start TIME"
      },
      {
        "name": "scheduled_time_end",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_time_end TIME"
      },
      {
        "name": "location_address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_address TEXT"
      },
      {
        "name": "location_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_notes TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'confirmed', 'completed', 'cancelled', 'no_show'))"
      },
      {
        "name": "confirmation_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confirmation_code VARCHAR(10)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-pickup-appointments",
    "sourceProject": "ebay",
    "name": "pickup_appointments",
    "displayName": "Pickup Appointments",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "location_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location_id UUID REFERENCES pickup_locations(id) ON DELETE SET NULL"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE NOT NULL"
      },
      {
        "name": "scheduled_time",
        "type": "TIME",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_time TIME NOT NULL"
      },
      {
        "name": "confirmation_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confirmation_code VARCHAR(20)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'scheduled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-pickup-locations",
    "sourceProject": "ebay",
    "name": "pickup_locations",
    "displayName": "Pickup Locations",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address TEXT NOT NULL"
      },
      {
        "name": "city",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city VARCHAR(100)"
      },
      {
        "name": "state",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state VARCHAR(50)"
      },
      {
        "name": "postal_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "postal_code VARCHAR(20)"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'US'",
        "sourceLine": "country VARCHAR(2) DEFAULT 'US'"
      },
      {
        "name": "latitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latitude DECIMAL(10,8)"
      },
      {
        "name": "longitude",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "longitude DECIMAL(11,8)"
      },
      {
        "name": "hours_of_operation",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours_of_operation JSONB"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-price-alerts",
    "sourceProject": "ebay",
    "name": "price_alerts",
    "displayName": "Price Alerts",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "target_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_price DECIMAL(10,2)"
      },
      {
        "name": "alert_on_any_drop",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "alert_on_any_drop BOOLEAN DEFAULT true"
      },
      {
        "name": "percentage_drop",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "percentage_drop INTEGER"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "last_notified_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_notified_at TIMESTAMP WITH TIME ZONE"
      },
      {
        "name": "last_notified_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_notified_price DECIMAL(10,2)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-price-alerts",
    "sourceProject": "ebay",
    "name": "price_alerts",
    "displayName": "Price Alerts",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "target_price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_price DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "original_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_price DECIMAL(10,2)"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "notify_email",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "notify_email BOOLEAN DEFAULT true"
      },
      {
        "name": "notify_push",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "notify_push BOOLEAN DEFAULT false"
      },
      {
        "name": "triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "triggered_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-price-history",
    "sourceProject": "ebay",
    "name": "price_history",
    "displayName": "Price History",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "price_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'buy_now'",
        "sourceLine": "price_type VARCHAR(20) DEFAULT 'buy_now' CHECK (price_type IN ('buy_now', 'starting', 'current_bid', 'reserve'))"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-price-history",
    "sourceProject": "ebay",
    "name": "price_history",
    "displayName": "Price History",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "price",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "recorded_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "recorded_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-product-answers",
    "sourceProject": "ebay",
    "name": "product_answers",
    "displayName": "Product Answers",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "question_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "question_id UUID NOT NULL REFERENCES product_questions(id) ON DELETE CASCADE"
      },
      {
        "name": "answerer_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "answerer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "answer",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "answer TEXT NOT NULL"
      },
      {
        "name": "is_seller_answer",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_seller_answer BOOLEAN DEFAULT false"
      },
      {
        "name": "helpful_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "helpful_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-product-answers",
    "sourceProject": "ebay",
    "name": "product_answers",
    "displayName": "Product Answers",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "question_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "question_id UUID REFERENCES product_questions(id) ON DELETE CASCADE"
      },
      {
        "name": "answerer_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "answerer_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "answer",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "answer TEXT NOT NULL"
      },
      {
        "name": "is_seller_answer",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_seller_answer BOOLEAN DEFAULT false"
      },
      {
        "name": "helpful_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "helpful_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-product-images",
    "sourceProject": "ebay",
    "name": "product_images",
    "displayName": "Product Images",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "image_url",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url VARCHAR(500) NOT NULL"
      },
      {
        "name": "thumbnail_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "thumbnail_url VARCHAR(500)"
      },
      {
        "name": "alt_text",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alt_text VARCHAR(255)"
      },
      {
        "name": "sort_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sort_order INTEGER DEFAULT 0"
      },
      {
        "name": "is_primary",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_primary BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-price-history-sql-product-price-history",
    "sourceProject": "ebay",
    "name": "product_price_history",
    "displayName": "Product Price History",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_price_history.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "price_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price_type VARCHAR(20) NOT NULL"
      },
      {
        "name": "old_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "old_price DECIMAL(10,2)"
      },
      {
        "name": "new_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "new_price DECIMAL(10,2)"
      },
      {
        "name": "changed_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "changed_by UUID REFERENCES users(id)"
      },
      {
        "name": "changed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-product-quality-scores",
    "sourceProject": "ebay",
    "name": "product_quality_scores",
    "displayName": "Product Quality Scores",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE UNIQUE"
      },
      {
        "name": "title_quality_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "title_quality_score INT DEFAULT 50"
      },
      {
        "name": "description_quality_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "description_quality_score INT DEFAULT 50"
      },
      {
        "name": "image_quality_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "image_quality_score INT DEFAULT 50"
      },
      {
        "name": "item_specifics_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "item_specifics_score INT DEFAULT 50"
      },
      {
        "name": "seller_rating_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "seller_rating_score INT DEFAULT 50"
      },
      {
        "name": "seller_history_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "seller_history_score INT DEFAULT 50"
      },
      {
        "name": "price_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "price_score INT DEFAULT 50"
      },
      {
        "name": "shipping_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "shipping_score INT DEFAULT 50"
      },
      {
        "name": "click_through_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "click_through_rate DECIMAL(5,4) DEFAULT 0"
      },
      {
        "name": "conversion_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "conversion_rate DECIMAL(5,4) DEFAULT 0"
      },
      {
        "name": "best_match_score",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "best_match_score INT DEFAULT 50"
      },
      {
        "name": "last_calculated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "last_calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-product-questions",
    "sourceProject": "ebay",
    "name": "product_questions",
    "displayName": "Product Questions",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "asker_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asker_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "question",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "question TEXT NOT NULL"
      },
      {
        "name": "is_public",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_public BOOLEAN DEFAULT true"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'answered', 'rejected'))"
      },
      {
        "name": "helpful_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "helpful_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-product-questions",
    "sourceProject": "ebay",
    "name": "product_questions",
    "displayName": "Product Questions",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "asker_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asker_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "question",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "question TEXT NOT NULL"
      },
      {
        "name": "helpful_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "helpful_count INTEGER DEFAULT 0"
      },
      {
        "name": "is_answered",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_answered BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-product-recommendations",
    "sourceProject": "ebay",
    "name": "product_recommendations",
    "displayName": "Product Recommendations",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "recommended_product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommended_product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "recommendation_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'similar'",
        "sourceLine": "recommendation_type VARCHAR(30) DEFAULT 'similar' CHECK (recommendation_type IN ('similar', 'frequently_bought_together', 'customers_also_viewed', 'sponsored'))"
      },
      {
        "name": "score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.5",
        "sourceLine": "score DECIMAL(5,4) DEFAULT 0.5"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-seed-specifications-sql-product-specifications",
    "sourceProject": "ebay",
    "name": "product_specifications",
    "displayName": "Product Specifications",
    "framework": "SQL",
    "sourceFile": "database/seed_specifications.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "spec_group",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spec_group VARCHAR(100) NOT NULL"
      },
      {
        "name": "spec_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spec_name VARCHAR(150) NOT NULL"
      },
      {
        "name": "spec_value",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spec_value TEXT NOT NULL"
      },
      {
        "name": "display_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "display_order INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-products",
    "sourceProject": "ebay",
    "name": "products",
    "displayName": "Products",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID NOT NULL REFERENCES categories(id)"
      },
      {
        "name": "subcategory_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subcategory_id UUID REFERENCES subcategories(id)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(300) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT NOT NULL"
      },
      {
        "name": "condition",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition VARCHAR(50) NOT NULL CHECK (condition IN ('new', 'like_new', 'very_good', 'good', 'acceptable', 'for_parts'))"
      },
      {
        "name": "condition_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition_description TEXT"
      },
      {
        "name": "listing_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "listing_type VARCHAR(20) NOT NULL CHECK (listing_type IN ('auction', 'buy_now', 'both'))"
      },
      {
        "name": "starting_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "starting_price DECIMAL(12,2)"
      },
      {
        "name": "current_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_price DECIMAL(12,2)"
      },
      {
        "name": "buy_now_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buy_now_price DECIMAL(12,2)"
      },
      {
        "name": "reserve_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reserve_price DECIMAL(12,2)"
      },
      {
        "name": "auction_start",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "auction_start TIMESTAMP"
      },
      {
        "name": "auction_end",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "auction_end TIMESTAMP"
      },
      {
        "name": "bid_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "bid_count INTEGER DEFAULT 0"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity INTEGER DEFAULT 1"
      },
      {
        "name": "quantity_sold",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "quantity_sold INTEGER DEFAULT 0"
      },
      {
        "name": "shipping_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.00",
        "sourceLine": "shipping_cost DECIMAL(10,2) DEFAULT 0.00"
      },
      {
        "name": "free_shipping",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "free_shipping BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "shipping_from_city",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipping_from_city VARCHAR(100)"
      },
      {
        "name": "shipping_from_state",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipping_from_state VARCHAR(100)"
      },
      {
        "name": "shipping_from_country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'United",
        "sourceLine": "shipping_from_country VARCHAR(100) DEFAULT 'United States'"
      },
      {
        "name": "estimated_delivery_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_delivery_days INTEGER"
      },
      {
        "name": "brand",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand VARCHAR(100)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(100)"
      },
      {
        "name": "sku",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sku VARCHAR(100)"
      },
      {
        "name": "upc",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "upc VARCHAR(50)"
      },
      {
        "name": "weight",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weight DECIMAL(10,2)"
      },
      {
        "name": "dimensions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions VARCHAR(100)"
      },
      {
        "name": "color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color VARCHAR(50)"
      },
      {
        "name": "size",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size VARCHAR(50)"
      },
      {
        "name": "material",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material VARCHAR(100)"
      },
      {
        "name": "view_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "view_count INTEGER DEFAULT 0"
      },
      {
        "name": "watch_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "watch_count INTEGER DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('draft', 'active', 'sold', 'ended', 'cancelled'))"
      },
      {
        "name": "featured",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "featured BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "promoted",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "promoted BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-prohibited-terms",
    "sourceProject": "ebay",
    "name": "prohibited_terms",
    "displayName": "Prohibited Terms",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "pattern",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pattern TEXT NOT NULL"
      },
      {
        "name": "is_regex",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_regex BOOLEAN DEFAULT false"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(40) NOT NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'block'",
        "sourceLine": "severity VARCHAR(10) NOT NULL DEFAULT 'block'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-promotion-bids",
    "sourceProject": "ebay",
    "name": "promotion_bids",
    "displayName": "Promotion Bids",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "cpc_bid",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cpc_bid DECIMAL(8,2) NOT NULL"
      },
      {
        "name": "daily_budget",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "daily_budget DECIMAL(10,2)"
      },
      {
        "name": "spent_today",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "spent_today DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(15) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-promotion-events",
    "sourceProject": "ebay",
    "name": "promotion_events",
    "displayName": "Promotion Events",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "BIGSERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id BIGSERIAL PRIMARY KEY"
      },
      {
        "name": "promotion_bid_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "promotion_bid_id UUID REFERENCES promotion_bids(id) ON DELETE CASCADE"
      },
      {
        "name": "kind",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "kind VARCHAR(15) NOT NULL"
      },
      {
        "name": "cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cost DECIMAL(8,2) DEFAULT 0"
      },
      {
        "name": "occurred_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "occurred_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-proxy-bids",
    "sourceProject": "ebay",
    "name": "proxy_bids",
    "displayName": "Proxy Bids",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "bidder_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bidder_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "max_bid_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_bid_amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "current_proxy_bid",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_proxy_bid DECIMAL(10,2)"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "is_winning",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_winning BOOLEAN DEFAULT false"
      },
      {
        "name": "outbid_notifications",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "outbid_notifications BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-qa-upvotes-sql-qa-upvotes",
    "sourceProject": "ebay",
    "name": "qa_upvotes",
    "displayName": "Qa Upvotes",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_qa_upvotes.sql",
    "columns": [
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "target_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_type VARCHAR(10) NOT NULL CHECK (target_type IN ('question', 'answer'))"
      },
      {
        "name": "target_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_id UUID NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-recently-viewed",
    "sourceProject": "ebay",
    "name": "recently_viewed",
    "displayName": "Recently Viewed",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "view_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "view_count INTEGER DEFAULT 1"
      },
      {
        "name": "first_viewed_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "first_viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "last_viewed_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "last_viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-recently-viewed",
    "sourceProject": "ebay",
    "name": "recently_viewed",
    "displayName": "Recently Viewed",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "viewed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "viewed_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-growth-features-sql-referral-rewards",
    "sourceProject": "ebay",
    "name": "referral_rewards",
    "displayName": "Referral Rewards",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_growth_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "referrer_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referrer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "referred_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referred_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "event",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event VARCHAR(24) NOT NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-reserve-price-history",
    "sourceProject": "ebay",
    "name": "reserve_price_history",
    "displayName": "Reserve Price History",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "previous_reserve",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "previous_reserve DECIMAL(10,2)"
      },
      {
        "name": "new_reserve",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "new_reserve DECIMAL(10,2)"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT"
      },
      {
        "name": "changed_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "changed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-returns",
    "sourceProject": "ebay",
    "name": "returns",
    "displayName": "Returns",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id)"
      },
      {
        "name": "order_item_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_item_id UUID REFERENCES order_items(id)"
      },
      {
        "name": "buyer_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "buyer_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "return_reason",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "return_reason VARCHAR(50) NOT NULL CHECK (return_reason IN ('changed_mind', 'defective', 'not_as_described', 'wrong_item', 'arrived_late', 'other'))"
      },
      {
        "name": "return_details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "return_details TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'requested'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'requested' CHECK (status IN ('requested', 'approved', 'rejected', 'shipped', 'received', 'refunded', 'closed'))"
      },
      {
        "name": "return_shipping_label",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "return_shipping_label VARCHAR(500)"
      },
      {
        "name": "tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number VARCHAR(100)"
      },
      {
        "name": "refund_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "refund_amount DECIMAL(12,2)"
      },
      {
        "name": "refund_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "refund_type VARCHAR(30) CHECK (refund_type IN ('full', 'partial', 'store_credit'))"
      },
      {
        "name": "seller_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-reviews",
    "sourceProject": "ebay",
    "name": "reviews",
    "displayName": "Reviews",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id)"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id)"
      },
      {
        "name": "reviewer_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewer_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "reviewed_user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewed_user_id UUID REFERENCES users(id)"
      },
      {
        "name": "review_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review_type VARCHAR(20) NOT NULL CHECK (review_type IN ('product', 'seller', 'buyer'))"
      },
      {
        "name": "rating",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "comment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comment TEXT"
      },
      {
        "name": "is_verified_purchase",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_verified_purchase BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "helpful_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "helpful_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-rewards-program",
    "sourceProject": "ebay",
    "name": "rewards_program",
    "displayName": "Rewards Program",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'bronze'",
        "sourceLine": "tier VARCHAR(20) DEFAULT 'bronze' CHECK (tier IN ('bronze', 'silver', 'gold', 'platinum'))"
      },
      {
        "name": "total_points",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_points INTEGER DEFAULT 0"
      },
      {
        "name": "available_points",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "available_points INTEGER DEFAULT 0"
      },
      {
        "name": "lifetime_points",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "lifetime_points INTEGER DEFAULT 0"
      },
      {
        "name": "points_expiring_soon",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "points_expiring_soon INTEGER DEFAULT 0"
      },
      {
        "name": "expiring_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiring_date DATE"
      },
      {
        "name": "joined_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "tier_updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "tier_updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-rewards-tiers",
    "sourceProject": "ebay",
    "name": "rewards_tiers",
    "displayName": "Rewards Tiers",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "tier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tier VARCHAR(20) PRIMARY KEY"
      },
      {
        "name": "min_points",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "min_points INTEGER NOT NULL"
      },
      {
        "name": "earn_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.01",
        "sourceLine": "earn_rate DECIMAL(5,4) DEFAULT 0.01"
      },
      {
        "name": "bonus_multiplier",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1.0",
        "sourceLine": "bonus_multiplier DECIMAL(3,2) DEFAULT 1.0"
      },
      {
        "name": "perks",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "perks JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-rewards-tiers",
    "sourceProject": "ebay",
    "name": "rewards_tiers",
    "displayName": "Rewards Tiers",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(50) NOT NULL"
      },
      {
        "name": "min_points",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "min_points INTEGER NOT NULL"
      },
      {
        "name": "max_points",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_points INTEGER"
      },
      {
        "name": "multiplier",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1.0",
        "sourceLine": "multiplier DECIMAL(3,2) DEFAULT 1.0"
      },
      {
        "name": "perks",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "perks TEXT[]"
      },
      {
        "name": "badge_color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "badge_color VARCHAR(20)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-rewards-transactions",
    "sourceProject": "ebay",
    "name": "rewards_transactions",
    "displayName": "Rewards Transactions",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id)"
      },
      {
        "name": "transaction_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_type VARCHAR(20) NOT NULL CHECK (transaction_type IN ('earned', 'redeemed', 'expired', 'bonus', 'adjustment'))"
      },
      {
        "name": "points",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "points INTEGER NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "expires_at",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-rewards-transactions",
    "sourceProject": "ebay",
    "name": "rewards_transactions",
    "displayName": "Rewards Transactions",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id) ON DELETE SET NULL"
      },
      {
        "name": "points",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "points INTEGER NOT NULL"
      },
      {
        "name": "transaction_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-saved-search-last-run",
    "sourceProject": "ebay",
    "name": "saved_search_last_run",
    "displayName": "Saved Search Last Run",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "saved_search_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "saved_search_id UUID PRIMARY KEY"
      },
      {
        "name": "last_run_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "last_run_at TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "last_seen_product_ids",
        "type": "UUID[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ARRAY[]::UUID[]",
        "sourceLine": "last_seen_product_ids UUID[] DEFAULT ARRAY[]::UUID[]"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-saved-searches",
    "sourceProject": "ebay",
    "name": "saved_searches",
    "displayName": "Saved Searches",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "search_query",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "search_query VARCHAR(255)"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID REFERENCES categories(id)"
      },
      {
        "name": "subcategory_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subcategory_id UUID REFERENCES subcategories(id)"
      },
      {
        "name": "min_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "min_price DECIMAL(12,2)"
      },
      {
        "name": "max_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_price DECIMAL(12,2)"
      },
      {
        "name": "condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition VARCHAR(50)"
      },
      {
        "name": "listing_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "listing_type VARCHAR(20)"
      },
      {
        "name": "free_shipping",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "free_shipping BOOLEAN"
      },
      {
        "name": "email_alerts",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "email_alerts BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "alert_frequency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'daily'",
        "sourceLine": "alert_frequency VARCHAR(20) DEFAULT 'daily' CHECK (alert_frequency IN ('instant', 'daily', 'weekly'))"
      },
      {
        "name": "last_alert_sent",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_alert_sent TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-scheduled-listing-log",
    "sourceProject": "ebay",
    "name": "scheduled_listing_log",
    "displayName": "Scheduled Listing Log",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(20) NOT NULL CHECK (action IN ('scheduled', 'published', 'ended', 'cancelled'))"
      },
      {
        "name": "scheduled_for",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_for TIMESTAMP WITH TIME ZONE"
      },
      {
        "name": "executed_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "executed_at TIMESTAMP WITH TIME ZONE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-search-impressions",
    "sourceProject": "ebay",
    "name": "search_impressions",
    "displayName": "Search Impressions",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id)"
      },
      {
        "name": "search_query",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "search_query VARCHAR(500)"
      },
      {
        "name": "position_shown",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "position_shown INT"
      },
      {
        "name": "clicked",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "clicked BOOLEAN DEFAULT false"
      },
      {
        "name": "clicked_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clicked_at TIMESTAMP"
      },
      {
        "name": "purchased",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "purchased BOOLEAN DEFAULT false"
      },
      {
        "name": "purchased_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchased_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-security-features-sql-security-audit-logs",
    "sourceProject": "ebay",
    "name": "security_audit_logs",
    "displayName": "Security Audit Logs",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_security_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "event_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "severity VARCHAR(20) NOT NULL DEFAULT 'info' CHECK (severity IN ('info', 'low', 'medium', 'high', 'critical'))"
      },
      {
        "name": "source_ip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_ip VARCHAR(45)"
      },
      {
        "name": "user_agent",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_agent TEXT"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "request_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_url TEXT"
      },
      {
        "name": "header_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "header_name VARCHAR(255)"
      },
      {
        "name": "blocked",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "blocked BOOLEAN DEFAULT false"
      },
      {
        "name": "resolved",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "resolved BOOLEAN DEFAULT false"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "details JSONB DEFAULT '{}'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-seller-benefits",
    "sourceProject": "ebay",
    "name": "seller_benefits",
    "displayName": "Seller Benefits",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "performance_level",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "performance_level VARCHAR(50) NOT NULL"
      },
      {
        "name": "benefit_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "benefit_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "benefit_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "benefit_description TEXT"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-seller-defects",
    "sourceProject": "ebay",
    "name": "seller_defects",
    "displayName": "Seller Defects",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id) ON DELETE SET NULL"
      },
      {
        "name": "defect_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "occurred_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "occurred_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "(NOW()",
        "sourceLine": "expires_at TIMESTAMP DEFAULT (NOW() + INTERVAL '12 months')"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'active'"
      },
      {
        "name": "appeal_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appeal_status VARCHAR(20)"
      },
      {
        "name": "appeal_reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appeal_reason TEXT"
      },
      {
        "name": "appeal_submitted_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appeal_submitted_at TIMESTAMP"
      },
      {
        "name": "appeal_resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appeal_resolved_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-seller-defects",
    "sourceProject": "ebay",
    "name": "seller_defects",
    "displayName": "Seller Defects",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID REFERENCES orders(id)"
      },
      {
        "name": "defect_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "defect_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defect_date DATE"
      },
      {
        "name": "resolved",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "resolved BOOLEAN DEFAULT false"
      },
      {
        "name": "resolved_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_date DATE"
      },
      {
        "name": "resolution_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution_notes TEXT"
      },
      {
        "name": "counts_toward_rate",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "counts_toward_rate BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-social-and-timeline-sql-seller-follows",
    "sourceProject": "ebay",
    "name": "seller_follows",
    "displayName": "Seller Follows",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_social_and_timeline.sql",
    "columns": [
      {
        "name": "follower_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "follower_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id   UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-platform-features-sql-seller-onboarding",
    "sourceProject": "ebay",
    "name": "seller_onboarding",
    "displayName": "Seller Onboarding",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_platform_features.sql",
    "columns": [
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "step_account",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "step_account BOOLEAN DEFAULT false"
      },
      {
        "name": "step_identity",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "step_identity BOOLEAN DEFAULT false"
      },
      {
        "name": "step_payout",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "step_payout BOOLEAN DEFAULT false"
      },
      {
        "name": "step_tax",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "step_tax BOOLEAN DEFAULT false"
      },
      {
        "name": "step_policies",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "step_policies BOOLEAN DEFAULT false"
      },
      {
        "name": "step_first_listing",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "step_first_listing BOOLEAN DEFAULT false"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMPTZ"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-stripe-payouts-sql-seller-payouts",
    "sourceProject": "ebay",
    "name": "seller_payouts",
    "displayName": "Seller Payouts",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_stripe_payouts.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id                 UUID        PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id           UUID        NOT NULL REFERENCES orders(id) ON DELETE RESTRICT"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id          UUID        NOT NULL REFERENCES users(id)  ON DELETE RESTRICT"
      },
      {
        "name": "stripe_transfer_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stripe_transfer_id VARCHAR(255) NOT NULL"
      },
      {
        "name": "gross_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gross_amount       DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "platform_fee",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.00",
        "sourceLine": "platform_fee       DECIMAL(10,2) NOT NULL DEFAULT 0.00"
      },
      {
        "name": "net_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "net_amount         DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status             VARCHAR(50)  NOT NULL DEFAULT 'pending'\n                           CHECK (status IN ('pending', 'succeeded', 'failed'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at         TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at         TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-seller-performance",
    "sourceProject": "ebay",
    "name": "seller_performance",
    "displayName": "Seller Performance",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE"
      },
      {
        "name": "performance_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'standard'",
        "sourceLine": "performance_level VARCHAR(50) DEFAULT 'standard'"
      },
      {
        "name": "defect_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "defect_rate DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "late_shipment_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "late_shipment_rate DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "tracking_uploaded_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "100",
        "sourceLine": "tracking_uploaded_rate DECIMAL(5,2) DEFAULT 100"
      },
      {
        "name": "cases_closed_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cases_closed_rate DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "total_transactions",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_transactions INTEGER DEFAULT 0"
      },
      {
        "name": "positive_feedback_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "100",
        "sourceLine": "positive_feedback_rate DECIMAL(5,2) DEFAULT 100"
      },
      {
        "name": "evaluated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "evaluated_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "next_evaluation",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "(NOW()",
        "sourceLine": "next_evaluation TIMESTAMP DEFAULT (NOW() + INTERVAL '30 days')"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-seller-performance",
    "sourceProject": "ebay",
    "name": "seller_performance",
    "displayName": "Seller Performance",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE"
      },
      {
        "name": "total_transactions",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_transactions INT DEFAULT 0"
      },
      {
        "name": "defect_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "defect_count INT DEFAULT 0"
      },
      {
        "name": "defect_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "defect_rate DECIMAL(5,4) DEFAULT 0"
      },
      {
        "name": "late_shipment_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "late_shipment_count INT DEFAULT 0"
      },
      {
        "name": "late_shipment_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "late_shipment_rate DECIMAL(5,4) DEFAULT 0"
      },
      {
        "name": "cases_closed_without_resolution",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cases_closed_without_resolution INT DEFAULT 0"
      },
      {
        "name": "case_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "case_rate DECIMAL(5,4) DEFAULT 0"
      },
      {
        "name": "tracking_uploaded_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tracking_uploaded_count INT DEFAULT 0"
      },
      {
        "name": "tracking_uploaded_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tracking_uploaded_rate DECIMAL(5,4) DEFAULT 0"
      },
      {
        "name": "positive_feedback_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "positive_feedback_count INT DEFAULT 0"
      },
      {
        "name": "negative_feedback_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "negative_feedback_count INT DEFAULT 0"
      },
      {
        "name": "neutral_feedback_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "neutral_feedback_count INT DEFAULT 0"
      },
      {
        "name": "feedback_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "100",
        "sourceLine": "feedback_score DECIMAL(5,2) DEFAULT 100"
      },
      {
        "name": "seller_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'standard'",
        "sourceLine": "seller_level VARCHAR(50) DEFAULT 'standard'"
      },
      {
        "name": "top_rated_since",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "top_rated_since DATE"
      },
      {
        "name": "below_standard_since",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "below_standard_since DATE"
      },
      {
        "name": "final_value_fee_discount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "final_value_fee_discount DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "promoted_listing_discount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "promoted_listing_discount DECIMAL(5,2) DEFAULT 0"
      },
      {
        "name": "selling_restricted",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "selling_restricted BOOLEAN DEFAULT false"
      },
      {
        "name": "listing_limit",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "listing_limit INT"
      },
      {
        "name": "evaluation_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evaluation_date DATE"
      },
      {
        "name": "next_evaluation_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_evaluation_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-seller-stores",
    "sourceProject": "ebay",
    "name": "seller_stores",
    "displayName": "Seller Stores",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "store_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "store_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "store_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "store_slug VARCHAR(100) UNIQUE"
      },
      {
        "name": "tagline",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tagline VARCHAR(200)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "logo_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo_url TEXT"
      },
      {
        "name": "banner_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "banner_url TEXT"
      },
      {
        "name": "theme_color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'#3665f3'",
        "sourceLine": "theme_color VARCHAR(7) DEFAULT '#3665f3'"
      },
      {
        "name": "custom_css",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "custom_css TEXT"
      },
      {
        "name": "policies",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "policies TEXT"
      },
      {
        "name": "about_html",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "about_html TEXT"
      },
      {
        "name": "social_links",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "social_links JSONB DEFAULT '{}'"
      },
      {
        "name": "is_verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_verified BOOLEAN DEFAULT false"
      },
      {
        "name": "is_featured",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_featured BOOLEAN DEFAULT false"
      },
      {
        "name": "subscriber_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "subscriber_count INTEGER DEFAULT 0"
      },
      {
        "name": "total_views",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_views INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-seller-stores",
    "sourceProject": "ebay",
    "name": "seller_stores",
    "displayName": "Seller Stores",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE"
      },
      {
        "name": "store_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "store_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "store_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "store_slug VARCHAR(100) UNIQUE"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "logo_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo_url TEXT"
      },
      {
        "name": "banner_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "banner_url TEXT"
      },
      {
        "name": "theme_color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'#3665f3'",
        "sourceLine": "theme_color VARCHAR(7) DEFAULT '#3665f3'"
      },
      {
        "name": "policies",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "policies TEXT"
      },
      {
        "name": "contact_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email VARCHAR(255)"
      },
      {
        "name": "contact_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone VARCHAR(20)"
      },
      {
        "name": "website_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website_url TEXT"
      },
      {
        "name": "social_links",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "social_links JSONB"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "subscriber_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "subscriber_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-shipping-carriers",
    "sourceProject": "ebay",
    "name": "shipping_carriers",
    "displayName": "Shipping Carriers",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "code VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "tracking_url_template",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_url_template VARCHAR(500)"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-shipping-labels",
    "sourceProject": "ebay",
    "name": "shipping_labels",
    "displayName": "Shipping Labels",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id)"
      },
      {
        "name": "carrier_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "carrier_id UUID REFERENCES shipping_carriers(id)"
      },
      {
        "name": "tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number VARCHAR(100)"
      },
      {
        "name": "label_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "label_url VARCHAR(500)"
      },
      {
        "name": "label_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "label_cost DECIMAL(10,2)"
      },
      {
        "name": "weight",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weight DECIMAL(10,2)"
      },
      {
        "name": "dimensions",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions VARCHAR(100)"
      },
      {
        "name": "from_address",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "from_address JSONB"
      },
      {
        "name": "to_address",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "to_address JSONB"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'created'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'created' CHECK (status IN ('created', 'purchased', 'voided'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-shipping-rates",
    "sourceProject": "ebay",
    "name": "shipping_rates",
    "displayName": "Shipping Rates",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "carrier_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "carrier_id UUID NOT NULL REFERENCES shipping_carriers(id)"
      },
      {
        "name": "service_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "service_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_code VARCHAR(50) NOT NULL"
      },
      {
        "name": "min_weight",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "min_weight DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "max_weight",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_weight DECIMAL(10,2)"
      },
      {
        "name": "base_rate",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "base_rate DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "rate_per_lb",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "rate_per_lb DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "estimated_days_min",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_days_min INTEGER"
      },
      {
        "name": "estimated_days_max",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_days_max INTEGER"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-shipping-reminders",
    "sourceProject": "ebay",
    "name": "shipping_reminders",
    "displayName": "Shipping Reminders",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "order_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "reminder_time",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reminder_time TIMESTAMP NOT NULL"
      },
      {
        "name": "reminder_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'handling_time'",
        "sourceLine": "reminder_type VARCHAR(30) DEFAULT 'handling_time' CHECK (reminder_type IN ('handling_time', 'follow_up', 'final'))"
      },
      {
        "name": "sent",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "sent BOOLEAN DEFAULT false"
      },
      {
        "name": "sent_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sent_at TIMESTAMP"
      },
      {
        "name": "acknowledged",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "acknowledged BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-shipping-tracking-events",
    "sourceProject": "ebay",
    "name": "shipping_tracking_events",
    "displayName": "Shipping Tracking Events",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "shipment_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shipment_id UUID NOT NULL"
      },
      {
        "name": "tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number VARCHAR(100)"
      },
      {
        "name": "event_date",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_date TIMESTAMP NOT NULL"
      },
      {
        "name": "event_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_location VARCHAR(255)"
      },
      {
        "name": "event_status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_status VARCHAR(100) NOT NULL"
      },
      {
        "name": "event_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_description TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-shipping-zones",
    "sourceProject": "ebay",
    "name": "shipping_zones",
    "displayName": "Shipping Zones",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "countries",
        "type": "TEXT[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "countries TEXT[] NOT NULL"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-shopping-carts",
    "sourceProject": "ebay",
    "name": "shopping_carts",
    "displayName": "Shopping Carts",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-social-shares",
    "sourceProject": "ebay",
    "name": "social_shares",
    "displayName": "Social Shares",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "platform",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "platform VARCHAR(30) NOT NULL CHECK (platform IN ('facebook', 'twitter', 'pinterest', 'linkedin', 'whatsapp', 'email', 'copy_link'))"
      },
      {
        "name": "share_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "share_url TEXT"
      },
      {
        "name": "click_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "click_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-store-categories",
    "sourceProject": "ebay",
    "name": "store_categories",
    "displayName": "Store Categories",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "store_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "store_id UUID NOT NULL REFERENCES seller_stores(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "display_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "display_order INTEGER DEFAULT 0"
      },
      {
        "name": "product_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "product_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-store-categories",
    "sourceProject": "ebay",
    "name": "store_categories",
    "displayName": "Store Categories",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "store_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "store_id UUID REFERENCES seller_stores(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "parent_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_id UUID REFERENCES store_categories(id) ON DELETE SET NULL"
      },
      {
        "name": "sort_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sort_order INTEGER DEFAULT 0"
      },
      {
        "name": "product_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "product_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-store-subscribers",
    "sourceProject": "ebay",
    "name": "store_subscribers",
    "displayName": "Store Subscribers",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "store_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "store_id UUID NOT NULL REFERENCES seller_stores(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "subscribed_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-store-subscribers",
    "sourceProject": "ebay",
    "name": "store_subscribers",
    "displayName": "Store Subscribers",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "store_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "store_id UUID REFERENCES seller_stores(id) ON DELETE CASCADE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "subscribed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "subscribed_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-stripe-customers",
    "sourceProject": "ebay",
    "name": "stripe_customers",
    "displayName": "Stripe Customers",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "stripe_customer_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "stripe_customer_id VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-subcategories",
    "sourceProject": "ebay",
    "name": "subcategories",
    "displayName": "Subcategories",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "category_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "image_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url VARCHAR(500)"
      },
      {
        "name": "sort_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sort_order INTEGER DEFAULT 0"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-support-agents",
    "sourceProject": "ebay",
    "name": "support_agents",
    "displayName": "Support Agents",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "display_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "display_name VARCHAR(100)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(50)"
      },
      {
        "name": "is_available",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_available BOOLEAN DEFAULT false"
      },
      {
        "name": "max_concurrent_chats",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "max_concurrent_chats INTEGER DEFAULT 5"
      },
      {
        "name": "current_chat_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_chat_count INTEGER DEFAULT 0"
      },
      {
        "name": "total_chats_handled",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_chats_handled INTEGER DEFAULT 0"
      },
      {
        "name": "average_rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "average_rating DECIMAL(3,2)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-support-chat-messages",
    "sourceProject": "ebay",
    "name": "support_chat_messages",
    "displayName": "Support Chat Messages",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "chat_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chat_id UUID NOT NULL REFERENCES support_chats(id) ON DELETE CASCADE"
      },
      {
        "name": "sender_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sender_id UUID NOT NULL REFERENCES users(id)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "message_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'text'",
        "sourceLine": "message_type VARCHAR(20) DEFAULT 'text' CHECK (message_type IN ('text', 'image', 'file', 'system'))"
      },
      {
        "name": "attachment_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attachment_url TEXT"
      },
      {
        "name": "is_read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_read BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-support-chat-messages",
    "sourceProject": "ebay",
    "name": "support_chat_messages",
    "displayName": "Support Chat Messages",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "chat_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chat_id UUID REFERENCES support_chats(id) ON DELETE CASCADE"
      },
      {
        "name": "sender_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sender_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "sender_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "sender_type VARCHAR(20) DEFAULT 'user'"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "attachments",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "attachments JSONB"
      },
      {
        "name": "is_read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_read BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-support-chats",
    "sourceProject": "ebay",
    "name": "support_chats",
    "displayName": "Support Chats",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "agent_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agent_id UUID REFERENCES users(id)"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(200)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(50) CHECK (category IN ('order', 'payment', 'shipping', 'return', 'account', 'technical', 'other'))"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'waiting'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'waiting' CHECK (status IN ('waiting', 'active', 'resolved', 'closed'))"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority VARCHAR(10) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent'))"
      },
      {
        "name": "rating",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating INTEGER CHECK (rating >= 1 AND rating <= 5)"
      },
      {
        "name": "feedback",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feedback TEXT"
      },
      {
        "name": "started_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "ended_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ended_at TIMESTAMP WITH TIME ZONE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-support-chats",
    "sourceProject": "ebay",
    "name": "support_chats",
    "displayName": "Support Chats",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "agent_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agent_id UUID REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'open'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'normal'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "closed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "closed_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-team-activity-log",
    "sourceProject": "ebay",
    "name": "team_activity_log",
    "displayName": "Team Activity Log",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "team_member_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE"
      },
      {
        "name": "action_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "action_details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_details JSONB"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50)"
      },
      {
        "name": "entity_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id UUID"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(45)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-team-members",
    "sourceProject": "ebay",
    "name": "team_members",
    "displayName": "Team Members",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "owner_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "member_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "member_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role VARCHAR(50) NOT NULL CHECK (role IN ('viewer', 'editor', 'manager', 'admin'))"
      },
      {
        "name": "permissions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "permissions JSONB DEFAULT '{}'"
      },
      {
        "name": "invited_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "invited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "accepted_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accepted_at TIMESTAMP"
      },
      {
        "name": "invited_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invited_by UUID REFERENCES users(id)"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-security-features-sql-token-blacklist",
    "sourceProject": "ebay",
    "name": "token_blacklist",
    "displayName": "Token Blacklist",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_security_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "token_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "token_hash VARCHAR(255) NOT NULL UNIQUE"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "reason",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'logout'",
        "sourceLine": "reason VARCHAR(50) NOT NULL DEFAULT 'logout' CHECK (reason IN ('logout', 'password_change', 'security_revoke', 'session_expired', 'admin_action'))"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(45)"
      },
      {
        "name": "user_agent",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_agent TEXT"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-additions-sql-two-factor-auth",
    "sourceProject": "ebay",
    "name": "two_factor_auth",
    "displayName": "Two Factor Auth",
    "framework": "SQL",
    "sourceFile": "database/schema_additions.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret VARCHAR(255) NOT NULL"
      },
      {
        "name": "is_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_enabled BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "backup_codes",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "backup_codes TEXT[]"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-add-more-features-sql-user-credit",
    "sourceProject": "ebay",
    "name": "user_credit",
    "displayName": "User Credit",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/add_more_features.sql",
    "columns": [
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "balance",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "balance NUMERIC(12, 2) NOT NULL DEFAULT 0"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-user-currency-preferences",
    "sourceProject": "ebay",
    "name": "user_currency_preferences",
    "displayName": "User Currency Preferences",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "preferred_currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "preferred_currency VARCHAR(3) DEFAULT 'USD' REFERENCES currencies(code)"
      },
      {
        "name": "display_converted_prices",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "display_converted_prices BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-user-currency-preferences",
    "sourceProject": "ebay",
    "name": "user_currency_preferences",
    "displayName": "User Currency Preferences",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE"
      },
      {
        "name": "currency_code",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency_code VARCHAR(3) DEFAULT 'USD'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-user-memberships",
    "sourceProject": "ebay",
    "name": "user_memberships",
    "displayName": "User Memberships",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_id INTEGER REFERENCES membership_plans(id)"
      },
      {
        "name": "billing_cycle",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'monthly'",
        "sourceLine": "billing_cycle VARCHAR(20) DEFAULT 'monthly'"
      },
      {
        "name": "start_date",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date TIMESTAMP NOT NULL"
      },
      {
        "name": "end_date",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date TIMESTAMP NOT NULL"
      },
      {
        "name": "auto_renew",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "auto_renew BOOLEAN DEFAULT true"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'active'"
      },
      {
        "name": "cancelled_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cancelled_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-user-memberships",
    "sourceProject": "ebay",
    "name": "user_memberships",
    "displayName": "User Memberships",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "plan_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan_id INT REFERENCES membership_plans(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "billing_cycle",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'monthly'",
        "sourceLine": "billing_cycle VARCHAR(20) DEFAULT 'monthly'"
      },
      {
        "name": "start_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_date DATE NOT NULL"
      },
      {
        "name": "end_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_date DATE"
      },
      {
        "name": "next_billing_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_billing_date DATE"
      },
      {
        "name": "payment_method_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method_id UUID"
      },
      {
        "name": "auto_renew",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "auto_renew BOOLEAN DEFAULT true"
      },
      {
        "name": "free_shipping_used_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "free_shipping_used_count INT DEFAULT 0"
      },
      {
        "name": "returns_used_count",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "returns_used_count INT DEFAULT 0"
      },
      {
        "name": "cancelled_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cancelled_at TIMESTAMP"
      },
      {
        "name": "cancellation_reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cancellation_reason TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-user-recommendations",
    "sourceProject": "ebay",
    "name": "user_recommendations",
    "displayName": "User Recommendations",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "recommendation_reason",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendation_reason VARCHAR(50)"
      },
      {
        "name": "score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.5",
        "sourceLine": "score DECIMAL(5,4) DEFAULT 0.5"
      },
      {
        "name": "is_viewed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_viewed BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-complete-features-sql-user-rewards",
    "sourceProject": "ebay",
    "name": "user_rewards",
    "displayName": "User Rewards",
    "framework": "SQL",
    "sourceFile": "database/migrations/complete_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE"
      },
      {
        "name": "current_points",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_points INTEGER DEFAULT 0"
      },
      {
        "name": "lifetime_points",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "lifetime_points INTEGER DEFAULT 0"
      },
      {
        "name": "tier_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tier_id INTEGER REFERENCES rewards_tiers(id)"
      },
      {
        "name": "points_expiring_soon",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "points_expiring_soon INTEGER DEFAULT 0"
      },
      {
        "name": "expiration_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiration_date TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-growth-features-sql-user-wallets",
    "sourceProject": "ebay",
    "name": "user_wallets",
    "displayName": "User Wallets",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_growth_features.sql",
    "columns": [
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "balance",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.00",
        "sourceLine": "balance DECIMAL(10,2) NOT NULL DEFAULT 0.00 CHECK (balance >= 0)"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-users",
    "sourceProject": "ebay",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "username",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "username VARCHAR(50) UNIQUE NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100)"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "avatar_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar_url VARCHAR(500)"
      },
      {
        "name": "bio",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bio TEXT"
      },
      {
        "name": "is_verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_verified BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "is_seller",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "is_seller BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "seller_rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.00",
        "sourceLine": "seller_rating DECIMAL(3,2) DEFAULT 0.00"
      },
      {
        "name": "total_sales",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_sales INTEGER DEFAULT 0"
      },
      {
        "name": "member_since",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "member_since TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "last_login",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_login TIMESTAMP"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'inactive'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-security-features-sql-validation-rules",
    "sourceProject": "ebay",
    "name": "validation_rules",
    "displayName": "Validation Rules",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_security_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "route_path",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "route_path VARCHAR(255) NOT NULL"
      },
      {
        "name": "http_method",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "http_method VARCHAR(10) NOT NULL CHECK (http_method IN ('GET', 'POST', 'PUT', 'DELETE', 'PATCH'))"
      },
      {
        "name": "field_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "field_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "field_location",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'body'",
        "sourceLine": "field_location VARCHAR(20) NOT NULL DEFAULT 'body' CHECK (field_location IN ('body', 'query', 'params', 'headers'))"
      },
      {
        "name": "validation_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "validation_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "validation_params",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "validation_params JSONB DEFAULT '{}'"
      },
      {
        "name": "error_message",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_message VARCHAR(500)"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-latest-features-sql-vault-items",
    "sourceProject": "ebay",
    "name": "vault_items",
    "displayName": "Vault Items",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_latest_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id)"
      },
      {
        "name": "item_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "item_description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_description TEXT"
      },
      {
        "name": "grading_service",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "grading_service VARCHAR(50) CHECK (grading_service IN ('PSA', 'BGS', 'CGC', 'SGC', 'none'))"
      },
      {
        "name": "grade",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "grade VARCHAR(20)"
      },
      {
        "name": "cert_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cert_number VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'shipped_to_vault', 'received', 'grading', 'graded', 'stored', 'shipping_out', 'delivered'))"
      },
      {
        "name": "vault_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vault_location VARCHAR(100)"
      },
      {
        "name": "estimated_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_value DECIMAL(12,2)"
      },
      {
        "name": "insurance_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "insurance_value DECIMAL(12,2)"
      },
      {
        "name": "submission_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submission_date TIMESTAMP"
      },
      {
        "name": "graded_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "graded_date TIMESTAMP"
      },
      {
        "name": "images",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "images JSONB DEFAULT '[]'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "tracking_number_in",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number_in VARCHAR(100)"
      },
      {
        "name": "tracking_number_out",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number_out VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-vehicle-inspections",
    "sourceProject": "ebay",
    "name": "vehicle_inspections",
    "displayName": "Vehicle Inspections",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "vehicle_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE"
      },
      {
        "name": "inspector_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector_name VARCHAR(200)"
      },
      {
        "name": "inspection_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_location VARCHAR(500)"
      },
      {
        "name": "inspection_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_date DATE"
      },
      {
        "name": "overall_condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overall_condition VARCHAR(50)"
      },
      {
        "name": "exterior_rating",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exterior_rating INT"
      },
      {
        "name": "interior_rating",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "interior_rating INT"
      },
      {
        "name": "mechanical_rating",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mechanical_rating INT"
      },
      {
        "name": "findings",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings JSONB"
      },
      {
        "name": "photos",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "photos JSONB"
      },
      {
        "name": "passed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passed BOOLEAN"
      },
      {
        "name": "report_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_url VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-vehicle-parts-compatibility",
    "sourceProject": "ebay",
    "name": "vehicle_parts_compatibility",
    "displayName": "Vehicle Parts Compatibility",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "year_from",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year_from INT"
      },
      {
        "name": "year_to",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year_to INT"
      },
      {
        "name": "make",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "make VARCHAR(100)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(100)"
      },
      {
        "name": "trim_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trim_level VARCHAR(100)"
      },
      {
        "name": "engine",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engine VARCHAR(100)"
      },
      {
        "name": "submodel",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submodel VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-vehicles",
    "sourceProject": "ebay",
    "name": "vehicles",
    "displayName": "Vehicles",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "seller_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "seller_id UUID REFERENCES users(id)"
      },
      {
        "name": "vin",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "vin VARCHAR(17) UNIQUE"
      },
      {
        "name": "year",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year INT"
      },
      {
        "name": "make",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "make VARCHAR(100)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(100)"
      },
      {
        "name": "trim_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trim_level VARCHAR(100)"
      },
      {
        "name": "body_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body_type VARCHAR(50)"
      },
      {
        "name": "engine_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engine_type VARCHAR(100)"
      },
      {
        "name": "engine_size",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engine_size VARCHAR(50)"
      },
      {
        "name": "fuel_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fuel_type VARCHAR(50)"
      },
      {
        "name": "transmission",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transmission VARCHAR(50)"
      },
      {
        "name": "drivetrain",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "drivetrain VARCHAR(50)"
      },
      {
        "name": "horsepower",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "horsepower INT"
      },
      {
        "name": "mileage",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mileage INT"
      },
      {
        "name": "exterior_color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "exterior_color VARCHAR(50)"
      },
      {
        "name": "interior_color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "interior_color VARCHAR(50)"
      },
      {
        "name": "num_owners",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "num_owners INT"
      },
      {
        "name": "accident_history",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "accident_history BOOLEAN DEFAULT false"
      },
      {
        "name": "title_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'clean'",
        "sourceLine": "title_status VARCHAR(50) DEFAULT 'clean'"
      },
      {
        "name": "vehicle_history_report_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vehicle_history_report_url VARCHAR(500)"
      },
      {
        "name": "inspection_report",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_report JSONB"
      },
      {
        "name": "inspection_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_date DATE"
      },
      {
        "name": "features",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "features JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-growth-features-sql-wallet-ledger",
    "sourceProject": "ebay",
    "name": "wallet_ledger",
    "displayName": "Wallet Ledger",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_growth_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "balance_after",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "balance_after DECIMAL(10,2) NOT NULL"
      },
      {
        "name": "reason",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason VARCHAR(60) NOT NULL"
      },
      {
        "name": "reference_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference_id UUID"
      },
      {
        "name": "note",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "note TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-database-schema-sql-watchlist",
    "sourceProject": "ebay",
    "name": "watchlist",
    "displayName": "Watchlist",
    "framework": "SQL",
    "sourceFile": "database/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "product_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ebay-backend-src-migrations-new-features-migration-sql-websocket-connections",
    "sourceProject": "ebay",
    "name": "websocket_connections",
    "displayName": "Websocket Connections",
    "framework": "SQL",
    "sourceFile": "backend/src/migrations/new_features_migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "connection_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "connection_id VARCHAR(200) NOT NULL"
      },
      {
        "name": "connected_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "connected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "last_ping",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_ping TIMESTAMP"
      },
      {
        "name": "device_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "device_type VARCHAR(50)"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(50)"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      }
    ]
  },
  {
    "id": "ebay-database-migrations-add-missing-features-sql-websocket-sessions",
    "sourceProject": "ebay",
    "name": "websocket_sessions",
    "displayName": "Websocket Sessions",
    "framework": "SQL",
    "sourceFile": "database/migrations/add_missing_features.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "session_token",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "session_token VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "device_info",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "device_info JSONB"
      },
      {
        "name": "ip_address",
        "type": "INET",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address INET"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "last_ping_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "last_ping_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "connected_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "connected_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()"
      },
      {
        "name": "disconnected_at",
        "type": "TIMESTAMP WITH TIME ZONE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "disconnected_at TIMESTAMP WITH TIME ZONE"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-alerting-rule-matches",
    "sourceProject": "security_detection",
    "name": "alerting_rule_matches",
    "displayName": "Alerting Rule Matches",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "rule_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_id UUID REFERENCES security.alerting_rules(id) ON DELETE CASCADE"
      },
      {
        "name": "matched_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "matched_events",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_events JSONB"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-alerting-rules",
    "sourceProject": "security_detection",
    "name": "alerting_rules",
    "displayName": "Alerting Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "conditions",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "conditions JSONB NOT NULL"
      },
      {
        "name": "threshold",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "threshold INTEGER DEFAULT 1"
      },
      {
        "name": "window_seconds",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "300",
        "sourceLine": "window_seconds INTEGER DEFAULT 300"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "actions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "actions JSONB DEFAULT '[]'"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "last_triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_triggered_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-seed-comprehensive-data-sql-alerts",
    "sourceProject": "security_detection",
    "name": "alerts",
    "displayName": "Alerts",
    "framework": "SQL",
    "sourceFile": "scripts/setup/seed_comprehensive_data.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity VARCHAR(20) NOT NULL DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'new'",
        "sourceLine": "status VARCHAR(20) NOT NULL DEFAULT 'new'"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source VARCHAR(100)"
      },
      {
        "name": "event_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_id UUID REFERENCES security.events(id)"
      },
      {
        "name": "assigned_to",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to UUID REFERENCES users(id)"
      },
      {
        "name": "acknowledged_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "acknowledged_at TIMESTAMP"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-seed-comprehensive-data-sql-compliance-controls",
    "sourceProject": "security_detection",
    "name": "compliance_controls",
    "displayName": "Compliance Controls",
    "framework": "SQL",
    "sourceFile": "scripts/setup/seed_comprehensive_data.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "framework",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "framework VARCHAR(50) NOT NULL"
      },
      {
        "name": "control_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "control_id VARCHAR(50) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'not_tested'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'not_tested'"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "last_tested",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_tested TIMESTAMP"
      },
      {
        "name": "evidence",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evidence TEXT[]"
      },
      {
        "name": "remediation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "remediation TEXT"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-correlation-matches",
    "sourceProject": "security_detection",
    "name": "correlation_matches",
    "displayName": "Correlation Matches",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "rule_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_id UUID REFERENCES security.correlation_rules(id) ON DELETE CASCADE"
      },
      {
        "name": "matched_events",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_events JSONB"
      },
      {
        "name": "matched_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-correlation-rules",
    "sourceProject": "security_detection",
    "name": "correlation_rules",
    "displayName": "Correlation Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "event_sequence",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_sequence JSONB NOT NULL"
      },
      {
        "name": "window_seconds",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "300",
        "sourceLine": "window_seconds INTEGER DEFAULT 300"
      },
      {
        "name": "threshold",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "threshold INTEGER DEFAULT 1"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "last_triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_triggered_at TIMESTAMP"
      },
      {
        "name": "trigger_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "trigger_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-custom-detection-rules",
    "sourceProject": "security_detection",
    "name": "custom_detection_rules",
    "displayName": "Custom Detection Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "conditions",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "conditions JSONB NOT NULL"
      },
      {
        "name": "logic_operator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'AND'",
        "sourceLine": "logic_operator VARCHAR(5) DEFAULT 'AND' CHECK (logic_operator IN ('AND', 'OR'))"
      },
      {
        "name": "actions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "actions JSONB DEFAULT '[]'"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "last_triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_triggered_at TIMESTAMP"
      },
      {
        "name": "trigger_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "trigger_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-hunt-findings",
    "sourceProject": "security_detection",
    "name": "hunt_findings",
    "displayName": "Hunt Findings",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "hunt_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hunt_id UUID REFERENCES security.hunt_hypotheses(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "evidence",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "evidence JSONB DEFAULT '{}'"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "source_event_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_event_id UUID"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-hunt-hypotheses",
    "sourceProject": "security_detection",
    "name": "hunt_hypotheses",
    "displayName": "Hunt Hypotheses",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "hypothesis",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hypothesis TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'validated', 'invalidated', 'closed'))"
      },
      {
        "name": "mitre_tactic",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitre_tactic VARCHAR(100)"
      },
      {
        "name": "mitre_technique",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitre_technique VARCHAR(100)"
      },
      {
        "name": "created_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by VARCHAR(255)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "findings_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "findings_count INTEGER DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-ioc-sweep-results",
    "sourceProject": "security_detection",
    "name": "ioc_sweep_results",
    "displayName": "Ioc Sweep Results",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "sweep_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sweep_id UUID REFERENCES security.ioc_sweeps(id) ON DELETE CASCADE"
      },
      {
        "name": "ioc_value",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ioc_value VARCHAR(500) NOT NULL"
      },
      {
        "name": "ioc_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ioc_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "matched_log_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_log_id UUID REFERENCES security.normalized_logs(id) ON DELETE SET NULL"
      },
      {
        "name": "matched_field",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_field VARCHAR(100)"
      },
      {
        "name": "context",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "context TEXT"
      },
      {
        "name": "matched_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-ioc-sweeps",
    "sourceProject": "security_detection",
    "name": "ioc_sweeps",
    "displayName": "Ioc Sweeps",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'completed', 'failed'))"
      },
      {
        "name": "ioc_list",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ioc_list JSONB NOT NULL"
      },
      {
        "name": "time_range_start",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time_range_start TIMESTAMP"
      },
      {
        "name": "time_range_end",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time_range_end TIMESTAMP"
      },
      {
        "name": "results_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "results_count INTEGER DEFAULT 0"
      },
      {
        "name": "started_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "started_at TIMESTAMP"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-kill-chain-events",
    "sourceProject": "security_detection",
    "name": "kill_chain_events",
    "displayName": "Kill Chain Events",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "chain_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chain_id UUID REFERENCES security.kill_chains(id) ON DELETE CASCADE"
      },
      {
        "name": "phase",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phase VARCHAR(50) NOT NULL CHECK (phase IN ('reconnaissance', 'weaponization', 'delivery', 'exploitation', 'installation', 'command_and_control', 'actions_on_objectives'))"
      },
      {
        "name": "event_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_id UUID"
      },
      {
        "name": "event_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "timestamp",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timestamp TIMESTAMP"
      },
      {
        "name": "sequence_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sequence_order INTEGER"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-kill-chains",
    "sourceProject": "security_detection",
    "name": "kill_chains",
    "displayName": "Kill Chains",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "src_ip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "src_ip VARCHAR(45)"
      },
      {
        "name": "related_incident_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "related_incident_id UUID"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'detected'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'detected' CHECK (status IN ('detected', 'investigating', 'confirmed', 'mitigated'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-log-retention-policies",
    "sourceProject": "security_detection",
    "name": "log_retention_policies",
    "displayName": "Log Retention Policies",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "retention_days",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "90",
        "sourceLine": "retention_days INTEGER NOT NULL DEFAULT 90"
      },
      {
        "name": "archive_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "archive_enabled BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "archive_location",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "archive_location TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-log-sources",
    "sourceProject": "security_detection",
    "name": "log_sources",
    "displayName": "Log Sources",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(50) NOT NULL CHECK (source_type IN ('firewall', 'endpoint', 'cloud', 'iam', 'dns', 'email', 'proxy', 'custom'))"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(20) NOT NULL CHECK (format IN ('syslog', 'cef', 'leef', 'json'))"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "host",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "host VARCHAR(255)"
      },
      {
        "name": "port",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "port INTEGER"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "last_seen_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_seen_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-threat-intel-entity-ts-mitre-attack-techniques",
    "sourceProject": "security_detection",
    "name": "mitre_attack_techniques",
    "displayName": "Mitre Attack Techniques",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/threat-intel.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "technique_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 20 })\n  @Index()\n  technique_id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500 })\n  name: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text' })\n  description: string"
      },
      {
        "name": "tactics",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  tactics: string[]"
      },
      {
        "name": "kill_chain_phase",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 50 })\n  kill_chain_phase: string"
      },
      {
        "name": "mitigations",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  mitigations: string[]"
      },
      {
        "name": "data_sources",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  data_sources: string[]"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-mitre-mappings",
    "sourceProject": "security_detection",
    "name": "mitre_mappings",
    "displayName": "Mitre Mappings",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "detection_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detection_type VARCHAR(255)"
      },
      {
        "name": "detection_rule_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detection_rule_id UUID"
      },
      {
        "name": "detection_event_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detection_event_id VARCHAR(255)"
      },
      {
        "name": "tactic_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tactic_id VARCHAR(20) NOT NULL"
      },
      {
        "name": "tactic_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tactic_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "technique_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technique_id VARCHAR(20) NOT NULL"
      },
      {
        "name": "technique_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technique_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "sub_technique_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sub_technique_id VARCHAR(20)"
      },
      {
        "name": "sub_technique_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sub_technique_name VARCHAR(255)"
      },
      {
        "name": "confidence",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "confidence VARCHAR(20) DEFAULT 'medium' CHECK (confidence IN ('high', 'medium', 'low'))"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-normalized-logs",
    "sourceProject": "security_detection",
    "name": "normalized_logs",
    "displayName": "Normalized Logs",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "raw_log_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_log_id UUID REFERENCES security.raw_logs(id) ON DELETE SET NULL"
      },
      {
        "name": "timestamp",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timestamp TIMESTAMP NOT NULL"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(50)"
      },
      {
        "name": "source_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_name VARCHAR(255)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(255)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low', 'info'))"
      },
      {
        "name": "src_ip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "src_ip VARCHAR(45)"
      },
      {
        "name": "dst_ip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dst_ip VARCHAR(45)"
      },
      {
        "name": "src_port",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "src_port INTEGER"
      },
      {
        "name": "dst_port",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dst_port INTEGER"
      },
      {
        "name": "protocol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "protocol VARCHAR(20)"
      },
      {
        "name": "username",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "username VARCHAR(255)"
      },
      {
        "name": "hostname",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hostname VARCHAR(255)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "extra_fields",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "extra_fields JSONB DEFAULT '{}'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-raw-logs",
    "sourceProject": "security_detection",
    "name": "raw_logs",
    "displayName": "Raw Logs",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "source_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_id UUID REFERENCES security.log_sources(id) ON DELETE SET NULL"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(20) NOT NULL"
      },
      {
        "name": "raw_content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_content TEXT NOT NULL"
      },
      {
        "name": "received_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "processed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "processed BOOLEAN DEFAULT FALSE"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-sigma-rules",
    "sourceProject": "security_detection",
    "name": "sigma_rules",
    "displayName": "Sigma Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "yaml_content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "yaml_content TEXT NOT NULL"
      },
      {
        "name": "parsed_logic",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parsed_logic JSONB"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'testing'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'testing' CHECK (status IN ('active', 'testing', 'disabled'))"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "logsource_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logsource_category VARCHAR(100)"
      },
      {
        "name": "logsource_product",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logsource_product VARCHAR(100)"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT[]"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-auth-entities-tenant-settings-entity-ts-tenant-settings",
    "sourceProject": "security_detection",
    "name": "tenant_settings",
    "displayName": "Tenant Settings",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/auth/entities/tenant-settings.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "key",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100 })\n  key: string"
      },
      {
        "name": "value",
        "type": "text",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text' })\n  value: string"
      },
      {
        "name": "type",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'string'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['string', 'number', 'boolean', 'json'],\n    default: 'string'\n  })\n  type: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text', nullable: true })\n  description: string"
      },
      {
        "name": "is_encrypted",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false }",
        "sourceLine": "@Column({ default: false })\n  is_encrypted: boolean"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-auth-entities-tenant-entity-ts-tenants",
    "sourceProject": "security_detection",
    "name": "tenants",
    "displayName": "Tenants",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/auth/entities/tenant.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100, unique: true })\n  name: string"
      },
      {
        "name": "subdomain",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 50, unique: true })\n  subdomain: string"
      },
      {
        "name": "domain",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, nullable: true, unique: true })\n  domain: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text', nullable: true })\n  description: string"
      },
      {
        "name": "plan",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'trial'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['trial', 'starter', 'professional', 'enterprise'],\n    default: 'trial'\n  })\n  plan: string"
      },
      {
        "name": "status",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['active', 'suspended', 'cancelled', 'pending'],\n    default: 'pending'\n  })\n  status: string"
      },
      {
        "name": "billing_info",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  billing_info: {"
      },
      {
        "name": "features",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  features: {"
      },
      {
        "name": "usage_limits",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  usage_limits: {"
      },
      {
        "name": "integrations",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  integrations: {"
      },
      {
        "name": "trial_ends_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  trial_ends_at: Date"
      },
      {
        "name": "subscription_ends_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  subscription_ends_at: Date"
      },
      {
        "name": "logo_url",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, nullable: true })\n  logo_url: string"
      },
      {
        "name": "branding",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  branding: {"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-threat-intel-entity-ts-threat-intel-sources",
    "sourceProject": "security_detection",
    "name": "threat_intel_sources",
    "displayName": "Threat Intel Sources",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/threat-intel.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100 })\n  name: string"
      },
      {
        "name": "description",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500 })\n  description: string"
      },
      {
        "name": "api_endpoint",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500, nullable: true })\n  api_endpoint: string"
      },
      {
        "name": "api_key_name",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500, nullable: true })\n  api_key_name: string"
      },
      {
        "name": "supported_indicators",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  supported_indicators: string[]"
      },
      {
        "name": "reliability_score",
        "type": "decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.5 }",
        "sourceLine": "@Column({ type: 'decimal', precision: 3, scale: 2, default: 0.5 })\n  reliability_score: number"
      },
      {
        "name": "timeout_ms",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5000 }",
        "sourceLine": "@Column({ default: 5000 })\n  timeout_ms: number"
      },
      {
        "name": "rate_limit_ms",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1000 }",
        "sourceLine": "@Column({ default: 1000 })\n  rate_limit_ms: number"
      },
      {
        "name": "is_enabled",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_enabled: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-threat-intel-entity-ts-threat-intelligence",
    "sourceProject": "security_detection",
    "name": "threat_intelligence",
    "displayName": "Threat Intelligence",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/threat-intel.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "indicator_value",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500 })\n  @Index()\n  indicator_value: string"
      },
      {
        "name": "indicator_type",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ip'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['ip', 'domain', 'hash', 'url', 'email'],\n    default: 'ip'\n  })\n  indicator_type: string"
      },
      {
        "name": "reputation",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'unknown'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['clean', 'suspicious', 'malicious', 'unknown'],\n    default: 'unknown'\n  })\n  reputation: string"
      },
      {
        "name": "confidence",
        "type": "decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.0 }",
        "sourceLine": "@Column({ type: 'decimal', precision: 3, scale: 2, default: 0.0 })\n  confidence: number"
      },
      {
        "name": "sources",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  sources: string[]"
      },
      {
        "name": "malware_families",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  malware_families: string[]"
      },
      {
        "name": "threat_actors",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  threat_actors: string[]"
      },
      {
        "name": "geo_location",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  geo_location: {"
      },
      {
        "name": "external_references",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  external_references: {"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text', nullable: true })\n  description: string"
      },
      {
        "name": "tags",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  tags: string[]"
      },
      {
        "name": "first_seen",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  first_seen: Date"
      },
      {
        "name": "last_seen",
        "type": "timestamp",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "() => 'CURRENT_TIMESTAMP' })",
        "sourceLine": "@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })\n  @Index()\n  last_seen: Date"
      },
      {
        "name": "expires_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  expires_at: Date"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-ueba-anomalies",
    "sourceProject": "security_detection",
    "name": "ueba_anomalies",
    "displayName": "Ueba Anomalies",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "entity_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id VARCHAR(255) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "anomaly_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "anomaly_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "score",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score FLOAT NOT NULL"
      },
      {
        "name": "deviation",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deviation FLOAT"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "details JSONB DEFAULT '{}'"
      },
      {
        "name": "baseline_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "baseline_id UUID REFERENCES security.ueba_baselines(id) ON DELETE SET NULL"
      },
      {
        "name": "detected_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "acknowledged",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "acknowledged BOOLEAN DEFAULT FALSE"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-ueba-baselines",
    "sourceProject": "security_detection",
    "name": "ueba_baselines",
    "displayName": "Ueba Baselines",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "entity_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id VARCHAR(255) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50) NOT NULL CHECK (entity_type IN ('user', 'host', 'service', 'application'))"
      },
      {
        "name": "baseline_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "baseline_data JSONB NOT NULL DEFAULT '{}'"
      },
      {
        "name": "sample_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sample_count INTEGER DEFAULT 0"
      },
      {
        "name": "last_updated",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-auth-entities-user-entity-ts-users",
    "sourceProject": "security_detection",
    "name": "users",
    "displayName": "Users",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/auth/entities/user.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "email",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, unique: true })\n  email: string"
      },
      {
        "name": "first_name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100 })\n  first_name: string"
      },
      {
        "name": "last_name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100 })\n  last_name: string"
      },
      {
        "name": "password_hash",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255 })\n  password_hash: string"
      },
      {
        "name": "role",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'viewer'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['super_admin', 'tenant_admin', 'analyst', 'viewer'],\n    default: 'viewer'\n  })\n  role: string"
      },
      {
        "name": "status",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['active', 'inactive', 'pending', 'suspended'],\n    default: 'pending'\n  })\n  status: string"
      },
      {
        "name": "permissions",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  permissions: {"
      },
      {
        "name": "preferences",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  preferences: {"
      },
      {
        "name": "last_login_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  last_login_at: Date"
      },
      {
        "name": "last_login_ip",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 45, nullable: true })\n  last_login_ip: string"
      },
      {
        "name": "email_verified_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  email_verified_at: Date"
      },
      {
        "name": "email_verification_token",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, nullable: true })\n  email_verification_token: string"
      },
      {
        "name": "password_reset_token",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, nullable: true })\n  password_reset_token: string"
      },
      {
        "name": "password_reset_expires_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  password_reset_expires_at: Date"
      },
      {
        "name": "mfa_settings",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  mfa_settings: {"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid', { nullable: true })\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-workflow-template-entity-ts-workflow-templates",
    "sourceProject": "security_detection",
    "name": "workflow_templates",
    "displayName": "Workflow Templates",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/workflow-template.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 200 })\n  name: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text' })\n  description: string"
      },
      {
        "name": "category",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'incident-response'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['incident-response', 'threat-hunting', 'vulnerability-management', 'compliance', 'forensics', 'monitoring'],\n    default: 'incident-response'\n  })\n  category: string"
      },
      {
        "name": "workflow_definition",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  workflow_definition: {"
      },
      {
        "name": "default_config",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  default_config: Record<string, any>"
      },
      {
        "name": "tags",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  tags: string[]"
      },
      {
        "name": "complexity",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'intermediate'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['beginner', 'intermediate', 'advanced'],\n    default: 'intermediate'\n  })\n  complexity: string"
      },
      {
        "name": "estimated_time",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100, nullable: true })\n  estimated_time: string"
      },
      {
        "name": "author",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100, nullable: true })\n  author: string"
      },
      {
        "name": "usage_count",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0 }",
        "sourceLine": "@Column({ default: 0 })\n  usage_count: number"
      },
      {
        "name": "rating",
        "type": "decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.0 }",
        "sourceLine": "@Column({ type: 'decimal', precision: 3, scale: 2, default: 0.0 })\n  rating: number"
      },
      {
        "name": "rating_count",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0 }",
        "sourceLine": "@Column({ default: 0 })\n  rating_count: number"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "is_featured",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false }",
        "sourceLine": "@Column({ default: false })\n  is_featured: boolean"
      },
      {
        "name": "is_enterprise",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false }",
        "sourceLine": "@Column({ default: false })\n  is_enterprise: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      },
      {
        "name": "created_by",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid', { nullable: true })\n  created_by: string"
      },
      {
        "name": "updated_by",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid', { nullable: true })\n  updated_by: string"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-workflow-entity-ts-workflows",
    "sourceProject": "security_detection",
    "name": "workflows",
    "displayName": "Workflows",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/workflow.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 200 })\n  name: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text', nullable: true })\n  description: string"
      },
      {
        "name": "workflow_data",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  workflow_data: {"
      },
      {
        "name": "status",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['draft', 'active', 'paused', 'archived'],\n    default: 'draft'\n  })\n  status: string"
      },
      {
        "name": "tags",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  tags: string[]"
      },
      {
        "name": "trigger_config",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  trigger_config: {"
      },
      {
        "name": "execution_stats",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  execution_stats: {"
      },
      {
        "name": "version",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0 }",
        "sourceLine": "@Column({ default: 0 })\n  version: number"
      },
      {
        "name": "parent_workflow_id",
        "type": "uuid",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'uuid', nullable: true })\n  parent_workflow_id: string"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      },
      {
        "name": "created_by",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  created_by: string"
      },
      {
        "name": "updated_by",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid', { nullable: true })\n  updated_by: string"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-yara-rules",
    "sourceProject": "security_detection",
    "name": "yara_rules",
    "displayName": "Yara Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "rule_content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_content TEXT NOT NULL"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT[]"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "compiled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "compiled BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "scan_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "scan_count INTEGER DEFAULT 0"
      },
      {
        "name": "last_scanned_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_scanned_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-yara-scan-results",
    "sourceProject": "security_detection",
    "name": "yara_scan_results",
    "displayName": "Yara Scan Results",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "rule_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_id UUID REFERENCES security.yara_rules(id) ON DELETE CASCADE"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target VARCHAR(500)"
      },
      {
        "name": "matched",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "matched BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "match_details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "match_details JSONB DEFAULT '{}'"
      },
      {
        "name": "scanned_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "scanned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  }
];
