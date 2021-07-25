var highlight = require('@vuepress/markdown/lib/highlight.js');

// https://vuepress.vuejs.org/config/#basic-config
module.exports = {
	title: 'Flutter Best Practices',
	head: [
		['script', { defer: true, type: 'text/javascript', src: 'https://dartpad.dev/inject_embed.dart.js' }]
	],
	devtool: 'inline-source-map',

	markdown: {
		extendMarkdown: md => {
			md.set({ highlight: function (str, lang) {
				var lowerCasedLang = lang.toLowerCase();
				if (lowerCasedLang == 'dartpad:flutter') {
					return '<pre><code class="language-run-dartpad:theme-dark:mode-flutter:width-100%:height-600px">' +  md.utils.escapeHtml(str) + '</code></pre>';
				} else if (lowerCasedLang == 'dartpad:dart') {
					return '<pre><code class="language-run-dartpad:theme-dark:mode-dart:width-100%:height-600px">' +  md.utils.escapeHtml(str) + '</code></pre>';
				}
				return highlight(str, lang);
			}})
	    }
	  	
	}
}