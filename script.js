document.addEventListener('DOMContentLoaded', () => {
    
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');

    // Máscara Dinâmica para o CPF
    cpfInput.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = v;
    });

    // Máscara Dinâmica para o Telefone / WhatsApp
    telefoneInput.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        e.target.value = v;
    });

    /* Atenção Desenvolvedor: 
       A lógica de envio (e.preventDefault, fetch, etc) foi removida.
       O envio agora é gerenciado nativamente pelo HTML através da tag <form action="...">
       O usuário será redirecionado para a página de sucesso do serviço escolhido (ex: Formspree)
       após clicar em "Finalizar Matrícula".
    */
});