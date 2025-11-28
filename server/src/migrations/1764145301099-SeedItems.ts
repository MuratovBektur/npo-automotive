import type { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedItems1764145301099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const batchSize = 1000; // вставляем партиями по 1000 для оптимизации
    const total = 50000;
    for (let i = 0; i < total; i += batchSize) {
      const values: string[] = [];
      for (let j = 0; j < batchSize && i + j < total; j++) {
        const index = i + j + 1;
        values.push(`('Item ${index}', NOW())`);
      }
      await queryRunner.query(
        `INSERT INTO items (name, created_at) VALUES ${values.join(',')}`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM items`);
  }
}
