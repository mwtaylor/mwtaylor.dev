---
date: '{{ .Date }}'
draft: true
weight: 0

title: '{{ replace .File.ContentBaseName "-" " " | title }}'
summary: ""

params:
  icon: ''
  iconAlt: ''
  website: ''
  github: ''
  cssClass: ''
---
