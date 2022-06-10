-- Revert ctoutweb:initdb from pg

BEGIN;

DROP TABLE "messaging", "messaging_reason", "user" ,"user_role";

COMMIT;
