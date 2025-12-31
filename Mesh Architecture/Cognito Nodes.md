# Cognito Nodes

Cognito Nodes (CNs) represent the computational and intelligent core of the Qognet Mesh. They are high-performance, security-focused machines responsible for validating data streams, executing the core AI models, and generating the definitive, preemptive threat signals that define the Qognet service.

## Role: AI Inference and Threat Signal Generation
CNs operate the sophisticated machine learning models that constitute the Cognitive Layer of the <code>qognet</code> ecosystem.

## Functions

- Data Validation: CNs receive raw, normalized data packets from Sentinel Nodes (SNs) and perform rapid integrity checks. A packet is validated if it is timely, non-redundant, and verifiable against source chain data. This process directly feeds into the Sentinel Nodes' Proof-of-Reputation score.

- AI Inference: They execute specialized Graph Neural Network (GNN) models designed to analyze the entire transaction graph in real-time. These models identify highly complex, multi-step attack vectors and statistically anomalous behaviors that precede an exploit (e.g., flash loan preparations, malicious contract approvals).

- Threat Genome Look-up: Detected anomalies and behavioral patterns are compared against the Threat Genome, Qognet's proprietary, dynamically updated database of known and emergent exploit signatures.

- Signal Generation: Upon consensus confirmation, CNs generate a cryptographically signed Defensive Signal, which is the core output of the Qognet service, instantly notifying integrators of an impending threat.

## Operational Requirements, Acquisition and Rewards

### Operational Requirements

CNs require significantly more computational power (GPU/high-core CPU) than SNs due to the demanding nature of running constant GNN inference, and a significant $QOG Collateral Stake

### Acquisition
Regarding availability or acquisition, the method for acquiring and operating a Cognito Node, whether through a direct license sale, a free software model requiring only the QOG collateral stake, or a decentralized auction/lottery—remains under active discussion and will be determined based on optimal economic and security scaling models. However, the requirement for a significant $QOG Collateral Stake for participation is immutable.

### Consensus
CNs operators are bound by the Proof-of-Reputation (PoR) Mechanism

<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; margin-bottom: 1rem;">
  <a href="./Nodes%20Consensus%20Mechanism#proof-of-security-pos" style="flex: 1 1 250px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: none; text-align: center; text-decoration: none; background-color: var(--vp-c-bg-soft);">
    <h4 style="margin: 0; border: none;">Nodes Consensus Mechanisms</h4>
  </a>
</div>

### Rewards
CNs receive the largest share (typically 50% - 60%) of the total Proof-of-Defensive-Value (PoDV) reward pool, commensurate with their high computational cost and the financial risk associated with their collateral stake.