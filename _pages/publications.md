---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<h2>Conference Papers</h2>

<div class="publications">

<!-- Display only conference papers from bibliography -->

{% bibliography --query @inproceedings %}

</div>
