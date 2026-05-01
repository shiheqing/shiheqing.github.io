---
layout: page
title: Researches
order: 1
---

<!--<p class="message">
  Hey there! This page is included as an example. Feel free to customize it for your own use upon downloading. Carry on!
</p>-->
<br>

## Working Papers &nbsp; &#128214;
<br>

- **<u>"Economics-Aware Machine Learning for Option-Implied Risk Metrics",</u>** <span style="color: blue;"><em>coauthored with Yi Cao, Zexun Chen, </em></span><span style="color: red;"><em>presented at EFMA 2025, ABFR Doctoral Symposium 2025</em></span><br><br>
The recovery (estimation) of asset return risk-neutral densities from cross-sectional option prices rely on strong model assumptions. At the same time, model-free recovery methods exist (see, e.g., [Shimko (1993)](https://www.researchgate.net/publication/306151578_Bounds_of_probability), [Aït-Sahalia and Lo (2000)](https://onlinelibrary.wiley.com/doi/abs/10.1111/0022-1082.215228), [Figlewski (2010)](https://academic.oup.com/book/5659/chapter-abstract/148732390?redirectedFrom=fulltext)), but they depend on the inter-/extra-polation of implied volatilities and the Black-Scholes formula. Both the model-based methods and the model-free methods work just fine for liquid, data-rich index options, but become brittle for illiquid, noisy stock options. We develop the **E**conomics-**A**ware **G**aussian **P**rocess which encodes the static no-arbitrage conditions ino the learned option price curves. Using the EAGP, we construct model-free stock-level RND aggregating both information from OTM call and put options. The EAGP-based RND improves the informativeness of a variety of metrics of stock returns, including the option-implied VaR, ES and moment-based metrics.

<div style="text-align: center;">
  <figure style="display: inline-block;">
    <img src="/images/example_rnd_ibm.jpg" alt="Recovered RNDs for IBM" style="width: 100%; height: auto">
    <figcaption>Example of the EAGP-recovered RNDs for ticker IBM</figcaption>
  </figure>
</div>

<br>

- **<u>"Bridging Structured Knowledge and Data: A Unified Framework with Finance Applications",</u>** <span style="color: blue;"><em>coauthored with Yi Cao, Zexun Chen, Lin William Cong, Guangyan Gan, </em></span><span style="color: red;"><em>presented at FoFI (Lancaster) 2026, ABFER 2026<sup>†</sup>, 5th Annual Hong Kong Conference on FinTech and AI in Finance<sup>†</sup>, ESIF 2026<sup>†</sup>, SoFiE 2026<sup>†</sup>, EFMA 2026<sup>†</sup>, 中国金融学术年会 CFRC 2026<sup>†</sup>, ESEM 2026<sup>†</sup></em></span><br><span style="color: #808080;">[<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6503558" style="color: inherit;">SSRN</a>]</span><span style="color: #808080;">[<a href="https://arxiv.org/abs/2604.00987" style="color: inherit;">arXiv</a>]</span><br><br>
We develop **S**tructured-**K**nowledge-**I**nformed **N**eural **N**etworks, a unified estimation framework that embeds theoretical, simulated, previously learned, or cross-domain insights as differentiable constraints within flexible neural function approximation. SKINNs jointly estimate neural network parameters and economically meaningful structural parameters in a single optimization problem, nesting approaches such as functional GMM, Bayesian updating, transfer learning, PINNs, and surrogate modeling. In an illustrative financial application to option pricing, SKINNs improve out-of-sample valuation and hedging performance, particularly at longer horizons and during high-volatility regimes, while recovering economically interpretable structural parameters with improved stability relative to conventional calibration. More broadly, SKINNs provide a general econometric framework for combining model-based reasoning with high-dimensional, data-driven estimation.

<div style="text-align: center;">
  <figure style="display: inline-block;">
    <img src="/images/SKINNs_architecture.png" alt="SKINNs" style="width: 100%; height: auto">
    <figcaption>The SKINNs architecture</figcaption>
  </figure>
</div>

<br><br>
## Publications &nbsp; &#128213;

<br>
<div style="clear: both; text-align: left; margin-top: 2.5rem;">
  <hr style="margin: 0 0 1rem 0; border: 0; border-top: 1px solid #e5e5e5;">

  <p style="font-size: 0.92em; color: #515151; margin: 0; text-align: left;"><sup>†</sup> Conference to be presented.</p>
</div>
