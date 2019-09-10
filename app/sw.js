'use strict';

const opt_approved = {
    body: 'Temos novidades sobre o seu empréstimo!',
    icon: 'images/icon.png',
    badge: 'images/badge.png',
    sound: 'mp3/accomplished.mp3'
};

const opt_dvv = {
    body: 'Revise os documentos da sua proposta!',
    icon: 'images/icon.png',
    badge: 'images/badge.png',
    sound: 'mp3/accomplished.mp3'
}

const opt_neg = 

self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
    let title = 'Titulo da mensagem';
    let options = {
        body: 'Exemplo de mensagem',
        icon: 'images/icon.png',
        badge: 'images/badge.png'
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