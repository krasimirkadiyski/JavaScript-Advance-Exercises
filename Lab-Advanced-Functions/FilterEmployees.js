function filterByCriteria(objArr, criteria) {
    let parsedObjArr = JSON.parse(objArr);
    let [criteriaKey, criteriaValue] = criteria.split("-");
    if (criteria != 'all') {
        parsedObjArr = parsedObjArr.filter((obj) => obj[criteriaKey] == criteriaValue);
    } 
    for (const obj of parsedObjArr) {
        console.log(`${parsedObjArr.indexOf(obj)}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
    }
}
filterByCriteria(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
);