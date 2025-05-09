import * as os from 'node:os'
import * as cp from 'node:child_process'
import * as fs from 'node:fs'

/** @type {"pre-release" | "bleeding" | undefined } */
let version = process.env["MOONBIT_INSTALL_VERSION"]

let platform = os.platform()

let out = null

if (platform === 'win32') {
  out = cp.execSync(`pwsh -c "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser; irm https://cli.moonbitlang.com/install/powershell.ps1 | iex"`);
} else {
  let ver = ""

  if (version !== undefined) {
    ver = version
  }
  out = cp.execSync(`curl -fsSL https://cli.moonbitlang.com/install/unix.sh | bash -s ${ver}`);
}

console.log(out.toString())