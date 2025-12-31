# Slashing Mechanisms

To maintain the integrity of the intelligence ecosystem, `qognet` implements strict, automated slashing mechanisms which will be enforced by smart contracts.

## Slashing Conditions

The following conditions trigger automatic slashing penalties:


### Inaccurate Signal Finality

If a Validator Node votes to finalize a Defensive Signal that is later proven incorrect or a false positive (e.g., if the signal causes an unnecessary circuit breaker without a threat being present), the staking collateral of the voting VNs is slashed.

### Data Tampering/Deviation
If Sentinel Nodes submit demonstrably manipulated or low-quality data, or if Cognito Nodes generate a QSS that deviates significantly from the cryptographically verified majority, if it's a `CN` operator, the staking collateral ofir stake is immediately penalized, if it's `SN` operator there node lose reputation. 

## The Slashing Rate

The slashing rate is set to be aggressively, 50% of the collateral stake for consensus errors to make the economic cost of manipulation significantly outweigh any potential gain, reinforcing the security posture of the network. The goal is to enforce trustless behavior through quantifiable cryptoeconomic risk.

## Other "Negative Value" Guardrail

To prevent "Ghost Reporting" (submitting fake threats to farm rewards), PoDV implements strict penalties:

- **False Positives:** If a node repeatedly flags legitimate transactions as threats, its Reputation Score drops, leading to lower reward tiers.
- **Malicious Collusion:** If a Validator signs an objectively false signal, 50% of its stake is slashed immediately
- **Inactivity/Downtime:** Validator Nodes are expected to maintain high availability. Prolonged or frequent downtime beyond a specified threshold will result in a proportional slashing of their staked collateral. This ensures the network's continuous operation and responsiveness.
- **Double-Signing:** Any attempt by a Validator Node to sign two different blocks or states at the same height will result in an immediate and severe slashing of their stake, typically 100%. This is a critical security measure to prevent forks and maintain consensus integrity.
- **Invalid State Transitions:** If a Validator Node proposes or votes on an invalid state transition that violates the protocol rules, their stake will be slashed. This ensures all network participants adhere to the defined protocol logic.