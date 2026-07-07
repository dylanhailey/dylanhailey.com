---
title: "LagBench: putting real numbers on 'the security agent is slowing my Mac down'"
description: "Why I built a macOS utility to measure system performance impact, and how it turned endless complaints about security tooling into logs, data, and fixes."
pubDatetime: 2026-07-02T12:00:00Z
category: projects
tags:
  - macos
  - performance
  - security-tooling
draft: true
---

Every security engineer who has rolled out an endpoint agent has heard the same complaint: "my laptop got slow after IT installed that thing." Sometimes it's true. Sometimes it's a browser with 200 tabs. The problem is that nobody on either side of the conversation has data — the user has a feeling, and the security team has a vendor datasheet. I built LagBench to close that gap: a small macOS utility that tracks the symptoms people actually complain about and captures the system state around them, so the conversation can move from perception to evidence.

LagBench watches for the moments that feel like lag — spinning cursors, slow app launches, input latency spikes, sustained CPU pressure — and snapshots what the system was doing when they happened: which processes were hot, disk and memory pressure, and whether an endpoint security extension was in the hot path. When I ran it across my own fleet complaints, the results were genuinely mixed. Some slowdowns traced cleanly to a misconfigured file-scanning policy hammering developer build directories; others had nothing to do with security tooling at all. Either way, I finally had the logs to explain *why* a machine felt slow and a concrete fix or an honest answer to hand back.

The part I care most about long-term is repeatability. Because LagBench runs the same measurements every time, a security team can baseline a clean machine, install or reconfigure an agent, and run the exact same workload again — before rollout, after every policy change, after every vendor update. That turns "does our EDR slow people down?" from a debate into a regression test. This post walks through why the tool exists, what it measures, and how to fold it into an endpoint tooling review process.
