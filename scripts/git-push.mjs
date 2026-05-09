import { execSync } from "node:child_process";

function output(cmd) {
  return execSync(cmd, { encoding: "utf8", shell: true }).trim();
}

const branch =
  process.env.GIT_BRANCH ||
  output("git rev-parse --abbrev-ref HEAD");

execSync(`git push -u origin ${branch}`, { stdio: "inherit", shell: true });
