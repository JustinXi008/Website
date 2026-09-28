# Justin Xi — Personal Website

A simple multi-page portfolio built with plain HTML, CSS, and a small amount of vanilla JavaScript.

## Pages

- `index.html` — short introduction, contact links, rotating Explore cards, and a timeline of the two latest posts.
- `posts.html` — the complete archive of news and project updates.
- `posts/` — full articles with publication dates and links to related posts.
- `site.js` — cycles the featured project and coursework entries on the home page.
- `projects.js` — opens linked project-detail popups on the Projects page.
- `projects.html` — robotics, personal, and EECS 280 projects, with expandable project details.
- `coursework.html` — University of Michigan coursework grouped by semester.
- `resume.html` — in-browser résumé preview with a PDF download option.
- `assets/Justin-Xi-Resume.pdf` — the résumé displayed by the preview page.

## Preview

Run this command from the project folder:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open http://localhost:8000.

There are no dependencies or build steps.

## Updating the site

- Add completed projects to `projects.html` and replace the “Frontend planned” labels when demos are ready.
- Add news and project updates to `posts.html`, placing the latest entry first, and keep only the two newest entries in the timeline on `index.html`. Link each “Read more” button to a full article in `posts/`; use an existing article as a template. Set both the displayed date and its `datetime` value.
- Add future courses to `coursework.html`.
- Replace `assets/Justin-Xi-Resume.pdf` when the résumé changes, keeping the same filename so links continue to work.
