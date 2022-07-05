import signup from '../pages/SignupPage';
import SignupFactory from '../factories/SignupFactory';


describe('Signup', () => {

    //beforeEach(function () {
        //signup.go();

        /* cy.fixture('deliver').then((d) => {
            this.deliver = d
        }) */
    //})

    it('User should be deliver', function () {

        var deliver = SignupFactory.deliver()

        signup.go();

        //preencher Form
        //signup.fillForm(this.deliver.signup)
        signup.fillForm(deliver)

        //submeter Form 
        signup.submit()

        //Validar Form
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect document', function () {

        var deliver = SignupFactory.deliver()
        deliver.cpf = '000000141aa'

        signup.go();

        //preencher Form
        //signup.fillForm(this.deliver.cpf_inv)
        signup.fillForm(deliver)

        //submeter Form 
        signup.submit()

        //Validar mensagem Erro CPF
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect E-mail', function () {

        var deliver = SignupFactory.deliver()
        deliver.email = 'teste_sid.com.br'

        signup.go();

        //preencher Form
        //signup.fillForm(this.deliver.email_inv)
        signup.fillForm(deliver)

        //submeter Form 
        signup.submit()

        //Validar mensagem Erro CPF
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function(){
        const messages = [
            {field:'name', output: 'É necessário informar o nome'},
            {field:'cpf', output: 'É necessário informar o CPF'},
            {field:'email', output: 'É necessário informar o email'},
            {field:'postacode', output: 'É necessário informar o CEP'},
            {field:'number', output: 'É necessário informar o número do endereço'},
            {field:'deliveruy_method', output: 'Selecione o método de entrega'},
            {field:'cnh', output: 'Adicione uma foto da sua CNH'}
        ]
        before(function(){
            signup.go();
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })

})