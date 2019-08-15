'use strict';

const opt_approved = {
    body: 'Temos novidades sobre o seu empréstimo!',
    icon: 'images/bv-logo-sm.png',
    badge: 'images/badge.png',
    sound: 'mp3/accomplished.mp3'
};

const opt_dvv = {
    body: 'Revise os documentos da sua proposta!',
    icon: 'images/bv-logo-sm.png',
    badge: 'images/badge.png',
    sound: 'mp3/accomplished.mp3'
}

const opt_neg = {
    body: 'Infelizmente sua proposta foi negada, acesse e saiba mais!',
    icon: 'images/bv-logo-sm.png',
    badge: 'images/badge.png',
    sound: 'mp3/accomplished.mp3'
}

// self.addEventListener('activate', event => {
//     clients.claim();
// });

self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    let dt_status = JSON.parse(event.data.text().replace(/\'/g, '"'));
    let title = '';
    let options = {};

    if (dt_status.status === "APR") {
        title = "APROVADO";
        options = opt_approved
    }
    else if (dt_status.status === "DVV") {
        title = "Proposta devolvida!";
        options = opt_dvv;
    } else {
        title = "Proposta negada!";
        options = opt_neg
    }

    const notificationPromise = self.registration.showNotification(title, options);
    event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function (event) {
    console.log('[Service Worker] Notification click Received.');

    event.notification.close();

    event.waitUntil(
        clients.openWindow('https://developers.google.com/web/')
    );
});