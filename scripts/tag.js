/* eslint-disable no-console */

const util = require("util");
const child_process = require("child_process");
const conventionalRecommendedBump = require("conventional-recommended-bump");
const gitLatestSemverTag = require("git-latest-semver-tag");
const SemVer = require("semver");

const exec = util.promisify(child_process.exec);
const recommendedBump = util.promisify(conventionalRecommendedBump);
const latestSemverTag = util.promisify(gitLatestSemverTag);

const run = async (command, arg) => {
  const { stdout } = await exec(command + " " + arg);
  return stdout.trimRight();
};

const git = run.bind(null, "git");

const bump = async () => {
  const tag = await latestSemverTag();
  const recommendation = await recommendedBump({ preset: "angular" });

  const semver = new SemVer(tag);
  const { version } = semver.inc(recommendation.releaseType);

  console.log(recommendation.reason);

  await git(`tag -a ${version} -m ""`);
};

try {
  bump();
} catch (error) {
  console.error(error);
}
