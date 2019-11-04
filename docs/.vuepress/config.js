var highlight = require('@vuepress/markdown/lib/highlight.js');

// https://vuepress.vuejs.org/config/#basic-config
module.exports = {
	title: 'Flutter Best Practices',
	head: [
		['script', { defer: true, src: 'https://dartpad.dev/experimental/inject_embed.dart.js' }]
	],

	markdown: {
		extendMarkdown: md => {
			md.set({ highlight: function (str, lang) {
				if (lang.toLowerCase() == 'flutter') {
				 return '<pre><code class="language-run-dartpad:theme-dark:mode-flutter">' +  md.utils.escapeHtml(str) + '</code></pre>';
				}
				return highlight(str, lang);
			}})
	    }
	  	
	}
}