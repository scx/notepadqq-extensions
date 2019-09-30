#!/bin/sh

cd "$( dirname "$( readlink -f "${0}" )" )" || { echo 'Fatal error!' >&2; exit 1; }

which node >/dev/null 2>/dev/null || { echo 'Fatal error: node not found!' >&2; exit 1; }
which npm >/dev/null 2>/dev/null || { echo 'Fatal error: npm not found!' >&2; exit 1; }

bash -c 'for d in */; do pushd "${d}"; rm *.nqqext ||:; node /usr/share/notepadqq/extension_tools/pack.js . npm; popd; done'

