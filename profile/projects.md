# Projects

## Duplex / Redbrick

### Quartz Acquisition and Migration (2025)
- **Situation:** Duplex acquired the qz.com publishing platform from G/O Media. The platform was powered by Payload CMS and MongoDB, and content dating back to the site's 2012 launch had to be migrated.
- **Task:** Oversee the technical acquisition and migrate the platform while preserving editorial workflows and production service levels.
- **Action:** Directed a two-person contracting team on the platform migration. Wrote migration tooling, CI/CD pipelines, staging test harnesses, and rollback plans, and coordinated the cutover with internal teams and contractors. Also migrated newsletter delivery (500k recipients per month), cutting email over to a new ESP without hurting deliverability.
- **Result:** Editorial workflows and production SLAs held through the cutover. The email cutover succeeded, and deliverability rates stayed constant throughout.

### Observability and Site Reliability (2024-2025)
- **Situation:** OneNews deployments were shipping with both obvious and subtle bugs, and rollbacks had become a routine part of the development workflow.
- **Task:** Reduce the bug rate and improve observability and overall quality.
- **Action:** Introduced post-mortems to find the root cause of each bug. Added Datadog observability to all services, covering logs with correlation, traces, and metrics. Worked with each technical team to define SLOs for their services, and fed SLO breaches back to the teams as tech-debt work to improve performance and reliability.
- **Result:** Reliability improved, both by feel and by measurement, and rollbacks virtually disappeared. Two key initiatives followed:
  1. A major overhaul of the feature flagging solution, which had been the top source of bugs requiring rollbacks.
  2. Regular performance tickets across services, such as data querying and caching.

## Shift / Redbrick

### OneNews Re-platform (2024)
- **Situation:** OneNews, which powers the new tab page, was hitting scaling limits on Cloudflare Workers. The team needed to build its own content and recommendation features, and Workers wasn't mature enough to support them.
- **Task:** Migrate the front-end service to AWS, ahead of building a data ingestion pipeline.
- **Action:** Gathered requirements with the OneNews team and moved them off Cloudflare's Wrangler tooling to stand-alone releases, built in parallel. Deployed the service to AWS Fargate using Shift's established patterns.
- **Result:** The cutover completed successfully. The patterns became the foundation for the team's later products and services, and the team soon became its own entity, Duplex.

### Modular UI (2024)
- **Situation:** The Product team planned a feature that let users drag and drop their own UI components within the app.
- **Task:** Lead the design and first React implementation.
- **Action:** Built a component registry, a layout engine, and a serializable layout format that synced to the server. Setup Chromatic to mark regressions in changes over time.
- **Result:** The first iteration proved the approach was sound and surfaced design constraints for the Product team. The design carried largely unchanged into the public launch, and the delivery team went on to add components and manage constraints.

### Shift X Upgrade / Chromium Remote Builds (2023)
- **Situation:** Shift merged with another RedBrick team to consolidate Chromium-based projects. Rebasing Chromium was expensive, and a fresh build took 4+ hours on a developer machine.
- **Task:** Re-platform Shift from its Vivaldi Chromium base to the variant the Rebase team used, and cut the cost of rebasing and building.
- **Action:** Evaluated remote build options, including the approach Chrome publishes and several open-source tools, and chose EngFlow. Provisioned a new AWS account for the resources, worked with EngFlow's integration team on infrastructure, and updated developer tooling and CI/CD pipelines.
- **Result:** The remote cache cut fresh builds from 4+ hours to 30 minutes or less, and incremental builds from 15 minutes to about 2. The Product team got faster release iterations to review, and developers got better throughput on Chromium features.

### AWS Infrastructure as Code and CodePipeline (2022)
- **Situation:** Shift's API services shared an AWS account with another RedBrick team.
- **Task:** Move to dedicated accounts to improve security and cost control, and adopt infrastructure-as-code best practices.
- **Action:** Created a new AWS organization with staging and production sub-accounts. Used AWS CDK and CodePipeline to build everything from VPCs and security groups to Fargate services and load balancers. Then migrated the services, including the Postgres database (using AWS Database Migration Service), coordinated the traffic cutover, and monitored it.
- **Result:** The migration finished with no unscheduled maintenance. All infrastructure is now under code and code review, and application versions are tracked as Git commits (GitOps).

## AbeBooks

### Seller Management Migration to AWS (2020)
- **Situation:** Seller Management clients and service had to move from on-premises infrastructure to AWS as part of the Verne migration.
- **Task:** Migrate client workflows and make sure the service was ready for the scheduled cutover.
- **Action:** Updated IAM permissions for about a dozen roles, tuned alerts and alarms, and coordinated cutover planning with other AbeBooks teams.
- **Result:** Seller Management raised no blockers for the scheduled migration.

### File-Services Migration from On-Premises to AWS (2021)
- **Situation:** This was the highest-risk workstream in AbeBooks' company-wide move to AWS, which aimed to improve security and reduce costs. Merge Listings and Mapping Tools depended on NAS storage and disk-based locking, and FTP depended on ProFTPD and the existing authentication database. The established AWS migration pattern covered web services, not file-system and FTP architectures.
- **Task:** Migrate Merge Listings first, Mapping Tools second, and ProFTPD/Inventory FTP last, on time, while preserving file processing, locking, and seller authentication.
- **Action:**
  - **Merge Listings:** Reworked NAS file handling for S3, replaced disk-based locking with a globally distributed DynamoDB lock, and deployed to AWS Fargate. Contributed to the shared `listingtools-common` library, documented the new pattern, and supported other engineers. Later used CodeGuru to find and fix a memory leak.
  - **Mapping Tools:** Reworked NAS file handling for S3 and moved the service to Fargate. Added feature flags so deployment and ramp-up could proceed independently of Image Assembler while the upstream FTP migration was underway.
  - **FTP:** Migrated ProFTPD to AWS Transfer and built a Lambda authorizer on top of the existing authentication database. Wrote a threat model for the public login system and passed review by Amazon Security.
- **Result:** Finished on time. Moved 6,000+ seller accounts (about 60% of active sellers) and roughly 100 GB of seller files to S3. Updated two batch applications, one application, and three services, removing storage as a blocker for the broader AWS migration.


## Dyspatch

### Email platform application and GraphQL API
- Dates: 2017 - 2019
- Situation: The application team was building a web interface for an enterprise SaaS email content platform.
- Task: Provide front-end functionality and API access for the application.
- Action: Developed a GraphQL microservice and a React/Redux single-page application using Apollo GraphQL.
- Result: Delivered a responsive single-page application. Tools included GraphQL, React, Redux, and Apollo GraphQL.

## Redbrick

### Deskmetrics analytics platform
- Dates: 2015 - 2017
- Situation: Deskmetrics provided software analytics and needed to present and filter time-series data for users.
- Task: Build dashboard and service capabilities for analytics, ingestion, and client integrations.
- Action: Built a Django and Angular dashboard, a time-series extraction and filtering layer, Redis caching, and REST APIs backed by PostgreSQL; contributed to Python and RabbitMQ event ingestion and Android and JavaScript SDKs.
- Result: Improved data extraction and visualization; the caching scheme reduced database calls. Tools included Django, Angular, Python, RabbitMQ, Redis, PostgreSQL, Android, and JavaScript.

### Search application
- Dates: 2015 - 2017
- Situation: Landing pages needed an integrated search application.
- Task: Develop the application and improve its runtime and deployment practices.
- Action: Built the application in Flask and TypeScript, initiated its Python 2-to-3 upgrade, and introduced Elastic Beanstalk and CloudFormation templates.
- Result: Improved AWS application and infrastructure management. Tools included Flask, TypeScript, Elastic Beanstalk, and CloudFormation.

### Shift email platform
- Dates: 2015 - 2017
- Situation: The email platform needed user authentication and subscription handling.
- Task: Implement authentication and subscription capabilities.
- Action: Designed authentication using Django and PostgreSQL, built a custom OAuth credential-validation backend, and integrated Stripe subscriptions.
- Result: [Add user or business impact, if known.]

## Revivae

### Customer-information collection application
- Dates: 2012 - 2016
- Situation: Worked on a customer-information collection application.
- Task: Design and develop the application.
- Action: Built an application served by Django and written in Backbone.js.
- Result: [Add the application's impact or outcome, if known.]