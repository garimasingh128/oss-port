import React, { FunctionComponent } from "react";
import { GitHubMetric } from "../types";

type Props = {
  className?: string;
  stats: {
    prsCreated: GitHubMetric;
    prsMerged: GitHubMetric;
    contributors: GitHubMetric;
  };
};

function formatMetric(metric: GitHubMetric) {
  if (metric.maybeMore) {
    if (metric.count > 20) {
      return Math.floor(metric.count / 10) * 10 + "+";
    } else {
      return metric.count + "+";
    }
  }
  return metric.count;
}

const RepoStats: FunctionComponent<Props> = ({ stats, className }) => {
  return (
    <div className={className}>
      <h2 className="text-sm font-bold text-black-500 mb-4">Last 30 days</h2>
      <div className="flex justify-between text-black-500 space-x-4 text-center">
        <div>
          <div className="text-2xl font-bold">
            {formatMetric(stats.prsCreated)}
          </div>
          <small className="text-black-400 text-xs uppercase whitespace-nowrap">
            PRs opened
          </small>
        </div>
        <div>
          <div className="text-2xl font-bold">
            {formatMetric(stats.prsMerged)}
          </div>
          <small className="text-black-400 text-xs uppercase whitespace-nowrap">
            PRs merged
          </small>
        </div>
        <div>
          <div className="text-2xl font-bold">
            {formatMetric(stats.contributors)}
          </div>
          <small className="text-black-400 text-xs uppercase whitespace-nowrap">
            Contributors
          </small>
        </div>
      </div>
    </div>
  );
};

export default RepoStats;