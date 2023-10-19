$(document).ready(function () {
    let people = [];

    const displayData = (result) => {
        $('#people').html(JSON.stringify(result, null, 2));
    };
    $('#generate').click(() => {
        people = [
            { name: 'Makenzie', age: 21 },
            { name: 'Yun', age: 30 },
            { name: 'Bob', age: 15 },
        ];
        displayData(people);
    });

    $('#sortAge').click(() => {
        const sortedData = _.sortBy(people, 'age');
        displayData(sortedData);
    });

    $('#filterAdults').click(() => {
        const filteredData = _.filter(people, (person) => person.age >= 21);
        displayData(filteredData);
    });

    $('#countAdults').click(() => {
        const adultsCount = _.filter(people, (person) => person.age >= 18).length;
        displayData(`Number of Adults: ${adultsCount}`);
    });

    $('#findOldest').click(() => {
        const oldestPerson = _.maxBy(people, 'age');
        displayData(oldestPerson);
    });

    $('#showNames').click(() => {
        const mappedData = _.map(people, 'name');
        displayData(mappedData);
    });

    $('#shufflePeople').click(() => {
        const shuffledData = _.shuffle(people);
        displayData(shuffledData);
    });

    $('#addRandomPerson').click(() => {
        const randomAge = Math.floor(Math.random() * 20) + 1;
        people.push({ name: 'New Person', age: randomAge });
        displayData(people);
    });

    $('#removeLastPerson').click(() => {
        people.pop();
        displayData(people);
    });

    $('#getOlder').click(() => {
        people = people.map((person) => {
            return {
                name: person.name,
                age: person.age + 5,
            };
        });
        displayData(people);
    });

    $('#getYounger').click(() => {
        people = people.map((person) => {
            const newAge = Math.max(person.age - 5, 0);
            return {
                name: person.name,
                age: newAge,
            };
        });
        displayData(people);
    });

});
