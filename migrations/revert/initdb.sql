-- Revert ctoutweb:initdb from pg

BEGIN;

DROP TABLE "message", "message_reason", "user" ,"user_role";

COMMIT;
