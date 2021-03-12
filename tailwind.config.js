const isProduction = !process.env.ROLLUP_WATCH;

module.exports = {
    purge: {
        content: ['./public/index.html', './src/**/*.svelte'],
        // this is for extracting Svelte `class:` syntax but is not perfect yet, see below
        defaultExtractor: content => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'))
            const matches = broadMatches
                .concat(broadMatchesWithoutTrailingSlash)
            return matches
        },
        enabled: isProduction // disable purge in dev
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
