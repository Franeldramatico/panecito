// Función de alerta de bienvenida
function showWelcomeAlert() {
    Swal.fire({
        title: '<span style="color: var(--miku-blue)">Bienvenido</span> <span style="color: var(--eminem-yellow)">a la Fusión</span>',
        html: '<p>Explora la combinación única entre el universo digital de <strong style="color: var(--miku-blue)">Hatsune Miku</strong> y el legado del rap de <strong style="color: var(--eminem-yellow)">Eminem</strong>.</p><img src="https://preview.redd.it/hatsune-miku-x-eminem-godzilla-art-by-reisame-9-v0-9pjwdsjdgqae1.jpeg?auto=webp&s=5dc485f78f89fc1f36c375b67acf2f386fc79079" style="width: 100%; border-radius: 10px;">',
        icon: 'info',
        background: 'var(--card-bg)',
        color: 'white',
        confirmButtonText: 'Comenzar Experiencia',
        confirmButtonColor: 'var(--miku-blue)',
        customClass: {
            popup: 'fusion-card'
        }
    });
}

// Función para mostrar imagen en alerta
function showImageAlert(imageUrl, title) {
    Swal.fire({
        title: title,
        imageUrl: imageUrl,
        imageWidth: '100%',
        imageAlt: title,
        background: 'var(--card-bg)',
        color: 'white',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: 'var(--eminem-yellow)',
        customClass: {
            popup: 'fusion-card'
        }
    });
}

// Funciones de reproducción de música con modal
function playMikuSong() {
    document.getElementById('musicIframe').src = 'https://www.youtube.com/embed/73StnC7pDT0?autoplay=1&mute=0&enablejsapi=1';
    new bootstrap.Modal(document.getElementById('musicModal')).show();
}

function playEminemSong() {
    document.getElementById('musicIframe').src = 'https://www.youtube.com/embed/xFYQQPAOz7Y?autoplay=1&mute=0&enablejsapi=1';
    new bootstrap.Modal(document.getElementById('musicModal')).show();
}

function playFusionMix() {
    const iframe = document.getElementById('musicIframe');
    iframe.src = 'https://www.youtube.com/embed/2ZlYGYeU588?autoplay=1&mute=0&enablejsapi=1';
    const modal = new bootstrap.Modal(document.getElementById('musicModal'));
    modal.show();
}

function playRandomSong() {
    const songs = [
        { url: 'https://www.youtube.com/embed/73StnC7pDT0', name: "Miku - World is Mine", color: "var(--miku-blue)" },
        { url: 'https://www.youtube.com/embed/Mqps4anhz0Q', name: "Miku - Senbonzakura", color: "var(--miku-blue)" },
        { url: 'https://www.youtube.com/embed/xFYQQPAOz7Y', name: "Eminem - Lose Yourself", color: "var(--eminem-yellow)" },
        { url: 'https://www.youtube.com/embed/r_0JjYUe5jo', name: "Eminem - Godzilla", color: "var(--eminem-yellow)" },
        { url: 'https://www.youtube.com/embed/qAN_OsIsW9s', name: "Fusion - Rap God's Wedding", color: "linear-gradient(135deg, var(--miku-blue) 0%, var(--eminem-yellow) 100%)" }
    ];
    
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    document.getElementById('musicIframe').src = randomSong.url + '?autoplay=1&mute=0&enablejsapi=1';
    new bootstrap.Modal(document.getElementById('musicModal')).show();
}

// Función para mostrar historia de la fusión
function showFusionStory() {
    Swal.fire({
        title: 'La Historia de la Fusión',
        html: `<div style="text-align: left;">
            <p>Esta fusión nació de la creatividad de la comunidad, donde fans de ambos artistas comenzaron a crear:</p>
            <ul>
                <li><strong style="color: var(--miku-blue)">Remixes musicales</strong> combinando las voces de Miku con beats de Eminem</li>
                <li><strong style="color: var(--eminem-yellow)">Arte digital</strong> que representa a ambos iconos en un mismo universo</li>
                <li><strong>Historias y cómics</strong> explorando narrativas cruzadas</li>
            </ul>
            <p>Lo que comenzó como experimentos creativos se ha convertido en un movimiento artístico que celebra la diversidad musical.</p>
        </div>`,
        width: 600,
        background: 'var(--card-bg)',
        color: 'white',
        confirmButtonText: 'Descubrir Más',
        confirmButtonColor: 'var(--miku-blue)',
        customClass: {
            popup: 'fusion-card'
        }
    });
}

// Función para unirse a la comunidad
function joinCommunity() {
    Swal.fire({
        title: 'Únete a la Comunidad',
        html: `<p>Conéctate con otros fans y creadores:</p>
        <div class="d-flex justify-content-center my-4">
            <div class="social-icon mx-2" style="background: var(--miku-blue)"><i class="bi bi-discord"></i></div>
            <div class="social-icon mx-2" style="background: var(--eminem-yellow)"><i class="bi bi-reddit"></i></div>
        </div>
        <p>Comparte tus creaciones, participa en eventos y colabora en proyectos futuros.</p>
        <a href="https://discord.com/invite/Eminem" target="_blank" class="btn btn-primary">Unirse al Discord de Eminem</a>`,
        background: 'var(--card-bg)',
        color: 'white',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Quizás después',
        cancelButtonColor: 'var(--eminem-yellow)',
        customClass: {
            popup: 'fusion-card'
        }
    });
}

// Función para alertas de redes sociales con links reales
function showSocialAlert(platform) {
    let mikuUrl = '';
    let eminemUrl = '';
    let mikuName = 'Hatsune Miku';
    let eminemName = 'Eminem';

    if (platform === 'YouTube') {
        mikuUrl = 'https://www.youtube.com/channel/UCJwGWV914kBlV4dKRn7AEFA';
        eminemUrl = 'https://www.youtube.com/channel/UCfM3zsQsOnfWNUppiycmBuw';
    } else if (platform === 'Spotify') {
        mikuUrl = 'https://open.spotify.com/artist/6pNgnvzBa6Bthsv8SrZJYl';
        eminemUrl = 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR';
    } else if (platform === 'Twitter') {
        mikuUrl = 'https://twitter.com/cfm_miku_en';
        eminemUrl = 'https://twitter.com/eminem';
        platform = 'X (Twitter)';
    } else if (platform === 'Instagram') {
        mikuUrl = 'https://www.instagram.com/cfm_miku_official/';
        eminemUrl = 'https://www.instagram.com/eminem/';
    }

    Swal.fire({
        title: `Sigue en ${platform}`,
        html: `
            <a href="${mikuUrl}" target="_blank" style="color: var(--miku-blue);">${mikuName} en ${platform}</a><br>
            <a href="${eminemUrl}" target="_blank" style="color: var(--eminem-yellow);">${eminemName} en ${platform}</a>
        `,
        icon: 'info',
        background: 'var(--card-bg)',
        color: 'white',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: 'var(--miku-blue)',
        customClass: {
            popup: 'fusion-card'
        }
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura para el título principal
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.animation = 'fadeInUp 1s ease forwards 0.5s';
    }
    
    // Mostrar alerta de bienvenida después de un tiempo
    setTimeout(() => {
        showWelcomeAlert();
    }, 1000);

    // Resetear iframe al cerrar el modal para detener el video
    document.getElementById('musicModal').addEventListener('hidden.bs.modal', function () {
        document.getElementById('musicIframe').src = '';
    });
});