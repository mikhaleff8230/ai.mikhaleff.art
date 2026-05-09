import { execSync } from "node:child_process";

const branch = process.env.GIT_BRANCH || "main";
const msg =
  process.argv.slice(2).join(" ").trim() ||
  process.env.GIT_COMMIT_MSG ||
  "chore: sync";

function run(cmd) {
  execSync(cmd, { stdio: "inherit", shell: true });
}

function output(cmd) {
  return execSync(cmd, { encoding: "utf8", shell: true }).trim();
}

run("git add -A");

const dirty = output("git status --porcelain");
if (dirty) {
  run(`git commit -m ${JSON.stringify(msg)}`);
} else {
  console.log("Nothing to commit (working tree clean).");
}

run(`git push -u origin ${branch}`);
