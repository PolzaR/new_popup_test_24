         (function (popupFunc) {
                var script = document.createElement('script');
                var firstScript = document.getElementsByTagName('script')[0];
                window[popupFunc] = window[popupFunc] || function () {
                    (window[popupFunc].actions = window[popupFunc].actions || []).push(arguments);
                };
                window[popupFunc].last_init = 1 * new Date()
                window['ACPopupFuncNamePlaceholder'] = popupFunc;
                script.async = true;
                script.src = 'https://pxl.polina-zakaryan.dev.altkraft.com' + '/popup/v1/js/popupLibrary.js';
                firstScript.parentNode.insertBefore(script, firstScript);
         })('acpopup');
