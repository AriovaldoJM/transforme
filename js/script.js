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