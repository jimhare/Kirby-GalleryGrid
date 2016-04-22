# [Kirby - GalleryGrid](https://github.com/1n3JgKl9pQ6cUMrW/Kirby-GalleryGrid)

#### Version 1.0.0 - 2016-04-22
- Initial Public Offering...

****

### What is it?

**[Kirby - GalleryGrid](https://github.com/1n3JgKl9pQ6cUMrW/Kirby-GalleryGrid)** enables you to see a live preview of every image in the file-panel.

More info about Kirby can be found at **http://getkirby.com**

##Installation##

- Download the .zip-file and extract it to the root of your site.
- The plug-in acts as a field, so it must be place in the ```site\fields``` folder of your site.
- Once the "plug-in" is placed in the right directory, add the GalleryGrid field to every blueprint you want to.
- There is an example blueprint included in the .zip-file, but basically the field is used like this;

```
fields:

  gallerygrid:
    type: gallerygrid
```

Since the field itself is not visible, it doesn't matter where you place it in the blueprint (on top, or below... it doesn't matter at all).

**That's it** - all blueprints with this field (or ```plug-in```) will now show a preview of an image / file, instead of a text-list.

****

##Configuration##

The plug-in (or ```field```) does have a simple configuration option.

You can set the size of the previe-thumbnail, in your ```config.php``` file (an example is included in the .zip-file).

- **s** : 50x50 px
- **m** : 75x75 px (Kirby default)
- **l** : 100x100 px

In your ```config.php``` you can set one of the above options like this;

```c::set("kirbyGalleryGrid", "m");```

Kirby will render all thumbnails in the size, set by the config-file.

****

![Kirby - GalleryGrid](kirby-gallerygrid.gif "Kirby - GalleryGrid")
*Version 1.0.0*