document.querySelectorAll('details').forEach(detail => {
  const content = detail.querySelector('.content');
  if(detail.open) content.style.maxHeight = content.scrollHeight + 'px';

  detail.addEventListener('toggle', () => {
    if(detail.open) content.style.maxHeight = content.scrollHeight + 'px';
    else content.style.maxHeight = 0;
  });

  window.addEventListener('resize', () => {
    if(detail.open) content.style.maxHeight = content.scrollHeight + 'px';
  });
});

function openModalPrivacy() {
    document.getElementById('privacyModal').style.display = 'block';
}

function closeModalPrivacy() {
    document.getElementById('privacyModal').style.display = 'none';
}

// Fechar clicando fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('privacyModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
function openModalTerms() {
    document.getElementById('termsModal').style.display = 'block';
}

function closeModalTerms() {
    document.getElementById('termsModal').style.display = 'none';
}

// Fechar clicando fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('termsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function loadVideoButton() {
    const videoId = "5jXNy_RAKxw"; // ID do YouTube
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    // Insere o iframe dentro do container do vídeo
    const displayBtnVerticalBefore = document.getElementById("display-button-vertical-before");
    displayBtnVerticalBefore.style.display = "none";
    
    const container = document.querySelector('.video-wrap-before');
    container.innerHTML = '';
    container.appendChild(iframe);

    container.classList.add("playing"); // ajusta o container
}

function loadVideoButtonAfter() {
    const videoId = "K-_XRC-SHnQ"; // ID do YouTube
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`;
    
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";

    // Insere o iframe dentro do container do vídeo
    const displayBtnVerticalAfter = document.getElementById("display-button-vertical-after");
    displayBtnVerticalAfter.style.display = "none";

    const container = document.querySelector('.video-wrap-after');
    container.innerHTML = '';
    container.appendChild(iframe);

    container.classList.add("playing"); // ajusta o container
}

let playerBefore, playerAfter;

// A função que será chamada pela API do YouTube quando estiver pronta
function onYouTubeIframeAPIReady() {
    console.log("API do YouTube carregada");

    // === BEFORE ===
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '5jXNy_RAKxw', // Substitua aqui pelo ID do seu vídeo
        events: {
            'onReady': function () {
            console.log("Player pronto!");
            },
            'onStateChange': onPlayerStateChange
        }
    });

    // === AFTER ===
    playerAfter = new YT.Player('player-after', {
        height: '360',
        width: '640',
        videoId: 'K-_XRC-SHnQ', // Substitua pelo ID do vídeo after
        events: {
            'onReady': () => console.log("Player AFTER pronto!"),
            'onStateChange': onPlayerStateChangeAfter
        }
    });
}
function onPlayerStateChange(event) {
    console.log("🎥 Estado do player:", event.data);
    if (event.data === YT.PlayerState.ENDED) {
        console.log("🏁 Vídeo finalizado!");
        document.getElementById("video-cover").style.display = 'inline-block';
        document.getElementById('display-button').style.display = 'inline-block';
    }
}
const displayBtn = document.getElementById("display-button");
const cover = document.getElementById("video-cover");
const container = document.querySelector(".video-wrap-before-horizontal");


function loadVideoButtonHorizontal() {
    document.getElementById("video-cover").style.display = "none";
    displayBtn.style.display = "none";
    container.classList.add("playing"); // ativa o CSS de expansão
    player.playVideo(); // 🔥 inicia o vídeo da API
}

function onPlayerStateChangeAfter(event) {
    if (event.data === YT.PlayerState.ENDED) {
        document.getElementById("video-cover-after").style.display = "flex";
        document.getElementById("display-button-after").style.display = "flex";
    }
}

const displayBtnAfter = document.getElementById("display-button-after");
const coverAfter = document.getElementById("video-cover-after");
const containerAfter = document.querySelector(".video-wrap-after-horizontal");

function loadVideoButtonHorizontalAfter() {
    document.getElementById("video-cover-after").style.display = "none";
    displayBtnAfter.style.display = "none";
    containerAfter.classList.add("playing"); // ativa o CSS de expansão
    playerAfter.playVideo(); // 🔥 inicia o vídeo da API
}











// let playerAfter;
// // A função que será chamada pela API do YouTube quando estiver pronta
// function onYouTubeIframeAPIReadyAfter() {
//     console.log("API do YouTube carregada");
//     playerAfter = new YT.Player('player-after', {
//     height: '360',
//     width: '640',
//     videoId: '5jXNy_RAKxw', // Substitua aqui pelo ID do seu vídeo
//     events: {
//         'onReady': function () {
//         console.log("Player pronto!");
//         },
//         'onStateChange': onPlayerStateChangeAfter
//     }
//     });
// }
// function onPlayerStateChangeAfter(event) {
//     console.log("🎥 Estado do player:", event.data);
//     if (event.data === YT.PlayerState.ENDED) {
//         console.log("🏁 Vídeo finalizado!");
//         document.getElementById("video-cover-after").style.display = 'inline-block';
//         document.getElementById('display-button-after').style.display = 'inline-block';
//     }
// }
// const displayBtnAfter = document.getElementById("display-button-after");
// const coverAfter = document.getElementById("video-cover-after");
// const containerAfter = document.querySelector(".video-wrap-after-horizontal");

// function loadVideoButtonHorizontalAfter() {
//     document.getElementById("video-cover-after").style.display = "none";
//     displayBtnAfter.style.display = "none";
//     containerAfter.classList.add("playing"); // ativa o CSS de expansão
//     playerAfter.playVideo(); // 🔥 inicia o vídeo da API
// }