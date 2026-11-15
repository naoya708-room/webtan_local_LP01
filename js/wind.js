(function () {
  'use strict';

  /** Wind line SVG (from Figma publish reference) */
  var WIND_PATHS = [
    { className: 'wind wind-1', d: 'M-40 110C110 40 190 170 330 103S570 12 720 105s210 42 320-25' },
    { className: 'wind wind-2', d: 'M-80 225c165-100 282 66 430-7s236-77 362 15 226 90 350-10' },
    { className: 'wind wind-3', d: 'M-40 330c135-56 215 34 347-24s224-10 351 47 252-46 390-15' },
    { className: 'wind wind-4', d: 'M330 130c75-52 134-26 197 31s125 53 192 16' }
  ];

  function createWindLines(extraClass) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'wind-lines' + (extraClass ? ' ' + extraClass : ''));
    svg.setAttribute('viewBox', '0 0 1000 420');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');

    WIND_PATHS.forEach(function (item) {
      var path = document.createElementNS(ns, 'path');
      path.setAttribute('class', item.className);
      path.setAttribute('pathLength', '1');
      path.setAttribute('d', item.d);
      svg.appendChild(path);
    });

    return svg;
  }

  document.querySelectorAll('[data-wind]').forEach(function (host) {
    var extra = host.getAttribute('data-wind-class') || '';
    host.insertBefore(createWindLines(extra), host.firstChild);
  });
})();