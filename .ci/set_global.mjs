import * as os from 'node:os'
import * as cp from 'node:child_process'
import * as fs from 'node:fs'

let home = null
let platform = os.platform()

if (platform === 'win32') {
  home = "C:\\Users\\runneradmin"
} else if (platform === 'darwin') {
  home = "/Users/runner"
} else {
  home = "/home/runner"
}

let github_output = process.env["GITHUB_OUTPUT"]


/** @type {"pre-release" | "bleeding" | undefined } */
let version = process.env["MOONBIT_INSTALL_VERSION"]


let key = null

let now = new Date()

let year = now.getFullYear()
let month = now.getMonth()
let day = now.getDate()
let week_of_month = Math.round(day / 7)

if (version === 'pre-release') {
  key = `${year}-${month}-${day}`
} else {
  key = `${year}-${month}-${week_of_month}`
}

let out = [`home=${home}`, `key=${key}`]

fs.appendFileSync(github_output,
  out.join("\n")
)