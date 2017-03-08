export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. Nice', hero:{id: 0, name: '', hero:{id: 0, name: '', hero:{id: 0, name: '0', hero:{id: 0, name: '', hero:{}}}}}},
      { id: 12, name: 'Narco', hero:{id: 11, name: 'Mr. Nice', hero:{id: 0, name: '', hero:{id: 0, name: '', hero:{id: 0, name: '', hero:{}}}}}},
      { id: 13, name: 'Bombasto', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 0, name: '', hero:{id: 0, name: '', hero:{}}}}}},
      { id: 14, name: 'Celeritas', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 0, name: '', hero:{}}}}}},
      { id: 15, name: 'Magneta', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{}}}}}},
      { id: 16, name: 'RubberMan', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{}}}}} },
      { id: 17, name: 'Dynama', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{}}}}} },
      { id: 18, name: 'Dr IQ', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{}}}}} },
      { id: 19, name: 'Magma', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{}}}}} },
      { id: 20, name: 'Tornado', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{id: 11, name: 'Mr. Nice', hero:{}}}}} }
    ];
    return { heroes };
  }
}
