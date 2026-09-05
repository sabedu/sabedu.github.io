---
layout: archive
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

## Education

- **PhD in Software Engineering (ongoing)**, Concordia University
- **MSc**, University of Ghana
- **BSc**, University of Cape Coast

## Research Interests

- Large language models for software engineering
- Mining software repositories
- Software engineering for AI systems
- Explainable and fair AI

## Publications

<ul>
{% assign pubs = site.publications | sort: 'date' | reverse %}
{% for post in pubs %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>

## Profiles

- [Google Scholar](https://scholar.google.com/citations?user=xUIPO3gAAAAJ&hl=en)
- [GitHub](https://github.com/sabedu)
