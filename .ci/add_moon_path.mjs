import * as os from 'node:os'
import * as cp from 'node:child_process'
import * as fs from 'node:fs'

let platform = os.platform()

let github_path = process.env["GITHUB_PATH"]
if (platform === 'win32') {
  fs.appendFileSync(github_path,"C:\\Users\\runneradmin\\.moon\\bin")
} else if (platform === 'linux') {
  fs.appendFileSync(github_path,"/home/runner/.moon/bin")
} else {
  fs.appendFileSync(github_path,"/Users/runner/.moon/bin")
}