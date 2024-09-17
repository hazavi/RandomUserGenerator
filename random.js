/*
fetch('https://randomuser.me/api/')
    .then(response =>response.json())
    .then(data => console.log(data.results))
    .catch(error => console.error(error));
*/

/*
fetchRandomUser();
*/

async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        const result = data.results[0];
        console.log(result);

        // Picture
        const picture = result.picture.large;
        const pfp = document.getElementById("pfp");

        pfp.src = picture;
        pfp.style.display = "block";

        // Gender
        const gender = result.gender;
        document.getElementById("genderText").innerHTML = `<span class="label">Gender:</span> ${gender}`;

        // Full Name
        const fullName = `${result.name.title} ${result.name.first} ${result.name.last}`;
        document.getElementById("fullName").innerHTML = `<span class="label">Full Name:</span> ${fullName}`;

        // Age
        const age = result.dob.age;
        document.getElementById("age").innerHTML = `<span class="label">Age:</span> ${age}`;

        // Birth Date
        const birthDate = result.dob.date;
        document.getElementById("birthDate").innerHTML = `<span class="label">Birth Date:</span> ${birthDate}`;

        // Cell Number
        const cell = result.cell;
        document.getElementById("cell").innerHTML = `<span class="label">Cell Number:</span> ${cell}`;

        // Phone Number
        const phoneNumber = result.phone;
        document.getElementById("phoneNumber").innerHTML = `<span class="label">Phone Number:</span> ${phoneNumber}`;

        // Email
        const email = result.email;
        document.getElementById("email").innerHTML = `<span class="label">Email:</span> ${email}`;

        // City + Country
        const cityCountry = `${result.location.city}, ${result.location.country} (${result.nat})`;
        document.getElementById("city&country").innerHTML = cityCountry;

        // Postcode + State
        const postcodeState = `${result.location.postcode} ${result.location.state}`;
        document.getElementById("postcode&state").innerHTML = postcodeState;

        // Street
        const street = `${result.location.street.name}, ${result.location.street.number}`;
        document.getElementById("streetNumber&Name").innerHTML = street;

        // Username
        const userName = result.login.username;
        document.getElementById("userName").innerHTML = `<span class="label">Username:</span> ${userName}`;

        // Password
        const password = result.login.salt;
        document.getElementById("saltPassword").innerHTML = `<span class="label">Password:</span> ${password}`;

    } catch (error) {
        console.error(error);
    }
}
