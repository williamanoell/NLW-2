// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// Quando clicar no notão


// Executar uma açaõ
function cloneField() {
    // Duplicar campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos
    const fields = newFieldsContainer.querySelectorAll('input')

    // para limpar cada campo
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = "";
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}  