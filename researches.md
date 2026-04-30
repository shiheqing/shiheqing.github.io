---
layout: page
title: Researches
order: 1
---

<!--<p class="message">
  Hey there! This page is included as an example. Feel free to customize it for your own use upon downloading. Carry on!
</p>-->
<br>

- **<u>Economics-Aware Machine Learning for Option-Implied Risk Metrics</u>** <br><br>
The recovery (estimation) of asset return risk-neutral densities from cross-sectional option prices rely on strong model assumptions. At the same time, model-free recovery methods exist (see, e.g., [Shimko, 1993](https://www.researchgate.net/publication/306151578_Bounds_of_probability), [(Aït-Sahalia and Lo, 2000)](https://onlinelibrary.wiley.com/doi/abs/10.1111/0022-1082.215228), [(Figlewski, 2010)](https://academic.oup.com/book/5659/chapter-abstract/148732390?redirectedFrom=fulltext)), but they depend on the inter-/extra-polation of implied volatilities and the Black-Scholes formula. Both the model-based methods and the model-free methods work just fine for liquid, data-rich index options, but become brittle for illiquid, noisy stock options. We develop the **E**conomics-**A**ware **G**aussian **P**rocess which encodes the static no-arbitrage conditions ino the learned option price curves. Using the EAGP, we construct model-free stock-level RND aggregating both information from OTM call and put options. The EAGP-based RND improves the informativeness of a variety of metrics of stock returns, including the option-implied VaR, ES and moment-based metrics.

<div style="text-align: center;">
  <figure style="display: inline-block;">
    <img src="/images/example_rnd_ibm.jpg" alt="Recovered RNDs for IBM" style="width: 100%; height: auto">
    <figcaption>Example recovered RNDs for IBM</figcaption>
  </figure>
</div>

- **<u>Finance-Informed Neural Networks for Option Pricing:</u>** <br><br>
We propose a Finance-informed Neural Network (FINN) framework for option pricing which encodes the domain knowledge given by the functional of an option pricing model who admits a (semi) closed-form solution into a data-driven neural network. Our FINN framwork allows a battery of option pricing functionals, and outperforms both the plain data-driven neural network, and the structural models, for the tasks of pricing and hedging. 

<div style="text-align: center;">
  <figure style="display: inline-block;">
    <img src="/images/FINNs_option_price_surf_simulation_ReLU_v2__.png" alt="FINNs" style="width: 100%; height: auto">
    <figcaption>FINNs with various functional specifications with domain knowledge</figcaption>
  </figure>
</div>
