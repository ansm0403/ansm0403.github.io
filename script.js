  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.proj').forEach(function (proj) {
      var btns = proj.querySelectorAll('.tab-btn');
      var panels = proj.querySelectorAll('.panel');
      function activate(i) {
        btns.forEach(function (b, j) {
          b.classList.toggle('active', j === i);
          b.setAttribute('aria-selected', j === i ? 'true' : 'false');
        });
        panels.forEach(function (p, j) { p.classList.toggle('active', j === i); });
      }
      btns.forEach(function (b, i) {
        b.addEventListener('click', function () { activate(i); });
        b.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowRight') { e.preventDefault(); var n = (i + 1) % btns.length; btns[n].focus(); activate(n); }
          if (e.key === 'ArrowLeft')  { e.preventDefault(); var n = (i - 1 + btns.length) % btns.length; btns[n].focus(); activate(n); }
        });
      });
    });

    document.querySelectorAll('.ph-code .copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var block = btn.closest('.ph-code');
        var codeEl = block.querySelector('code');
        var code = codeEl ? codeEl.textContent : '';
        var done = function () { btn.textContent = '복사됨'; btn.classList.add('done'); setTimeout(function () { btn.textContent = '복사'; btn.classList.remove('done'); }, 1400); };
        if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(code).then(done).catch(done); }
        else { done(); }
      });
    });

    var navLinks = Array.from(document.querySelectorAll('.nav nav a')).filter(function (a) { return a.getAttribute('href').charAt(0) === '#'; });
    var map = {};
    navLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var sectionIds = ['about', 'competency', 'stack', 'projects'];
    var headerEl = document.querySelector('header.nav');
    function syncActiveNav() {
      var headerH = headerEl ? headerEl.offsetHeight : 0;
      var line = window.scrollY + headerH + 1; // 헤더 바로 아래 기준선
      var atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      var currentId = sectionIds[0];
      sectionIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.offsetTop <= line) currentId = id;
      });
      if (atBottom) currentId = sectionIds[sectionIds.length - 1]; // 페이지 끝에선 마지막 섹션
      navLinks.forEach(function (a) { a.classList.remove('active'); });
      if (map[currentId]) map[currentId].classList.add('active');
    }
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(function () { syncActiveNav(); ticking = false; });
      }
    }, { passive: true });
    syncActiveNav();

    // 아키텍처 다이어그램 라이트박스 — 요약본(img[data-full]) 클릭 시 상세본 확대
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('aria-hidden', 'true');
    lb.innerHTML =
      '<div class="lb-backdrop"></div>' +
      '<figure class="lb-content">' +
        '<button class="lb-close" type="button" aria-label="닫기">×</button>' +
        '<img class="lb-img" src="" alt="">' +
        '<figcaption class="lb-cap"></figcaption>' +
      '</figure>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('.lb-img');
    var lbCap = lb.querySelector('.lb-cap');
    function openLightbox(src, alt, cap) {
      lbImg.src = src; lbImg.alt = alt || '';
      lbCap.textContent = cap || '';
      lb.classList.add('open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lb.classList.remove('open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      lbImg.src = '';
    }
    document.querySelectorAll('img[data-full]').forEach(function (img) {
      img.addEventListener('click', function () {
        openLightbox(img.getAttribute('data-full'), img.alt, img.getAttribute('data-caption'));
      });
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lbImg) return; // 확대 이미지 자체 클릭은 닫지 않음
      closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lb.classList.contains('open')) closeLightbox();
    });
  });
