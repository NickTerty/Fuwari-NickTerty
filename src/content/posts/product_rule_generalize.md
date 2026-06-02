---
title: Product Rule的General Case
published: 2026-06-03
description: ' '
image: ''
tags: [微積分]
category: 'Calculus(I)'
draft: false 
lang: ''
series: Calculus
---
今天上機率時，老師有提到相乘要用什麼方式可以讓他們變成相加，老師提到了取 log 之後，我才突然想起 log 這東西真的很好用。<br>
在微積分討論微分時，會提到一個公式稱作Product Rule(乘法法則)：
$$
f(x)g(x)=f^\prime(x)g(x)+f(x)g^\prime(x)
$$
但是，假設當 $k=1,\,2,\,\dots,\,n$ 時，$f_k$ 是一個在區間內可微函數。如果要問你找 $\displaystyle\prod_{k=1}^nf_k(x)$ 的微分，用公式去暴力一個一個解開，一定很耗時間吧。<br>
這時，我們就需要用到取 log 了。<br>
> [!Note] Theorem (General Product Rule)
> Let $f_i$ be a differentiable functions on an open interval for $i=1,\,2,\,\dots,\,n$. Then the derivative of $\displaystyle\prod_{k=1}^nf_k(x)$ is
> $$\left(\prod_{k=1}^nf_k(x)\right)^\prime=\left(\prod_{k=1}^nf_k(x)\right)\cdot\left(\sum_{k=1}^n\frac{f^\prime_k(x)}{f_k(x)}\right).$$

接下來，我們會證明這個公式，也算是讓你推導說如何求出兩個以上函數相乘的微分。<br>
**Proof.** It is easy to solve $(fg)^\prime=f^\prime g+fg^\prime$ by product rule. However, it is difficult to solve when more than two function. We know that
$$
\ln{\left(\prod_{k=1}^nf_k(x)\right)}=\sum_{k=1}^n\ln{f_k(x)}.
$$
Differentiate both side, we obtain
$$
\begin{align*}
        \left[\ln{\left(\prod_{k=1}^nf_k(x)\right)}\right]^\prime=\left(\sum_{k=1}^n\ln{f_k(x)}\right)^\prime
        &\iff\frac{1}{\displaystyle\prod_{k=1}^nf_k(x)}\left(\prod_{k=1}^nf_k(x)\right)^\prime=\sum_{k=1}^n\frac{f_k^\prime(x)}{f_k(x)}\\
        &\iff\left(\prod_{k=1}^nf_k(x)\right)^\prime=\left(\prod_{k=1}^nf_k(x)\right)\cdot\left(\sum_{k=1}^n\frac{f^\prime_k(x)}{f_k(x)}\right).
\end{align*}
$$
Hence
$$
\left(\prod_{k=1}^nf_k(x)\right)^\prime=\left(\prod_{k=1}^nf_k(x)\right)\cdot\left(\sum_{k=1}^n\frac{f^\prime_k(x)}{f_k(x)}\right).
$$

當想到使用取對數時，這個廣義的 Product Rule 就會變得很好解，也算是突然想到可以試著找有沒有廣義的 Product Rule 公式然後去證明。