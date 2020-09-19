---
layout: archive
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* BSc in Statistics, Economics and Finance, University College London, 2016-2019
* MSc in Financial Mathematics, Cass Business School, 2019-2020

Research experiences
======
* The Estimation of the CO2 Emissions for Vehicles Manufactured in the EU Using Multivariate Features Data
  * Supervisor: Prof. Richard Chandler, Department of Statistics, UCL
    * Preprocessed 21,156 pieces of data on vehicle emissions in the EU; Target-encoded those categorical features with high cardinality; Linearly splined some of numerical features where necessary;
    * Used the Principal Component Analysis (PCA) as the dimension reduction algorithm to pick up those most important features that can describe most of the variation of the dataset;
    * Applied Elastic-Net regression to predict CO 2emissions, under L1 and L2 regularisation;
    * Used randomised search algorithm to tune the weights of L1 and L2 penalty.
    
* Financial Fraud Detection With Machine Learning
  * Supervisor: Prof. Alan Chalk, Director of Machine Learning Solution Ltd.
    * Applied penalised logistic regression on a 1 million entries dataset;
    * Encoded categorical features using Weight-of-Evidence encoder; included all the possible combinations of interaction pairs between those features with the largest 10 coefficients;
    * Used Gradient Boosting Decision Tree (GBDT) to fit residuals of the model iteratively, and linearly combined all classifiers learned at each iteration together to get a model with higher performance;
    * Explored automated machine learning algorithms such as Auto-Sklearn, Tree-Based Pipeline Optimisation Tool (TPOT) and AutoKeras, and used those algorithms to train our model; The final model returned by automated machine learning algorithms benefited from model ensemble.
    
* Credit Risk in Option Pricing: The Application of Jump-To-Default Models
  * Supervisor: Dr. Laura Ballotta, Cass Business School
    * Extended the traditional non-defaultable stochastic process of stock price S twith a default jump, which forces S tto jump to zero at the time of default $\tau$, and remains $S_{t}$ = 0 for all $t > \tau$; By adding a default intensity $\lambda$ in the drift, the discounted extended stock price process $e^{−r\cdot t}S_{t}$ is still a martingale under the risk-neutral measure;
    * Re-formularised the traditional option pricing method to include the probability of default contained in the jump-to-default extended $S_{t}$;
    * Employed diffusional stochastic volatility models (Heston’s type), pure jump Lévy models (the variance Gamma and the CGMY) as the base processes, and extended them with the jump-to-default component;
    * Used COS method which focuses on Fourier cosine expansion of characteristic function as the numerical pricing method; Derived characteristic functions for jump-to-default extended models;
    * Used observed put option prices for model calibration;
    * Revealed that the implied λ contains predictive information of credit riskiness of the underlying company.
  
Certificates
======
* Financial Risk Manager I & II (Global Association of Risk Professions)
* Coursera Course C++ Programming, Peking University
  
Programming Languages & Professional Softwares
======
RStudio / MATLAB / Python / SAS / STATA / OxMetrics / VBA
  
