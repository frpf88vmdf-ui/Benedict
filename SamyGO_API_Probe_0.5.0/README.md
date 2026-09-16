# SamyGO API Probe 0.5.0

Read-only diagnostic module for TizenBrew.

The browser part checks the availability/types of selected public Tizen JavaScript APIs.
The service checks selected globals exposed by the TizenBrew service sandbox and tests
whether it can write a diagnostic file to `/home/owner/share`.

It does not execute shell commands, change system settings, access credentials,
or attempt privilege escalation.
