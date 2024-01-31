import sql from 'better-sqlite3';

const db = sql('meals.db');

export function getMeals() {
    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}