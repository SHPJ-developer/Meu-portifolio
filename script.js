// 1. CONFIGURAÇÃO DOS DADOS
const meusDados = {
  email: "sergin_hp@icloud.com",
  tel: "5532991580386",
};

function revelarContato(tipo) {
  const container =
    tipo === "email"
      ? document.getElementById("container-email")
      : document.getElementById("container-tel");
  const valor = meusDados[tipo];

  if (tipo === "email") {
    container.innerHTML = `
            <a href="mailto:${valor}" class="text-white font-mono font-bold animate-in fade-in duration-500">
                ${valor}
            </a>
            <button onclick="copiarTexto('${valor}', this)" class="bg-slate-700 hover:bg-slate-600 text-[10px] px-2 py-1 rounded text-slate-200 transition-all ml-2">
                Copiar
            </button>
        `;
  } else {
    const mensagem = encodeURIComponent(
      "Olá, vi seu portfólio e gostaria de conversar!",
    );
    const linkWpp = `https://wa.me/${valor}?text=${mensagem}`;

    container.innerHTML = `
            <a href="${linkWpp}" target="_blank" class="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all transform hover:scale-105 animate-in zoom-in duration-300">
                <span>Abrir WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.601 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
            </a>
        `;
  }
}

function copiarTexto(texto, botao) {
  navigator.clipboard.writeText(texto).then(() => {
    const originalText = botao.innerText;
    botao.innerText = "Copiado! ✅";
    botao.classList.add("bg-green-600");
    setTimeout(() => {
      botao.innerText = originalText;
      botao.classList.remove("bg-green-600");
    }, 2000);
  });
}
