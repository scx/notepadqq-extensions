#!/bin/sh

cd "$( dirname "$( readlink -f "${0}" )" )" || { echo 'Fatal error!' >&2; exit 1; }

which flatpak >/dev/null 2>/dev/null || { echo 'Fatal error: flatpak not found!' >&2; exit 1; }
flatpak info 'com.notepadqq.Notepadqq' >/dev/null 2>/dev/null || { echo 'Fatal error: flatpak package not found!' >&2; exit 1; }

flatpak run --command='bash' 'com.notepadqq.Notepadqq' -c 'for d in */; do pushd "${d}"; rm *.nqqext ||:; node /app/share/notepadqq/extension_tools/pack.js . npm; popd; done'

