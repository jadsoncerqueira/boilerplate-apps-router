module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write --ignore-unknown ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm run test`
  ]
}
