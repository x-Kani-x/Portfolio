import { useState, useEffect } from 'react';
import { personalInfo, getLeetCodeUsername } from '../data/portfolioData';

const CACHE_KEY = 'portfolio_leetcode_stats_cache';
const SKILLRACK_COUNT = 110;
const CODEFORCES_COUNT = 36;
const DEFAULT_LEETCODE = 304;
const DEFAULT_EASY = 155;
const DEFAULT_MEDIUM = 125;
const DEFAULT_HARD = 24;

export function useLeetCodeStats() {
  const username = getLeetCodeUsername();

  const [stats, setStats] = useState(() => {
    // 1. Check localStorage for fast instant render
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed && typeof parsed.leetcodeSolved === 'number' && parsed.leetcodeSolved > 0) {
            return {
              leetcodeSolved: parsed.leetcodeSolved,
              totalSolved: parsed.leetcodeSolved + SKILLRACK_COUNT + CODEFORCES_COUNT,
              easySolved: parsed.easySolved || DEFAULT_EASY,
              mediumSolved: parsed.mediumSolved || DEFAULT_MEDIUM,
              hardSolved: parsed.hardSolved || DEFAULT_HARD,
              loading: false,
              updatedAt: parsed.updatedAt || null,
            };
          }
        }
      } catch (err) {
        // ignore storage access errors
      }
    }

    return {
      leetcodeSolved: DEFAULT_LEETCODE,
      totalSolved: DEFAULT_LEETCODE + SKILLRACK_COUNT + CODEFORCES_COUNT,
      easySolved: DEFAULT_EASY,
      mediumSolved: DEFAULT_MEDIUM,
      hardSolved: DEFAULT_HARD,
      loading: true,
      updatedAt: null,
    };
  });

  useEffect(() => {
    if (!username) {
      return;
    }

    let isMounted = true;

    async function fetchStats() {
      // Primary and fallback public APIs for LeetCode stats
      const apiEndpoints = [
        `https://alfa-leetcode-api.onrender.com/${username}/solved`,
        `https://leetcode-api-faisalshohag.vercel.app/${username}`,
        `https://leetcode-stats-api.herokuapp.com/${username}`,
      ];

      for (const endpoint of apiEndpoints) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 6000);

          const res = await fetch(endpoint, { signal: controller.signal });
          clearTimeout(timeoutId);

          if (!res.ok) continue;

          const data = await res.json();
          const solved = data.totalSolved ?? data.solvedProblem ?? data.total_solved;

          if (typeof solved === 'number' && solved > 0) {
            if (isMounted) {
              const freshStats = {
                leetcodeSolved: solved,
                totalSolved: solved + SKILLRACK_COUNT + CODEFORCES_COUNT,
                easySolved: data.easySolved ?? data.easySolvedCount ?? 0,
                mediumSolved: data.mediumSolved ?? data.mediumSolvedCount ?? 0,
                hardSolved: data.hardSolved ?? data.hardSolvedCount ?? 0,
                loading: false,
                updatedAt: new Date().toISOString(),
              };

              setStats(freshStats);

              try {
                localStorage.setItem(CACHE_KEY, JSON.stringify(freshStats));
              } catch (e) {
                // ignore
              }
            }
            return;
          }
        } catch (e) {
          // Attempt next endpoint on failure or timeout
        }
      }
    }

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return stats;
}

export const useLeetCode = useLeetCodeStats;

