# readme-preview

Preview your README file as it will appear on npmjs.com, before publishing.


## Installation

```bash
$ npm install tomprogers/preview-readme
```


## Usage

```bash
cd ~/code/my-repo
preview-readme
```

See your file, rendered at [http://localhost:5000](http://localhost:5000)

Renders the first of these files that it finds in the current directory:

1. `README`
1. `README.md`
1. `Readme.md`
1. `README.markdown`


## API keys

If you need more than 60 renders per hour, you can get 5000 per hour by going to [GitHub Applications Settings](https://github.com/settings/applications) and create a new Personal Access Token. Then, put this in your `.bash_profile` so that preview-readme can use it:

```
# ~/.bash_profile
README_PREVIEW_API_KEY=yourapitoken
```

You can also send it as an argument: `preview-readme <token>`.


## Development roadmap

I want to convert this to a self-contained, cross-platform CLI tool, with the following features:

- offline use (embedded MD parser, local copies of styling assets)
- watch files
- support for theming (themes in `~/.readu/themes/[themename]`)
- preview using current NPM and GitHub themes

### CLI interface planning

Playing with command name and options to find what works & seems reasonable. Not married to any of these yet.

`$ readu`

snapshot of readme produced using local md parser & local css

`$ readu file.md`

snapshot of file.md produced locally

`$ readu -w --watch`

watches source file, parses locally

`$ readu -r --remote`

snapshot of readme produced using github parser & npm css

`$ readu -t TOKEN --token TOKEN`

snapshot of readme produced using github parser with provided token & npm css 


`$ readu help.md -w -t 800d1e`

`--watch`

`--token TOKEN`

`--theme themename` // resolved against ~/.readu/themes/themename
