-- DropIndex
DROP INDEX "coworkings_name_key";

-- AlterTable
CREATE SEQUENCE "events_id_seq";
ALTER TABLE "events" ALTER COLUMN "id" SET DEFAULT nextval('events_id_seq');
ALTER SEQUENCE "events_id_seq" OWNED BY "events"."id";
