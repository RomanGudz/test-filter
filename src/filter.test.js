import filter from './filter';

describe('фильтр массива объектов', () => {
  let objects = [
    { login: 'Maks', email: 'maks@maks.com', company: 'METHED' },
    { login: 'Methed', email: 'info@methed.ru', company: 'METHED' },
    { login: 'Humidor', email: 'tomato@pomodoro.com', company: 'cucumber' }
  ]

  it('совпадение по email', () => {
    const filtered = filter(objects, 'email', 'info@methed.ru');
    expect(Array.isArray(filtered)).toBe(true);
    expect(filtered.length > 0).toBe(true);
    console.log('Результат фильтрации по email:', filtered);
  });

  it('совпадение по company', () => {
    const filtered = filter(objects, 'company', 'METHED');

    expect(Array.isArray(filtered)).toBe(true);
    console.log('Результат фильтрации по company:', filtered);
  });

});
