const { faker } = require('@faker-js/faker')

export default class UserData {
    constructor() {
        this.randomUser = new RandomUser(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.internet.email(),
            faker.internet.password(),
            // "Qwerty1234@Army!",
            faker.address.street(),
            faker.address.city(),
            "Indiana",
            faker.address.zipCode('#####'),
            "United States",
            faker.phone.number(),
            faker.word.noun()           
        )
    }
}

class RandomUser {
    constructor(firstName, lastName, email, password, street, city, state, zipCode, country, number, noun ) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.password = password,
        this.street = street,
        this.city = city,
        this.state = state,
        this.zipCode = zipCode,
        this.country = country,
        this.number = number,
        this.noun = noun
    }
}