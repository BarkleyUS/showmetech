// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: 'showmetech',
    transition: 'linear',

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'http://barkleyus.github.io/showmetech/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'http://barkleyus.github.io/showmetech/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'http://barkleyus.github.io/showmetech/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'http://barkleyus.github.io/showmetech/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'http://barkleyus.github.io/showmetech/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'http://barkleyus.github.io/showmetech/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});
