# Nodes Consensus Mechanism

The `qognet` Mesh relies on a multi-layered consensus model to ensure the integrity, speed, and security of its threat detection capabilities. By combining reputation-based incentives for data collection with high-stakes economic security for validation, the network aligns the interests of all participants (The Sentinel, Cognito, and Validator nodes) towards a single goal: the accurate and instantaneous neutralization of onchain threats.

## Proof of Reputation (PoR)

Sentinel Nodes are incentivized by reputation, not capital stake. The Proof-of-Reputation (PoR) system serves as the primary quality and reliability filter, dynamically adjusting a node's standing based on the quality and timeliness of the data it provides.

Beyond immediate rewards, the network employs a Proof of Reputation (PoR) system to build long-term trust and grant preferential network access to consistently reliable nodes.

### Reputation Score
TheEvery Sentinel (SN), Cognito (CN), and Validator Node (VN) maintains a dynamic, on-chain Reputation Score based on their historical performance:

- `SNs:` Assessccuracy and latency of raw data submission.

- `CNs:` Accuracy and non-deviation of QSS generation from the network median.

- `VNs:` Consistency in voting with the finalized, correct consensus.

### Benefits
Nodes with high PoR scores are granted preferential access to high-reward tasks, are selected more often for Validator consensus rounds, and can operate with lower stake requirements, creating a powerful incentive for long-term honest operation.

## Proof of Security (PoS)

Due to `CNs` critical role in generating signals, the operators are bound under a rigorous Proof-of-Security (PoS) consensus mechanism, requiring a substantial Collateral Stake in the **$QOG** token. This stake serves two purposes:

- **Sybil Resistance:** It prevents malicious actors from overwhelming the network with bad data or false signals.

- **Slashing:** `CN` operators are subject to severe penalties (slashing, often 50% of their collateral stake) for generating inaccurate, fraudulent, or delayed defensive signals, as determined by subsequent network consensus.

The necessity of this high stake ensures that CN operators are financially incentivized to maintain data integrity and accurate threat detection, aligning their economic interests with the network's defensive mission.

## Proof of Stake and Economic Security

`VNs` are secured by a strict Proof-of-Stake (PoS) model, requiring the largest Collateral Stake of $QOG token. This mechanism secures the final layer of network integrity.

- **Mandatory Stake:** Every `VN` operator must lock a substantial $QOG stake as collateral to participate in the validation and consensus process. This stake is a prerequisite for earning validation rewards.

- **Severe Slashing:** Any `VN` operator found to be colluding, withholding valid signals, or signing conflicting blocks are subject to immediate and severe penalties. The Slashing Rate for malicious behavior or prolonged downtime is set at 50% of the Collateral Stake.

### Governance and Tokenomics
In addition to signal validation, `VNs` are the primary mechanism for decentralized governance. Their proportional stake weight is used to vote on:

- **Protocol Upgrades:** Amendments to the Qognet Mesh codebase.

- **Threat Genome Management:** The inclusion or exclusion of certain threat identifiers or data sources.

- **Reward Parameters:** Adjustments to the proportional rewards distributed to `VNs`. `SNs` and `CNs`.