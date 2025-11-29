// main.ts
//
// repo   : https://github.com/space-lib/space
// author : https://github.com/maysara-elshewehy
//
// Developed with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { App } from './app';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    const app = App.create({
        name        : 'Space',
        version     : '0.0.2',
        desc        : 'Build flexible spaces for any platform',
    });

    app.run();

// ╚══════════════════════════════════════════════════════════════════════════════════════╝