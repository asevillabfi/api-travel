#!/bin/sh
# -e Exit immediately when a command returns a non-zero status.
# -x Print commands before they are executed
set -ex
# Seeding command
PGPASSWORD="Acatlover" psql -U postgres -h localhost -f seed.sql -p 5432