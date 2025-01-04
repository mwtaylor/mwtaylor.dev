---
date: '{{ .Date }}'
draft: true

title: '{{ replace .File.ContentBaseName "-" " " | title }}'
summary: ""

params:
  icon: ''
  website: ''
  github: ''
---
