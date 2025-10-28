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

// Fechar clicando fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('privacyModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
function openModalPrivacy() {
    document.getElementById('privacyModal').style.display = 'block';
}

function closeModalPrivacy() {
    document.getElementById('privacyModal').style.display = 'none';
}

//Desktop
window.onclick = function(event) {
    const modal = document.getElementById('privacyModalDesk');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
function openModalPrivacyDesk() {
    document.getElementById('privacyModalDesk').style.display = 'block';
}

function closeModalPrivacyDesk() {
    document.getElementById('privacyModalDesk').style.display = 'none';
}


// Fechar clicando fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('termsModal');
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

//Desktop
window.onclick = function(event) {
    const modal = document.getElementById('termsModalDesk');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
function openModalTermsDesk() {
    document.getElementById('termsModalDesk').style.display = 'block';
}

function closeModalTermsDesk() {
    document.getElementById('termsModalDesk').style.display = 'none';
}


let playerBefore, playerBeforeMobile, playerAfter;
function loadVideoButtonBefore() {
    const container = document.querySelector('.video-wrap-before');
    document.getElementById("video-inner-before").style.display = "none";
    container.classList.add("playing"); // ativa o CSS de expansão

    if (window.matchMedia("(max-width: 768px)").matches) {
        if (!playerBeforeMobile || typeof playerBeforeMobile.playVideo !== "function") {
            playerBeforeMobile = new YT.Player('player-mobile', {
                height: '360',
                width: '640',
                videoId: '5jXNy_RAKxw',
                events: {
                    'onReady': () => {
                        playerBeforeMobile.playVideo();
                    },
                    'onStateChange': onPlayerStateChange
                }
            });
        }
        // playerBeforeMobile.playVideo(); // 🔥 inicia o vídeo da API
    }else{
        // === DESKTOP === YouTube...");
        if (!playerBefore || typeof playerBefore.playVideo !== "function") {
            playerBefore = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: '5jXNy_RAKxw',
                events: {
                    'onReady': () => {
                        console.log("Player pronto!");
                        playerBefore.playVideo();
                    },
                    'onStateChange': onPlayerStateChange
                }
            });
        }
        playerBefore.playVideo(); // 🔥 inicia o vídeo da API
    }
    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
            document.getElementById("video-inner-before").style.display = 'inline-block';
        }
    }
}

// AFTER
function loadVideoButtonAfter() {
    const container = document.querySelector('.video-wrap-after');
    document.getElementById("video-inner-after").style.display = "none";
    container.classList.add("playing"); // ativa o CSS de expansão
    
    if (window.matchMedia("(max-width: 768px)").matches) {
        if (!playerAfter || typeof playerAfter.playVideo !== "function") {
            playerAfter = new YT.Player('player-after', {
                height: '360',
                width: '640',
                videoId: 'K-_XRC-SHnQ',
                events: {
                    'onReady': () => {
                        console.log("Player pronto!");
                        playerAfter.playVideo();
                    },
                    'onStateChange': onPlayerStateChange
                }
            });
        }
        playerAfter.playVideo(); // 🔥 inicia o vídeo da API
    }else{
        // === DESKTOP ===
        if (!playerAfter || typeof playerAfter.playVideo !== "function") {
            playerAfter = new YT.Player('player-after', {
                height: '360',
                width: '640',
                videoId: 'K-_XRC-SHnQ',
                events: {
                    'onReady': () => {
                        playerAfter.playVideo();
                    },
                    'onStateChange': onPlayerStateChange
                }
            });
        }
        playerAfter.playVideo(); // 🔥 inicia o vídeo da API
    }
    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
            document.getElementById("video-inner-after").style.display = 'inline-block';
        }
    }
}













