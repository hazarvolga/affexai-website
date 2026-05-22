# SQLite Database Storage Location

This directory stores the local SQLite database (`affexai.sqlite`) which contains the lead state machines, crawl outputs, and audit logs.

## Rules:
*   The raw database file (`*.sqlite`) is strictly git-ignored to prevent checking in state files or sensitive metadata.
*   Upon execution, the database is initialized automatically with schema migrations and seeded with `leads.sample.json` if it does not already exist.
