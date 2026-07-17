# Wenqi Cai's Academic Homepage

Source code for [wenqi-cai297.github.io](https://wenqi-cai297.github.io), the academic homepage of Wenqi Cai.

## Content

- `_pages/about.md`: homepage and profile
- `_bibliography/papers.bib`: publications
- `_news/`: research news and announcements
- `assets/json/resume.json`: CV data
- `_data/socials.yml`: social and contact links

## Local preview

Install Ruby, Bundler, and ImageMagick, then run:

```bash
bundle install
bundle exec jekyll serve
```

The site is available at <http://localhost:4000> by default. Docker-based development is also available with `docker compose up`.

## Deployment

Changes pushed to `main` are built and published to the `gh-pages` branch by the `Deploy site` GitHub Actions workflow.

This site is based on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and retains its MIT license.
