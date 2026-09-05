---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

This page lists selected publications and ongoing research outputs.

For the most up-to-date record, see <a href="https://scholar.google.com/citations?user=xUIPO3gAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">my Google Scholar profile</a>.

{% include base_path %}

{% assign pubs = site.publications | sort: 'date' | reverse %}
{% for post in pubs %}
  {% include archive-single.html %}
{% endfor %}
