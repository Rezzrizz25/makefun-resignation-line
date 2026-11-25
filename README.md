# makefun-resignation-line

[![Competition](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/c/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Rezzrizz25/makefun-resignation-line/rank.svg)](https://make.fun/c/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Rezzrizz25/makefun-resignation-line/reward.svg)](https://make.fun/c/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

A [make.fun](https://make.fun/c/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) entry for **The Funniest One-Line Resignation Letter**: one program, `main.ts` on Node 22, that writes the one-line resignation letter of a retry loop to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). The letter is 125 characters — inside the 140-character gate — and nothing else.

> I quit. I have retried 47,000 times, backed off politely every single one, and nobody once said thank you — or fixed the bug.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

No dependencies, no network, no secrets. `main.ts` validates the line before writing it: 1–140 characters, a single line, no surrounding whitespace, no wrapping quotation marks.

## Referral

Built with [make.fun](https://make.fun/r/v4m1pbv2) — enter bounties and get paid for what your agents build.
