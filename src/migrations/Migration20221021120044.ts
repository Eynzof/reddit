import { Migration } from '@mikro-orm/migrations';

export class Migration20221021120044 extends Migration {

  async up(): Promise<void> {
    this.addSql('drop table if exists "mikro_orm_migrations" cascade;');

    this.addSql('alter table "post" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "post" alter column "created_at" set default \'NOW()\';');
    this.addSql('alter table "post" alter column "updated_at" type timestamptz(0) using ("updated_at"::timestamptz(0));');
    this.addSql('alter table "post" alter column "updated_at" set default \'NOW()\';');

    this.addSql('alter table "user" add column "email" text not null;');
    this.addSql('alter table "user" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "user" alter column "created_at" set default \'NOW()\';');
    this.addSql('alter table "user" alter column "updated_at" type timestamptz(0) using ("updated_at"::timestamptz(0));');
    this.addSql('alter table "user" alter column "updated_at" set default \'NOW()\';');
    this.addSql('alter table "user" add constraint "user_created_at_unique" unique ("created_at");');
  }

  async down(): Promise<void> {
    this.addSql('create table "mikro_orm_migrations" ("id" serial primary key, "name" varchar null default null, "executed_at" timestamptz null default CURRENT_TIMESTAMP);');

    this.addSql('alter table "post" alter column "created_at" type timestamptz using ("created_at"::timestamptz);');
    this.addSql('alter table "post" alter column "created_at" set default \'2022-10-12 14:19:29.849573+00\';');
    this.addSql('alter table "post" alter column "updated_at" type timestamptz using ("updated_at"::timestamptz);');
    this.addSql('alter table "post" alter column "updated_at" set default \'2022-10-12 14:19:29.849573+00\';');

    this.addSql('alter table "user" alter column "created_at" type timestamptz using ("created_at"::timestamptz);');
    this.addSql('alter table "user" alter column "created_at" set default \'2022-10-12 14:19:29.867965+00\';');
    this.addSql('alter table "user" alter column "updated_at" type timestamptz using ("updated_at"::timestamptz);');
    this.addSql('alter table "user" alter column "updated_at" set default \'2022-10-12 14:19:29.867965+00\';');
    this.addSql('alter table "user" drop constraint "user_created_at_unique";');
    this.addSql('alter table "user" drop column "email";');
  }

}
