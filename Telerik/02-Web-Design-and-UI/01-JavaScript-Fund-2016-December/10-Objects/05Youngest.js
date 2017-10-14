function solve(args) {
    var x = args.length;
    var people = [];
    var arr = [].slice.call(args);
    for (var i = 0; i < x; i+=3) {
            var man = personCon(arr[0+i],arr[1+i],arr[2+i])
            people.push(man);
        }
        youngestPerson(people);
    function personCon(fname, lname, age) {
        return {firstname: fname, lastname: lname, age: age}
    }
    function youngestPerson(people) {
        people.sort(function(a, b) {return a.age - b.age});
        console.log(people[0].firstname + ' ' + people[0].lastname);
    }
}

solve(
[
  'Penka', 'Hristova', '61',
  'System', 'Failiure', '88',
  'Bat', 'Man', '16',
  'Malko', 'Kote', '72'
]);