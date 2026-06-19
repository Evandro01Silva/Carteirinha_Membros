// Lógica para carregar as fotos individualmente
const inputsFoto = document.querySelectorAll('.upload-foto');

inputsFoto.forEach(input => {
    input.addEventListener('change', function(event) {
        const arquivo = event.target.files[0];
        const preview = this.nextElementSibling;
        
        if (arquivo) {
            const leitor = new FileReader();
            leitor.onload = function(e) {
                preview.innerHTML = ''; // Remove o texto "Foto 3x4"
                preview.style.border = 'none'; // Remove o tracejado
                preview.style.backgroundImage = `url('${e.target.result}')`;
            }
            leitor.readAsDataURL(arquivo);
        }
    });
});

// Imprimir via navegador
function imprimir() {
    window.print();
}