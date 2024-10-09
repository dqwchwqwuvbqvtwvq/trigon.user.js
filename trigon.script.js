// ==UserScript==
// @name         Bypass Trigon
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect Linkvertise to specified URLs and execute scripts accordingly
// @author       Jova/Zamx
// @icon         https://media.discordapp.net/attachments/1250413925862739968/1293226431408640021/image0.jpg?ex=67069a78&is=670548f8&hm=488eac41d73cb4ebe019dbb110c82661c5cb625616ac65120e8c1fb526b5fe0e&
// @match        https://linkvertise.com/377810/709.20010037217/dynamic?r=aHR0cHM6Ly90cmlnb25ldm8uZnVuL3doaXRlbGlzdC92ZXJpZnk%2FdmVyaWZ5PTEmY2hlY2twb2ludD0xJkhXSUQ9OWNjMmRmMDktNGU0OC00ZTIyLWI1ZTUtMmZjMDY1NzgxODk%3D&o=sharing
// @match        https://trigonevo.fun/whitelist/?HWID=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const redirect = (url) => {
        window.stop();  // Stop the page load
        window.location.href = url;  // Redirect to the new URL
    };

    const currentUrl = window.location.href;

    if (currentUrl === 'https://linkvertise.com/377810/709.20010037217/dynamic?r=aHR0cHM6Ly90cmlnb25ldm8uZnVuL3doaXRlbGlzdC92ZXJpZnk%2FdmVyaWZ5PTEmY2hlY2twb2ludD0xJkhXSUQ9OWNjMmRmMDktNGU0OC00ZTIyLWI1ZTUtMmZjMDY1NzgxODk%3D&o=sharing') {
        redirect("https://trigonevo.fun/whitelist/?HWID=");
    }
})();
