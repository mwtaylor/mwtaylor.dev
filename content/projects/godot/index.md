---
date: '2025-05-28T18:56:13-07:00'
draft: false
weight: 3

title: 'Godot 2D Game Example '
summary: 'An example Godot game based on the Dodge the Creeps tutorial that also 
          incorporates additional common elements in games like saving settings,
          game saves, translations, and credits'

params:
  icon: 'icon_color.png'
  iconAlt: 'A blue character face with gear teeth as hair and interlocking gears as the jaw'
  website: ''
  github: 'https://github.com/mwtaylor/Godot2dExample'
  cssClass: ''
---

This project builds upon the Godot 2D game tutorial ["Dodge the Creeps"][1] by adding things
that are needed in all games and can be used as a reference when starting a new Godot
project. 

The project is entirely coded in C# as that is my preference over GDScript. Some things may be
easier in GDScript but I find it difficult to work with both in the same project so I made the
decision to go with C# only.

Parts of this project could be broken off into reusable components in the future.

# Implemented Features

## Translation

The project uses the [built-in Godot translation support][2] for [gettext][3] files.

Godot does not support .pot file generation for C# code, so an [additional script][4] is used
to create a .pot file from the code and then merge it with Godot's file. It uses `xgettext` with
C# language support to look for all text inside a call to a function named `Translate`.

In C# always use `TranslationServer.Translate` to support translatable text. Text for logging or anything else not displayed
in game does not need to be translated.

```csharp
_hud.ShowMessage(TranslationServer.Translate("Get Ready!"));
```

[1]: https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html#
[2]: https://docs.godotengine.org/en/latest/tutorials/i18n/localization_using_gettext.html
[3]: https://en.wikipedia.org/wiki/Gettext
[4]: https://github.com/mwtaylor/Godot2dExample/blob/b1fcb7804cbd80eefe83327cc2456109fe5e3311/generate_pot.sh
