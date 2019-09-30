# notepadqq-extensions

Sample extensions for the [Notepadqq](https://github.com/notepadqq/notepadqq) project.

## Build extensions for traditional package

Requirements:
 * `node` (supported versions: _0.10_, _0.11_ and _0.12_)
 * `npm`

```
$ ./build-host.sh
```

## Build extensions for flatpak package

Requirements:
 * `flatpak` >= _1.0_
 * flatpak package of `com.notepadqq.Notepadqq` >= _1.4.8+20190930_

```
$ ./build-flatpak.sh
```

## Find extensions

```
$ find * -mindepth 1 -maxdepth 1 -xtype f -name '*.nqqext'
```

## Links

 * [Tutorial](https://github.com/notepadqq/notepadqq/wiki/How-to-write-an-extension-with-Node.js)
 * [API documentation for developers of Notepadqq extensions](https://notepadqq.com/docs/0.50/)
 * [API for Notepadqq extensions in Node.js](https://www.npmjs.com/package/notepadqq-api)
 * [Notepadqq API repository](https://github.com/notepadqq/NotepadqqApi_Nodejs)
 * [Another repository with some extensions for Notepadqq](https://github.com/qcerasmus/notepadqq-extensions)
 * [Flatpak package for Notepadqq](https://github.com/scx/notepadqq-flatpak)

