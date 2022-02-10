// You will have to take each person's info  to register them. For creating their card number:
// 1.take first 2 characters from the district name and make it capital letter.   Example-from
// Dhaka , take DH,
// 2. From current year pick last two number
// 3. Concat first two numbers of the user postal number.
// 4. Add user birthdate 4 digit year
// 5. After that generate serial number with padding 0 in left from each user
// 6. Total character length will be 16
// Create a function named ‘cardDistribution()’ which will take an array of objects. Each
// object will have each person's information. (You must use exact function name, or your
// test case may fail)
// While distributing sort data alphabetically with fist characters. Sort  them with priority
// numbers. If the user has priority number 1 will be given first.
// If the last number of the card is even, give the user Red Rose , if odd give white Rose.
// R = red rose
// W = white rose

function cardDistribution(input) {
    const distribution = input.map((user) => {
        let distName = user.district.slice(0, 2).toUpperCase();
        let year = user.currentYear.toString().slice(-2);
        let postal = user.postNo.toString().slice(0, 2);
        let birthDate = user.birthYear.toString();
        let index = input.indexOf(user) + 1;
        let random = distName + year + postal + birthDate;
        let priority = user.priority;
        const arr = random.split("");
        while (arr.length < 15) {
            arr.push("0");
        }
        arr.push(index);
        return {
            cardNumber: arr.join(""),
            gift: index % 2 == 0 ? "R" : "W",
            priority,
        };
    });
    return distribution.sort((a, b) => a.priority - b.priority);
}

const userData = [
    {
        name: "Mr Rashed",
        birthYear: 1999,
        currentYear: 2022,
        district: "Dhaka",
        postNo: 1200,
        priority: 2,
    },
    {
        name: "Mr Raju",
        birthYear: 1995,
        currentYear: 2022,
        district: "Rajshahi",
        postNo: 1211,
        priority: 1,
    },
];

console.log(cardDistribution(userData));
