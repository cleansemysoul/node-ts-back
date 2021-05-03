import { Migration } from '@mikro-orm/migrations';

export class Migration20210503154645 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "udername" to "username";');


    this.addSql('alter table "user" drop constraint "user_udername_unique";');

    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}
