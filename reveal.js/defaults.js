// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: 'beige', // Leave this alone to keep presentations consistent
    transition: 'linear', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'https://rawgithub.com/BarkleyUS/showmetech/gh-pages/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'https://rawgithub.com/BarkleyUS/showmetech/gh-pages/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'https://rawgithub.com/BarkleyUS/showmetech/gh-pages/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'https://rawgithub.com/BarkleyUS/showmetech/gh-pages/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'https://rawgithub.com/BarkleyUS/showmetech/gh-pages/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'https://rawgithub.com/BarkleyUS/showmetech/gh-pages/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});
