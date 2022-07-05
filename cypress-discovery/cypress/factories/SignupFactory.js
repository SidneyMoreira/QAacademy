
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function(){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var data = {
            name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: 11999999999,
                address: {
                    postalcode: '14801013',
                    street: 'Rua Samuel Brasil Bueno',
                    number: 445,
                    details: 'Bloco 3 - Apto 204',
                    district: 'Solidariedade',
                    city_state: 'Araraquara/SP'
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
        }
        return data
    }
}